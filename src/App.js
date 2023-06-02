import Login from "./pages/login";
import { Routes, Route } from "react-router-dom";
import CreateNewAccount from "./pages/new-account";
import RecoverPassword from "./pages/password-recovery";
import Main from "./pages/main-page";
import AddForm from "./pages/add-form";


function App() {

  return (

    <>

    
    
    <Routes>
      <Route path="/"
      element={<Login />}/>

      <Route path="/:id"
      element={<Main />} />

      <Route path="/:id/:date" element={<AddForm />} />

      <Route path="/createaccount" 
      element={<CreateNewAccount />}/>

      <Route path="/recoverpassword" 
      element={<RecoverPassword />}/>

    </Routes>
    
    </>


  );
}

export default App;
