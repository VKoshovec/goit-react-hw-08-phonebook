import css from './phoneBook.module.css';
import ContactList from "./components/ContactList/ContactList";
import ContactAddForm from "./components/ContactAddForm/ContactAddForm";
import ContactFilter from "./components/ContactFilter/ContactFilter";


const App = () => {

    return (
        <div className= {css.phoneBook}>
            <h1>Phonebook</h1>
            <ContactAddForm />
            <h2>Contacts</h2>
            <ContactFilter />
            <ContactList />
        </div>
    );
}

export default App;