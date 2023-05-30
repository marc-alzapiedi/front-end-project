import Container from "../container"
import SiteLogo from "../../icons/SiteLogo";
import { Link } from "react-router-dom";
import { useState } from 'react'
import EyeLogoOn from "../../icons/EyeLogoOn";
import EyeLogoOff from "../../icons/EyeLogoOff";



const Login = () => {

    const [inputUsername, setInputUsername] = useState("")
    const [inputPassword, setInputPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)

    const onClick = (event) => {
        event.preventDefault()
        setShowPassword(!showPassword)

    }

    const onChangeUsername = (event) => {
        setInputUsername(event.target.value)
       
    }

    const onChangePassword = (event) => {
        setInputPassword(event.target.value)
       
    }


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
                <input type='text' name ='username' onChange={onChangeUsername} value={inputUsername}/>

                <label id ='password'>
                    <strong>
                        Password
                    </strong>
                </label>

                {showPassword 
                ? 
                <>
                <input type="text" name="password" onChange={onChangePassword} value={inputPassword}/>
                <button onClick={onClick}>
                <EyeLogoOff />
                </button>
                </>
                : 
                <>
                <input type='password' name ='password' onChange={onChangePassword} value={inputPassword}/>
                <button onClick={onClick}>
                <EyeLogoOn />
                </button>
                </>
                }

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
