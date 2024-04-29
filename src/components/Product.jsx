import { Col } from "antd";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const Product = (props) => {
  const { id, imgURL, pname, quantity, price } = props;
  const dispatch = useDispatch();

  return (
    <Col className="gutter-row" span={6}>
      <div className="w-[270px] h-[450px] bg-white flex flex-col items-center  pb-5">
        <Link to={`/shop/${id}`} className="flex flex-col items-center">
          <img src={imgURL} alt="" className="max-w-full h-[200px]" />

          <div className="flex flex-col items-center justify-center gap-5">
            <h4 className="text-base text-[#323232] px-3 text-center h-[70px] pt-3">
              {pname}
            </h4>
            {quantity == 0 ? (
              <h4 className="text-base text-[#ca0815] px-3 text-center py-3">
                Out of Stock
              </h4>
            ) : (
              <div>
                <h4 className="text-base text-[#ca0815] px-3 text-center py-3">
                  {quantity != 0 ? `Rs ${price}` : "Out of Stock"}
                </h4>
                <h4 className="text-base text-[#ca0815] px-3 text-center py-3">
                  {quantity != 0 ? `Quantity: ${quantity}` : "Out of Stock"}
                </h4>
              </div>
            )}
          </div>
        </Link>
        {quantity != 0 && (
          <button
            className="bg-[#fee500] text-white px-5 py-2"
            onClick={() => dispatch(addToCart(id))}
          >
            Add to Cart
          </button>
        )}
      </div>
    </Col>
  );
};

export default Product;
