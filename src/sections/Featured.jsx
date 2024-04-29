import { Row } from "antd";
import { products } from "../constants/data";
import Product from "../components/Product";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/filterSlice";
import { Link } from "react-router-dom";

const Featured = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.filter.category);

  const handleCategoryClick = (category) => {
    dispatch(setCategory(category));
  };

  const filteredProducts = category
    ? products.filter(
        (product) => product.category === category && product.isFeatured
      )
    : products.filter((product) => product.isFeatured);

  const featuredProducts = filteredProducts.map((product) => (
    <Product
      key={product.id}
      id={product.id}
      imgURL={product.imgURL}
      pname={product.name}
      quantity={product.quantity}
      price={product.price}
    />
  ));

  return (
    <section className="flex flex-col gap-12">
      <h2 className="text-[40px] font-semibold text-center ">Featured Now</h2>
      <div className="flex justify-center mb-5">
        <p
          onClick={() => handleCategoryClick("")}
          className="px-5 cursor-pointer"
        >
          ALL
        </p>
        <Link
          onClick={() => handleCategoryClick("Cardio Equipment")}
          className="px-5 border-l border-black border-solid cursor-pointer"
        >
          CARDIO EQUIPMENT
        </Link>
        <Link
          onClick={() => handleCategoryClick("Weight Training")}
          className="px-5 border-l border-black border-solid cursor-pointer"
        >
          WEIGHT TRAINING
        </Link>
        <Link
          onClick={() => handleCategoryClick("Fitness Accessories")}
          className="px-5 border-l border-black border-solid cursor-pointer"
        >
          FITNESS ACCESSORIES
        </Link>
        <Link
          onClick={() => handleCategoryClick("Commercial Equipment")}
          className="px-5 border-l border-black border-solid cursor-pointer"
        >
          COMMERCIAL EQUIPMENT
        </Link>
      </div>
      <Row className="grid grid-cols-4 gap-5">{featuredProducts}</Row>
    </section>
  );
};

export default Featured;
