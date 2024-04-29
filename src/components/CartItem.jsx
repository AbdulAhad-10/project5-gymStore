import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { increase, decrease, removeItem } from "../redux/cartSlice";

const CartItem = ({ id, imgURL, name, price, quantity }) => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increase(id));
  };

  const handleDecrement = () => {
    dispatch(decrease(id));
  };

  const handleRemove = () => {
    dispatch(removeItem(id));
  };

  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center gap-10">
        <img src={imgURL} alt={name} className="w-24 h-24" />
        <div className="flex gap-10">
          <div>
            <p className="w-80 text-wrap">{name}</p>
            <p className="text-[#ca0815]">{` Rs ${price}`}</p>
          </div>
          <div className="flex flex-col items-center">
            <FaChevronUp onClick={handleIncrement} />
            <p>{quantity}</p>
            <FaChevronDown onClick={handleDecrement} />
          </div>
          <button onClick={handleRemove}>Remove</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
