import css from './contactItem.module.css'
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { fetchDelContact } from 'redux/contacts/contactsOperations';

//chakra 
import {
    ListItem,
    ListIcon,
  } from '@chakra-ui/react';
  import { PhoneIcon, DeleteIcon } from '@chakra-ui/icons'
  

const ContactItem = ({ id, name, phone }) => {

    const dispatch = useDispatch();

    const deleteContact = (e) => {
        const contactDelID = e.currentTarget.name;
        console.log(contactDelID);
        dispatch(fetchDelContact(contactDelID));
    };

    return (
        <ListItem mt = { 1 }>
            <ListIcon as={ PhoneIcon }  w={4} h={5} ml = { 3 } mt = { 1 } color='green.300'/>
            { name }: { phone } 
            <button
             name={ id }
             className={ css.contactItemButton }
             onClick={ deleteContact }><DeleteIcon w={4} h={4} ml = { 2 }  mr = { 2 } color='red.200'/></button>
        </ListItem>
    );
}

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
}

export default ContactItem;