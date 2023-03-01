import css from './contactItem.module.css'
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
// import { delContact } from 'redux/contactsSlice';

const ContactItem = ({ id, name, phone }) => {

    const dispatch = useDispatch();

    const deleteContact = (e) => {
        const contactDelID = e.currentTarget.name;
        // dispatch(delContact(contactDelID));
    };

    return (
        <li>{ name }: { phone } 
            <button
             name={ id }
             className={ css.contactItemButton }
             onClick={ deleteContact }>Delete</button>
        </li>
    );
}

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
}

export default ContactItem;