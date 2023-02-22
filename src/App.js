// import { useEffect } from "react";
import css from './phoneBook.module.css';
import ContactList from "./components/ContactList/ContactList";
import ContactAddForm from "./components/ContactAddForm/ContactAddForm";
import ContactFilter from "./components/ContactFilter/ContactFilter";

// redux
import { useSelector, useDispatch } from "react-redux";
import { getFiltrState, getContactsState } from 'redux/selectors';
import { addContact, delContact } from "redux/contactsSlice";

const App = () => {

    const filterState = useSelector(getFiltrState);
    const contactState = useSelector(getContactsState);
    const dispatch = useDispatch();

    const addContacts = (newContact) => {

        const isPresentContact = contactState.find(element => 
            element.name.toLowerCase() === newContact.name.toLowerCase()
        ) ? true: false;
        
        
        if (isPresentContact){
            alert(`${newContact.name} is already in contacts.`)
        } else {
            dispatch(addContact(newContact));
        }        
    };

    const fileteredContacts = (filterName) => {

        return contactState.filter(contact =>      
             contact.name.toLowerCase().includes(filterName.toLowerCase()))
    };

    const deleteContact = (e) => {
        const contactDel = e.currentTarget.name;
        dispatch(delContact(contactDel));
    };

    // useEffect (() => {
    //     const LocalStoragePhonebook = localStorage.getItem('LocalPhonebook');
    //     const LocalPhonebook = JSON.parse(LocalStoragePhonebook);

    //     if (LocalPhonebook?.length) {
    //         LocalPhonebook.map(el=> dispatch(addContact(el)));
    //     };        
    // }, []);

    // useEffect (()=>{
    //     localStorage.setItem ('LocalPhonebook', JSON.stringify(contactState))
    // }, [contactState]);
    
    const contactList = filterState ? fileteredContacts(filterState) : contactState;

    return (
        <div className= {css.phoneBook}>
            <h1>Phonebook</h1>
            <ContactAddForm onSubmit = { res => addContacts(res) } />
            <h2>Contacts</h2>
            <ContactFilter />
            <ContactList contactArr={ contactList } onClick = { deleteContact }/>
        </div>
    );
}

export default App;