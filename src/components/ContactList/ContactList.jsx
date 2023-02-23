import ContactItem from '../ContactItem/ContactItem';
import { useSelector } from "react-redux";
import { getContactsState, getFiltrState, getFileteredContacts } from 'redux/selectors';

const ContactList = () => {
 
  const contactState = useSelector(getContactsState);
  const filterState = useSelector(getFiltrState);

  const contactList = filterState ? getFileteredContacts(contactState ,filterState) : contactState;

    return (
      <ul>
        { contactList.map((element)=> {
          return <ContactItem key = { element.id }
             id = { element.id }
             name = { element.name }
             number = { element.number }
          />
        }) }
      </ul>   
    );
}

export default ContactList;