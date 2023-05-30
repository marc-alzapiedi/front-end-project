import Login from "./pages/login";
import { Routes, Route } from "react-router-dom";
import CreateNewAccount from "./pages/new-account";
import RecoverPassword from "./pages/password-recovery";


function App() {
  return (

    <>

    <Routes>
      <Route path="/"
      element={<Login />}/>

      <Route path="/createaccount" 
      element={<CreateNewAccount />}/>

      <Route path="/recoverpassword" element={<RecoverPassword />}/>

    </Routes>
    
    </>


  );
}

export default App;
