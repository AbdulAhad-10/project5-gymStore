import Product from "./Product";
import { products } from "../constants/data";
import { Row } from "antd";
import { useSelector } from "react-redux";

const Products = ({ currentPage, productsPerPage }) => {
  const category = useSelector((state) => state.filter.category);
  const priceRange = useSelector((state) => state.filter.priceRange);

  // Calculate the index range for the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  let filteredProducts = products;
  if (category) {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === category
    );
  }
  if (priceRange) {
    filteredProducts = filteredProducts.filter(
      (product) =>
        product.price >= priceRange[0] && product.price <= priceRange[1]
    );
  }

  // Get the products for the current page
  const currentProductsData = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const currentProducts = currentProductsData.map((product) => {
    return (
      <Product
        id={product.id}
        key={product.id}
        imgURL={product.imgURL}
        pname={product.name}
        quantity={product.quantity}
        price={product.price}
      />
    );
  });

  return <Row className="grid grid-cols-3 gap-5">{currentProducts}</Row>;
};

export default Products;
