import Login from "./pages/login";
import { Routes, Route } from "react-router-dom";
import CreateNewAccount from "./pages/new-account";


function App() {
  return (

    <>

    <Routes>
      <Route path="/"
      element={<Login />}/>

      <Route path="/createaccount" 
      element={<CreateNewAccount />}/>

    </Routes>
    
    </>


  );
}

export default App;
