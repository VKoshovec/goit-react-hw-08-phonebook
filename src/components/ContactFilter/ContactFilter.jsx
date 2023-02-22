import css from './contactFilter.module.css';
import PropTypes from 'prop-types';

// redux
import { useSelector, useDispatch } from "react-redux";
import { updFilter } from 'redux/filterSlice';
import { getFiltrState } from 'redux/selectors';

const ContactFilter = ( {onChange , value} ) => {

    const stateFilter = useSelector(getFiltrState);
    const dispatch = useDispatch();


    console.log(stateFilter);

    const  hendleChange = (e) => {
        const findName = e.currentTarget.value;
        onChange (findName);
        dispatch(updFilter(findName));
     };

    return (<div className={ css.filter }>
        <label>Find contacts by name
           <input 
             onChange={ hendleChange } 
             value={ stateFilter }
             type="text"
             name="filter"
             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
             required>
             </input>
         </label>
     </div>)
};

ContactFilter.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
};

export default ContactFilter;