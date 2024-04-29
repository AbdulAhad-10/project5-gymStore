import { useParams } from "react-router-dom";
import { products } from "../constants/data";
import Footer from "../sections/Footer";
import { addToCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";

const ProductDetails = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const details = products.map((product) => {
    return (
      product.id == params.id && (
        <div className="flex flex-col gap-10" key={product.id}>
          <div className="flex items-center justify-center gap-10 bg-white">
            <img src={product.imgURL} className="w-[450px] h-[450px] " />

            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-1 border-b border-solid border-[#888] pb-2">
                <h3 className="text-2xl text-[#17181a] font-semibold">
                  {product.name}
                </h3>
                <p className="text-base text-[#ca0815]">
                  {product.quantity != 0
                    ? `Rs ${product.price}`
                    : "Out of Stock"}
                </p>
              </div>
              <p>
                <span className="font-semibold">Category: </span>
                {`${product.category}`}
              </p>
              {product.quantity != 0 && (
                <button
                  className="bg-[#fee500] text-white px-5 py-2 my-5"
                  onClick={() => {
                    console.log(product.id);
                    dispatch(addToCart(product.id));
                  }}
                >
                  Add to Cart
                </button>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-2 p-10">
            <h2 className="text-xl font-bold">Description</h2>
            <p>{product.desciption}</p>
          </div>
          <Footer />
        </div>
      )
    );
  });

  return <div>{details}</div>;
};

export default ProductDetails;
