import css from './contactAddForm.module.css';
import { fetchAddContacts } from 'redux/contacts/contactsOperations';
import { useDispatch } from 'react-redux';

//chakra
import { Box, FormControl, FormLabel, Input, Button } from "@chakra-ui/react"

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
        <form onSubmit={ hendleSubmit }>
          <Box 
          backgroundColor={ 'Window' }
          shadow={ 'dark-lg' }
          p={ '10' } ml = {'auto'} mr = {'auto'} mb = { 5 } w={ 330 } h={ 180 } display={ 'flex' } flexDirection={ 'column' }
          alignItems = { 'center' } justifyContent = { 'center' }  borderRadius = { 20 }>
            <FormControl>
               <FormLabel color={ 'InfoText' } fontSize={ 15 } fontWeight={ 700 }>Name
                    <Input bgColor={ 'chakra-subtle-bg' } shadow={ 'inner' } mt = { 2 } h = { 7 }
                      type="text"
                      name="name"
                      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                      required>
                    </Input>
                </FormLabel>
                <FormLabel color={ 'InfoText' } fontSize={ 15 } fontWeight={ 700 }>Number
                    <Input bgColor={ 'chakra-subtle-bg' } shadow={ 'inner' } mt = { 2 } h = { 7 }
                      type="tel"
                      name="number"
                      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                      title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                      required
                    />
                </FormLabel>
                </FormControl>
                <Button color={ 'ButtonText' } w ={ 130 } h = { 8 } padding = { 2 } mt = { 5 } mb = {2} type="submit">Add contact</Button>
                </Box>
            </form>
    );
};

export default ContactAddForm;