import { Flex, Layout, Pagination, Slider } from "antd";
import Footer from "../sections/Footer";
import { useState, useEffect } from "react";
import Products from "../components/Products";
import { useDispatch, useSelector } from "react-redux";
import { setCategory, setPriceRange } from "../redux/filterSlice";
import { products } from "../constants/data";

const { Sider, Content } = Layout;
const siderStyle = {
  textAlign: "center",
  color: "black",
  backgroundColor: "white",
};
const layoutStyle = {
  overflow: "hidden",
  width: "100%",
};
const marks = {
  0: "0",
  75000: "75000",
  250000: "250000",
  500000: "500000",
};

const Shop = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;
  const dispatch = useDispatch();
  const category = useSelector((state) => state.filter.category);
  const priceRange = useSelector((state) => state.filter.priceRange);
  const [totalProducts, setTotalProducts] = useState(products.length);

  useEffect(() => {
    let filteredProducts = products;
    if (category) {
      filteredProducts = products.filter(
        (product) => product.category === category
      );
      setTotalProducts(filteredProducts.length);
    }
    if (priceRange) {
      filteredProducts = filteredProducts.filter(
        (product) =>
          product.price >= priceRange[0] && product.price <= priceRange[1]
      );
    } else {
      setTotalProducts(products.length);
    }
  }, [category, priceRange]);

  const handlePagination = (page) => {
    setCurrentPage(page);
  };

  const handleCategoryClick = (category) => {
    dispatch(setCategory(category));
  };

  const handlePriceRangeChange = (value) => {
    dispatch(setPriceRange(value));
  };

  return (
    <div>
      <Flex gap="middle" wrap="wrap">
        <Layout style={layoutStyle}>
          <Sider width="25%" style={siderStyle}>
            <div className="flex flex-col items-center gap-10 pt-10 ">
              <button onClick={() => handleCategoryClick("")}>All</button>
              <button onClick={() => handleCategoryClick("Cardio Equipment")}>
                Cardio Equipment
              </button>
              <button
                onClick={() => handleCategoryClick("Commercial Equipment")}
              >
                Commercial Equipment
              </button>
              <button
                onClick={() => handleCategoryClick("Fitness Accessories")}
              >
                Fitness Accessories
              </button>
              <button onClick={() => handleCategoryClick("Weight Training")}>
                Weight Training
              </button>
              <Slider
                range
                min={0}
                max={500000}
                marks={marks}
                defaultValue={[0, 0]}
                className="w-3/4"
                onChange={handlePriceRangeChange}
              />
            </div>
          </Sider>
          <Layout>
            <Content className="flex justify-center py-10">
              <Products
                currentPage={currentPage}
                productsPerPage={productsPerPage}
              />
            </Content>
          </Layout>
        </Layout>
      </Flex>
      <Pagination
        defaultCurrent={1}
        total={totalProducts}
        current={currentPage}
        onChange={(page) => {
          handlePagination(page);
        }}
        className="flex justify-center my-10"
      />
      <Footer />
    </div>
  );
};

export default Shop;
