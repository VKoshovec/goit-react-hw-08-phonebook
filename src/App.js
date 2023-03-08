import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navigation from "components/Navigations/Navigations";

const LoginPage = lazy(() => import("pages/login/Login"));
const RegisterPage = lazy(() => import("pages/register/Register"));
const ContactsPage = lazy(() => import("pages/contacts/Contacts"));




const App = () => {
    return (
        <div>
           <Navigation/>
           <Suspense >
           {/* fallback={ <Loader/> } */}
              <Routes>
                 <Route path="/login" element={< LoginPage />} />
                 <Route path="/register" element={< RegisterPage />} />
                 <Route path="/contacts" element={< ContactsPage />} />
                 <Route path="*" element={<LoginPage/>} />
              </Routes>
            </Suspense>
        </div>
    );
}

export default App;