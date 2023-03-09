import ContactItem from '../ContactItem/ContactItem';
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { selectFileteredContacts, selectAllContact } from 'redux/contacts/contactsSelectors';
import { fetchAllContacts } from 'redux/contacts/contactsOperations';

const ContactList = () => {
 
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchAllContacts());
  }, [dispatch])

  const filteredContacts = useSelector(selectFileteredContacts);

    return (
      <ul>
        {filteredContacts.map((element)=> {
          return <ContactItem key = { element.id }
             id = { element.id }
             name = { element.name }
             phone = { element.number }
          />
        }) }
      </ul>   
    );
}

export default ContactList;