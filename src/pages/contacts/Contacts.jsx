import ContactList from "components/ContactList/ContactList";
import ContactAddForm from "components/ContactAddForm/ContactAddForm";
import ContactFilter from "components/ContactFilter/ContactFilter";
import Loading from 'components/ContactList/Loading';
import Erorr from 'components/ContactList/Erorr';

const Contacts = () => {
   return (<>
            <Erorr/>
            <h1>Phonebook</h1>
            <ContactAddForm />
            <h2>Contacts</h2>
            <ContactFilter />
            <Loading/>
            <ContactList />
   </>);
};

export default Contacts;