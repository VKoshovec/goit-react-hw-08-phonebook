import ContactItem from '../ContactItem/ContactItem';
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { selectFileteredContacts, selectAllContact } from 'redux/contacts/contactsSelectors';
import { fetchAllContacts } from 'redux/contacts/contactsOperations';

//chakra 
import { UnorderedList, OrderedList } from '@chakra-ui/react'

const ContactList = () => {
 
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchAllContacts());
  }, [dispatch])

  const filteredContacts = useSelector(selectFileteredContacts);

    return (
      <OrderedList>
        {filteredContacts.map((element)=> {
          return <ContactItem key = { element.id }
             id = { element.id }
             name = { element.name }
             phone = { element.number }
          />
        }) }
      </OrderedList>   
    );
}

export default ContactList;