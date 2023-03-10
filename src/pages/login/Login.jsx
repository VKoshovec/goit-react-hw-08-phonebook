import css from './login.module.css';
import { useDispatch } from 'react-redux';
import { fetchLoginUser } from 'redux/user/userOperations';
import { Navigator } from 'react-router-dom';
import Contacts from 'pages/contacts/Contacts';

const Login =()=> {

    const dispatch = useDispatch();

    const hendleSubmit = e => {

        e.preventDefault();
        const form = e.currentTarget;
        const email = form.elements.email.value;
        const password = form.elements.password.value;

        const request = dispatch(fetchLoginUser({email, password}));
        request.then(res => res.type === "user/fetchLoginUser/fulfilled" && form.reset());
    
    }

    return (
        <form className={css.loginForm} onSubmit={ hendleSubmit }>
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
                <button className={ css.formButton } type="submit">Login</button>
            </form>
    );
};

export default Login;