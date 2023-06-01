import Container from "../container"
import SiteLogo from "../../icons/SiteLogo";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react'
import EyeLogoOn from "../../icons/EyeLogoOn";
import EyeLogoOff from "../../icons/EyeLogoOff";




const Login = () => {


    
    const [showErr, setShowErr] = useState(false)
    const [inputUsername, setInputUsername] = useState("")
    const [inputPassword, setInputPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [credentials, setCredentials] = useState([])
    const navigate = useNavigate()
    
    useEffect(() => {
        fetch('http://localhost:4000/credentials')
        .then((response) => response.json())
        .then(data => {
            setCredentials(data)
        })


    }, [])


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

    console.log(credentials)

    const handleSubmit = (event) => {
        event.preventDefault()

        const errControl = credentials.filter((object) => (object.username === inputUsername && object.password === inputPassword))
        if (errControl.length === 0){
            setShowErr(true)
        } else {
            setShowErr(false)
            navigate(`/${errControl[0].id}`)
        }




    }


    return (

        <>
        <Container>
            <form onSubmit={handleSubmit}>
                <SiteLogo />
                <label id = 'username'>
                    <strong>
                        Username
                    </strong>
                </label>
                <input type='text' name ='username' onChange={onChangeUsername} value={inputUsername} required/>

                <label id ='password'>
                    <strong>
                        Password
                    </strong>
                </label>

                {showPassword 
                ? 
                <>
                <input type="text" name="password" onChange={onChangePassword} value={inputPassword} required/>
                <button onClick={onClick}>
                <EyeLogoOff />
                </button>
                </>
                : 
                <>
                <input type='password' name ='password' onChange={onChangePassword} value={inputPassword} required/>
                <button onClick={onClick}>
                <EyeLogoOn />
                </button>
                </>
                }

                <button>
                    Login
                </button>



                <div>
                    {
                    showErr ?
                    <>
                    
                    <p>
                        Incorrect Username or Password. Please try again or <Link to = {'/createaccount'}>Create an Account</Link>
                    </p>
                    <Link to={'/recoverpassword'}>Password Recovery</Link>
                    </>
                    :
                    <>
                    <p>Don't have an account?</p>
                    <Link to = {'/createaccount'}>Create an Account</Link>
                    </>
                    }
                </div>
            </form>
        </Container>
        </>
            
       
    )
}

export default Login
