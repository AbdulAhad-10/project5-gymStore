import machine from "../assets/machine.jpg";
import commercial from "../assets/commercial.jpg";
import dumbles from "../assets/dumbles.jpg";
import accessories from "../assets/accessories.jpg";
import { useDispatch } from "react-redux";
import { setCategory } from "../redux/filterSlice";
import { Link } from "react-router-dom";

const Categories = () => {
  const dispatch = useDispatch();

  const handleCategoryClick = (category) => {
    dispatch(setCategory(category));
  };

  return (
    <div className="flex justify-center">
      <div className="flex px-10 py-4 my-10 bg-white shadow-lg gap-14">
        <Link
          to="/shop"
          onClick={() => handleCategoryClick("Cardio Equipment")}
        >
          <img src={machine} alt="" />
          <h6 className="text-center hover:text-[#fee500] hover:bg-[rgba(0,0,0,0.5)] uppercase font-semibold">
            Cardio Equipment
          </h6>
        </Link>

        <Link to="/shop" onClick={() => handleCategoryClick("Weight Training")}>
          <img src={dumbles} alt="" />
          <h6 className="text-center hover:text-[#fee500] hover:bg-[rgba(0,0,0,0.5)] uppercase font-semibold">
            Weight Training
          </h6>
        </Link>

        <Link
          to="/shop"
          onClick={() => handleCategoryClick("Fitness Accessories")}
        >
          <img src={accessories} alt="" />
          <h6 className="text-center hover:text-[#fee500] hover:bg-[rgba(0,0,0,0.5)] uppercase font-semibold">
            Fitness Accessories
          </h6>
        </Link>

        <Link
          to="/shop"
          onClick={() => handleCategoryClick("Commercial Equipment")}
        >
          <img src={commercial} alt="" />
          <h6 className="text-center hover:text-[#fee500] hover:bg-[rgba(0,0,0,0.5)] uppercase font-semibold">
            Commercial Equipment
          </h6>
        </Link>
      </div>
    </div>
  );
};

export default Categories;
