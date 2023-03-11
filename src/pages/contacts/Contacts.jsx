import ContactList from "components/ContactList/ContactList";
import ContactAddForm from "components/ContactAddForm/ContactAddForm";
import ContactFilter from "components/ContactFilter/ContactFilter";
import bg from '../../source/Newspaper-Transparent-Free-PNG.png'
import Loading from "components/ContactList/Loading";

//chakra
import { Box, Heading } from "@chakra-ui/react"

const Contacts = () => {

   return (<>
            <Loading/>
            <Heading p ={ 0 } m = { 0 } color={ "CaptionText" } textAlign={ "center"}
              mb = { 10 } shadow={ "2xl" } pb = { 3 } pt = { 2 } bgColor={ 'AppWorkspace' } opacity={ 0.7 } 
             position={ "relative" } zIndex = { 2 } >Contacts</Heading>

            <Box  backgroundImage ={ bg } position={ "fixed" } 
            w={ '100%' } h ={ '100%' } opacity={ 0.1 } top = {-2 } ></Box>
            
            <Box  display={ 'flex' } flexDirection={ "column" } position={ "relative" } >

            <ContactAddForm />
            
            <Box 
            backgroundColor={ 'Window' }
            shadow={ 'dark-lg' }
            p={ '10' } m = {'auto'} mt = { 5 } w={ 330 } display={ 'flex' } flexDirection={ 'column' }
            alignItems = { 'center' } justifyContent = { 'flex-start' }  borderRadius = { 20 }>
               <Heading p ={ 0 } m = { 0 } color={ "CaptionText" }>Your contacts</Heading>
               <ContactFilter />
               <ContactList />
            </Box>
            </Box>
            
            
   </>);
};

export default Contacts;