import Container from "../container"
import SiteLogo from "../../icons/SiteLogo";
import { Link } from "react-router-dom";


const Login = () => {
    return (

        <>
        <Container>
            <form>
                <SiteLogo />
                <label id = 'username'>
                    <strong>
                        Username
                    </strong>
                </label>
                <input type='text' name ='username'/>

                <label id ='password'>
                    <strong>
                        Password
                    </strong>
                </label>
                <input type='text' name ='password'/>
                <button>
                    Login
                </button>

                <div>
                    <p>Don't have an account?</p>
                    <Link to = {'/createaccount'}>Create an Account</Link>
                </div>
            </form>
        </Container>
        </>
            
       
    )
}

export default Login
