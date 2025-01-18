import s from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectFilter, setFilter } from "../../redux/filterSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <div className={s.filterWrap}>
      <p className={s.label}>Find contacts by name</p>
      <input
        type="text"
        value={filter}
        onChange={(e) => dispatch(setFilter(e.target.value))}
      />
    </div>
  );
};

export default SearchBox;
