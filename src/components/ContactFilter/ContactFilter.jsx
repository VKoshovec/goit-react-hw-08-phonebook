import css from './contactFilter.module.css';

// redux
import { useSelector, useDispatch } from "react-redux";
import { updFilter } from 'redux/filterSlice';
import { selectFiltrState } from 'redux/selectors';

const ContactFilter = ( ) => {

    const filterState = useSelector(selectFiltrState);
    const dispatch = useDispatch();

    const  hendleChange = (e) => {
        const findName = e.currentTarget.value;
        dispatch(updFilter(findName));
     };

    return (<div className={ css.filter }>
        <label>Find contacts by name
           <input 
             onChange={ hendleChange } 
             value={ filterState }
             type="text"
             name="filter"
             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
             required>
             </input>
         </label>
     </div>)
};

export default ContactFilter;