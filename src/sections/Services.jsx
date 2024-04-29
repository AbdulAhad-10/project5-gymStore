import cash from "../assets/icons/cash.png";
import online from "../assets/icons/online.png";
import shipping from "../assets/icons/shipping.png";

const Services = () => {
  return (
    <section>
      <div className="flex justify-between">
        <div className="flex items-center gap-6 ">
          <img src={cash} alt="" className="w-20 h-20 " />
          <div className="text-sm ">
            <p className="mb-1 font-semibold">Cash On Delivery</p>
            <p>For Orders Up to Rs. 30,000</p>
          </div>
        </div>

        <div className="flex items-center gap-6 border-l-2 border-[#e5e5e5] border-solid pl-5">
          <img src={online} alt="" className="w-20 h-20 " />
          <div className="text-sm ">
            <p className="mb-1 font-semibold">Online Support</p>
            <p>Dedicated Online Support</p>
          </div>
        </div>

        <div className="flex items-center gap-6 border-l-2 border-[#e5e5e5] border-solid pl-5">
          <img src={shipping} alt="" className="w-20 h-20 " />
          <div className="text-sm ">
            <p className="mb-1 font-semibold">Free Delivery in Karachi</p>
            <p>For Orders Over Rs. 20,000</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
