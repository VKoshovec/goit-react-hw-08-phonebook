import { fetchSignUpUser } from 'redux/user/userOperations';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Loading from "components/ContactList/Loading";
import bg from '../../source/Newspaper-Transparent-Free-PNG.png'

//chakra
import { Box, FormControl, FormLabel, Input, Button } from "@chakra-ui/react"

const Register =()=> {

    const dispatch = useDispatch();

    const hendleSubmit = e => {

        e.preventDefault();
        const form = e.currentTarget;
        const name = form.elements.name.value;
        const email = form.elements.email.value;
        const password = form.elements.password.value;
        dispatch(fetchSignUpUser({ name, email, password }));
        }
    
        return (
          <><Loading/><Box  backgroundImage ={ bg } position={ "fixed" } 
          w={ '100%' } h ={ '100%' } opacity={ 0.1 } top = {-2 } bgRepeat={ 'no-repeat' } bgPosition={ 'center' }></Box>
          <form onSubmit={ hendleSubmit }></form>
          <form onSubmit={ hendleSubmit }>
          <Box 
          backgroundColor={ 'Window' }
          shadow={ 'dark-lg' }
          p={ '10' } m = {'auto'} mt = { 10 } w={ 330 } h={ 300 } display={ 'flex' } flexDirection={ 'column' }
          alignItems = { 'center' } justifyContent = { 'center' }  borderRadius = { 20 } position={ "relative" }>
              <FormControl>
                     <FormLabel color={ 'InfoText' } fontSize={ 15 } fontWeight={ 700 } >Name
                        <Input bgColor={ 'chakra-subtle-bg' } shadow={ 'inner' } mt = { 2 }
                          
                          type="text"
                          name="name"
                          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                          required>
                        </Input>
                        </FormLabel>
                      <FormLabel color={ 'InfoText' } fontSize={ 15 } fontWeight={ 700 } >E-mail
                        <Input bgColor={ 'chakra-subtle-bg' } shadow={ 'inner' } mt = { 2 }
                          
                          type="email"
                          name="email"
                          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                          required>
                         </Input>
                        </FormLabel>
                      <FormLabel color={ 'InfoText' } fontSize={ 15 } fontWeight={ 700 } >Password
                        <Input bgColor={ 'chakra-subtle-bg' } shadow={ 'inner' } mt = { 2 }
                         
                          type="password"
                          name="password"
                          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                          required
                        />
                       </FormLabel>
                       </FormControl>
                       <Button color={ 'ButtonText' } w ={ 100 }  padding = { 2 } mt = { 5 } mb = {2} type="submit">Register</Button>
                       <NavLink to="/login" style={{ color: 'GrayText', fontSize: 20 }}>Or login</NavLink>
                </Box>
                </form>
                </>
        );
};

export default Register;