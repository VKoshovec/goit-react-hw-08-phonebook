import ContactItem from '../ContactItem/ContactItem';
import { useSelector } from "react-redux";
import { getContactsState, getFiltrState } from 'redux/selectors';

const ContactList = () => {
 
  const contactState = useSelector(getContactsState);
  const filterState = useSelector(getFiltrState);

  const fileteredContacts = (filterName) => {
    return contactState.filter(contact =>      
         contact.name.toLowerCase().includes(filterName.toLowerCase()))
  }; 

  const contactList = filterState ? fileteredContacts(filterState) : contactState;

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