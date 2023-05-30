import Container from "../container"
import SiteLogo from "../../icons/SiteLogo";
import {useState} from 'react'
import { Link } from "react-router-dom";

const RecoverPassword = () => {


    const [inputEmail, setEmail] = useState('')
    const [reset, sendReset] = useState(false)

    const handleChange = (event) => {
        setEmail(event.target.value)
        
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        sendReset(true)
    }

    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <SiteLogo />
                <label id="email">
                    <strong>
                        Please enter the email associated to your account
                    </strong>
                </label>
                <input type="text" name="email" onChange={handleChange} value={inputEmail} required/>

                <button>
                    Submit
                </button>

                {reset && 
                <div>
                    <p>
                        Nice! Now check your email for instructions on reseting your password.
                    </p>
                    <Link to={'/'}>Return to Login</Link>

                </div>
                }


            </form>
        </Container>
    )

}

export default RecoverPassword