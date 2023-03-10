import { useDispatch } from 'react-redux';
import { fetchLoginUser } from 'redux/user/userOperations';
import { NavLink } from 'react-router-dom';

//chakra
import { Box, FormControl, FormLabel, Input, Button, Link,} from "@chakra-ui/react"

const Login =()=> {

    const dispatch = useDispatch();

    const hendleSubmit = e => {

        e.preventDefault();
        const form = e.currentTarget;
        const email = form.elements.email.value;
        const password = form.elements.password.value;
        dispatch(fetchLoginUser({email, password}));
    }

    return (

        <form onSubmit={ hendleSubmit }>
        <Box 
          backgroundColor={ 'Window' }
          shadow={ 'dark-lg' }
          p={ '10' } m = {'auto'} mt = { 20 } w={ 330 } h={ 240 } display={ 'flex' } flexDirection={ 'column' }
          alignItems = { 'center' } justifyContent = { 'center' }  borderRadius = { 20 }>
              <FormControl>
                <FormLabel color={ 'InfoText' } fontSize={ 15 } fontWeight={ 700 }>E-mail
                    <Input bgColor={ 'chakra-subtle-bg' } shadow={ 'inner' } mt = { 2 }
                      type="email"
                      name="email"
                      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                      required>
                    </Input>
                </FormLabel>
              
                <FormLabel color={ 'InfoText' } fontSize={ 15 } mt = { 5 } fontWeight={ 700 }>Passowrd
                    <Input bgColor={ 'chakra-subtle-bg' } shadow={ 'inner' } mt = { 2 }
                      type="password"
                      name="password"
                      title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                      required
                    />
                </FormLabel>
              </FormControl>
                <Button color={ 'ButtonText' } w ={ 100 }  padding = { 2 } mt = { 5 } mb = {2} type="submit">Login</Button>
                <NavLink to="/register"><Link color={ "linkedin.700" }>Register</Link></NavLink>
            </Box>
          </form>

    );
};

export default Login;