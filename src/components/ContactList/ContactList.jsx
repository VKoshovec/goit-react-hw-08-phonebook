import ContactItem from '../ContactItem/ContactItem';
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { selectAllContact, selectFiltrState, selectFileteredContacts} from 'redux/selectors';
import { fetchAllContacts } from 'redux/operations';

const ContactList = () => {
 
  
  const contactState = useSelector(selectAllContact);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchAllContacts());
  }, [dispatch])

  const filterState = useSelector(selectFiltrState);
  const contactList = filterState ? selectFileteredContacts(contactState ,filterState) : contactState;

    return (
      <ul>
        {contactList.map((element)=> {
          return <ContactItem key = { element.id }
             id = { element.id }
             name = { element.name }
             phone = { element.phone }
          />
        }) }
      </ul>   
    );
}

export default ContactList;