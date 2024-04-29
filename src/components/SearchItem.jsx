import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SearchItem = ({ handleClick }) => {
  const searchItems = useSelector((state) => state.search.searchItems);
  return (
    <>
      {searchItems.map((item) => (
        <Link
          onClick={handleClick}
          to={`/shop/${item.id}`}
          key={item.id}
          className="flex items-center justify-between gap-5 py-3"
        >
          <img src={item.imgURL} alt={item.name} className="w-20 h-20" />
          <h4>{item.name}</h4>
        </Link>
      ))}
    </>
  );
};

export default SearchItem;
