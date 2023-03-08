import css from './register.module.css';
import { fetchSignUpUser } from 'redux/user/userOperations';
import { useDispatch } from 'react-redux';

const Register =()=> {

    const dispatch = useDispatch();

    const hendleSubmit = e => {

        e.preventDefault();
        const form = e.currentTarget;
        const name = form.elements.name.value;
        const email = form.elements.email.value;
        const password = form.elements.password.value;

    //     const newContact = { name, phone }; 
        const request = dispatch(fetchSignUpUser({ name, email, password }));
        console.log(request);
        //     request.then(res => res.type === "contacts/fetchAddContact/fulfilled" && form.reset());
        
        }
    
        return (
            <form className={css.registerForm} onSubmit={ hendleSubmit }>
                    <label className={ css.formInputLabel}>Name
                        <input
                          className={ css.formInput}
                          type="text"
                          name="name"
                        //   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                          required>
                        </input>
                    </label>
                    <label className={ css.formInputLabel}>E-mail
                        <input
                          className={ css.formInput}
                          type="email"
                          name="email"
                        //   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                          required>
                        </input>
                    </label>
                    <label className={ css.formInputLabel}>Passowrd
                        <input
                         className={ css.formInput}
                          type="password"
                          name="password"
                        //   pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                          required
                        />
                    </label>
                    <button className={ css.formButton } type="submit">Register</button>
                </form>
        );
};

export default Register;