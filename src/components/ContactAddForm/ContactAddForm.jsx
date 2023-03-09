import css from './contactAddForm.module.css';
import { fetchAddContacts } from 'redux/contacts/contactsOperations';
import { useDispatch } from 'react-redux';

const ContactAddForm = () => {

    const dispatch = useDispatch();

    const hendleSubmit = e => {

        e.preventDefault();
        const form = e.currentTarget;
        const name = form.elements.name.value;
        const number = form.elements.number.value;

        const newContact = { name, number }; 
        const request = dispatch(fetchAddContacts(newContact));
        request.then(res => res.type === "contacts/fetchAddContact/fulfilled" && form.reset());
    
    }

    return (
        <form className={css.contactAddForm} onSubmit={ hendleSubmit }>
                <label className={ css.formInputLabel}>Name
                    <input
                      className={ css.formInput}
                      type="text"
                      name="name"
                      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                      required>
                    </input>
                </label>
                <label className={ css.formInputLabel}>Number
                    <input
                     className={ css.formInput}
                      type="tel"
                      name="number"
                      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                      title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                      required
                    />
                </label>
                <button className={ css.formButton } type="submit">Add contact</button>
            </form>
    );
};

export default ContactAddForm;