import css from './Filter.module.css';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { selectItemsFilter } from 'redux/contacts.selectors';
import { setFilter } from 'redux/contactSlice';


const Filter = () => {
  const filter = useSelector(selectItemsFilter);
  const dispatch = useDispatch();

  const handleFilter = ({ target: { value } }) => {
    dispatch(setFilter(value));
  };

  return (
    <label>
      Find contacts by name
      <input
        className={css.inputText}
        type="text"
        value={filter}
        onChange={handleFilter}
      ></input>
    </label>
  );
};

export default Filter;
