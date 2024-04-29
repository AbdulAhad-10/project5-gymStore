import { useSelector, useDispatch } from "react-redux";
import CartItem from "../components/CartItem";
import { clearCart } from "../redux/cartSlice";
import { useState } from "react";
import { Modal } from "antd";

const Cart = () => {
  const { cartItems, total } = useSelector((store) => store.cart);
  const [successModal, setSuccessModal] = useState(false);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleProceedToNext = () => {
    setSuccessModal(true);
    setTimeout(() => {
      setSuccessModal(false);
    }, 3000);
  };

  return (
    <div className="flex items-center justify-between px-20 mt-10">
      <div className="flex flex-col gap-10">
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
            {cartItems.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
          </>
        )}
      </div>

      <div className="flex flex-col items-center gap-5 p-20 border-2 border-gray-300 border-solid rounded-lg">
        <p className="text-2xl">{`Total: Rs ${total}`}</p>

        <div className="flex flex-col gap-5">
          <button onClick={handleClearCart} className="py-4 px-5 bg-[#ca0815] ">
            Clear Cart
          </button>
          <button
            onClick={handleProceedToNext}
            className="py-4 px-5 bg-[#fee500] "
          >
            Proceed to Next
          </button>
        </div>
        <Modal
          title="Success"
          open={successModal}
          onOk={() => setSuccessModal(false)}
          onCancel={() => setSuccessModal(false)}
          footer={null}
        >
          <p>Successfully proceeded to next step!</p>
        </Modal>
      </div>
    </div>
  );
};

export default Cart;
