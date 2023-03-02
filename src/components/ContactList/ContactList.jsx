import ContactItem from '../ContactItem/ContactItem';
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { selectFileteredContacts} from 'redux/selectors';
import { fetchAllContacts } from 'redux/operations';

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
             phone = { element.phone }
          />
        }) }
      </ul>   
    );
}

export default ContactList;