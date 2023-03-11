import { Box, Heading } from "@chakra-ui/react";
import { NotAllowedIcon } from '@chakra-ui/icons'
import bg from '../../source/Newspaper-Transparent-Free-PNG.png';

const NotFound = () => {
    return(
        <>
        <Box  backgroundImage ={ bg } position={ "fixed" } 
        w={ '100%' } h ={ '100%' } opacity={ 0.1 } top = {-2 } bgRepeat={ 'no-repeat' } bgPosition={ 'center' }>            
        </Box>
        <Heading p ={ 0 } m = { 0 } color={ "CaptionText" } textAlign={ "center"}
        mb = { 10 } shadow={ "2xl" } pb = { 3 } pt = { 2 } bgColor={ 'AppWorkspace' } opacity={ 0.7 } 
        position={ "relative" } zIndex = { 2 } >PAGE NOT FOUND
        </Heading>
        <Box position={ "relative" } zIndex = { 2 } alignItems = { 'center' }
        display={ 'flex' } justifyContent={ 'center' } flexDirection = { "column" } mt = { 100 }>
        <NotAllowedIcon h={200} w={200}  color = 'lightcoral'   position={ "relative" } zIndex = { 2 }/>
        </Box>
        </>
    );
}

export  default NotFound;