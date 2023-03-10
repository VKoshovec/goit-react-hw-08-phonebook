import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navigation from "components/Navigations/Navigations";
import PublicRoute from "components/Routing/PublicRoute";
import PrivateRoute from "components/Routing/PrivateRoute";

import { ChakraProvider } from "@chakra-ui/react";

const LoginPage = lazy(() => import("pages/login/Login"));
const RegisterPage = lazy(() => import("pages/register/Register"));
const ContactsPage = lazy(() => import("pages/contacts/Contacts"));


const App = () => {
    return (
        <ChakraProvider resetCSS = { false }>
           <Navigation/>
           <Suspense fallback={ <p>Loading...</p> } >
              <Routes> 
                <Route element = { <PublicRoute/> } >                         
                   <Route path="/login" element={< LoginPage />} />   
                   <Route path="/register" element={< RegisterPage />} />
                 </Route> 
                 <Route element={ <PrivateRoute/> }>  
                   <Route path="/contacts" element={< ContactsPage />} />
                 </Route>   
                   <Route path="*" element={<LoginPage/>} />
              </Routes>
            </Suspense>
        </ChakraProvider>
    );
}

export default App;