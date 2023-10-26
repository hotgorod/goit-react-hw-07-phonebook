import css from './Filter.module.css';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/contactSlice';

const Filter = () => {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();
  return (
    <label>
      Find contacts by name
      <input
        className={css.inputText}
        type="text"
        value={filter}
        onChange={event => dispatch(changeFilter(event.target.value))}
      ></input>
    </label>
  );
};

export default Filter;
