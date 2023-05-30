import Login from "./pages/login";
import { Routes, Route } from "react-router-dom";
import CreateNewAccount from "./pages/new-account";
import RecoverPassword from "./pages/password-recovery";
import Main from "./pages/main-page";

function App() {
  return (

    <>

    <Routes>
      <Route path="/login"
      element={<Login />}/>

      <Route path="/"
      element={<Main />} />

      <Route path="/createaccount" 
      element={<CreateNewAccount />}/>

      <Route path="/recoverpassword" element={<RecoverPassword />}/>

    </Routes>
    
    </>


  );
}

export default App;
