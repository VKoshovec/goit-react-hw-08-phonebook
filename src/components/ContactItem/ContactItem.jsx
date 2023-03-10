// import css from './contactItem.module.css'
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { fetchDelContact } from 'redux/contacts/contactsOperations';

//chakra 
import { ListItem, ListIcon, Button } from '@chakra-ui/react';
import { PhoneIcon, DeleteIcon } from '@chakra-ui/icons'
  

const ContactItem = ({ id, name, phone }) => {

    const dispatch = useDispatch();

    const deleteContact = (e) => {
        const contactDelID = e.currentTarget.name;
        console.log(contactDelID);
        dispatch(fetchDelContact(contactDelID));
    };

    return (
        <ListItem mt = { 0 } p = { 0 } alignItems={ 'center' } textAlign={ 'center' }> 
            <ListIcon as={ PhoneIcon }  w={4} h={ 5 } ml = { 1 } mt = { 1 } color='green.300'/>
            { name }: { phone } 
            <Button color={ 'inherit' } w ={ 5 } h = { 5 } padding = { 2 } mt = { 0 } ml = { 2 }
             name={ id }
             onClick={ deleteContact }><DeleteIcon w={4} h={4} ml = { 2 }  mr = { 2 } color='red.200'/></Button>
        </ListItem>
    );
}

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
}

export default ContactItem;