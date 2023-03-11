import ContactItem from '../ContactItem/ContactItem';
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { selectFileteredContacts} from 'redux/contacts/contactsSelectors';
import { fetchAllContacts } from 'redux/contacts/contactsOperations';
import { isLogedIn } from 'redux/user/userSelectors';

//chakra 
import { OrderedList } from '@chakra-ui/react'

const ContactList = () => {
 
  const logedIn = useSelector(isLogedIn);

  const dispatch = useDispatch();

  useEffect(()=>{
    if(logedIn) {dispatch(fetchAllContacts())}
  }, [dispatch, logedIn])


  const filteredContacts = useSelector(selectFileteredContacts);

    return (
      <OrderedList p = { 0 } m= { 0 } display ={ 'flex' } flexDirection = { 'column' } alignItems={ 'self-start' }>
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