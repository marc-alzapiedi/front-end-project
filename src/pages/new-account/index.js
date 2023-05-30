import Container from "../container"
import SiteLogo from "../../icons/SiteLogo"
import {useState} from 'react'
import EyeLogoOff from "../../icons/EyeLogoOff"
import EyeLogoOn from "../../icons/EyeLogoOn"
import { useNavigate } from "react-router-dom"


const CreateNewAccount = () => {

    const [inputUsername, setInputUsername] = useState("")
    const [inputPassword, setInputPassword] = useState("")
    const [inputRepeatPassword, setRepeatPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [showRepeat, setShowRepeat] = useState(false)
    const [inputEmail, setEmail] = useState("")
    const navigate = useNavigate()

    const onChangeUsername = (event) => {
        setInputUsername(event.target.value)
       
    }
    const onChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const onChangePassword = (event) => {
        setInputPassword(event.target.value)
       
    }

    const onChangeRepeat = (event) => {
        setRepeatPassword(event.target.value)
    }

    const onClick = (event) => {
        event.preventDefault()
        setShowPassword(!showPassword)

    }

    const onClickRepeat = (event) => {
        event.preventDefault()
        setShowRepeat(!showRepeat)

    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const newUserCredentials = {
            username: inputUsername,
            password: inputPassword,
            email: inputEmail,
        }

        const options = {
            method: "POST",
            headers: {
                "content-type": "application/json"  
            },
            body: JSON.stringify(newUserCredentials)

        }

        fetch('http://localhost:4000/credentials', options)
        .then(response => response.json())

        navigate('/')

    }

   

   

    return (
        <>
            <Container>
                <form onSubmit={handleSubmit}>
                    <SiteLogo />
                    <label id = 'username'>
                        <strong>
                            Set Username
                        </strong>
                    </label>
                    <input type="text" name="username" onChange={onChangeUsername} value={inputUsername} required/>
                    <label id = 'email'>
                        <strong>
                            Enter Email
                        </strong>
                    </label>
                    <input type="email" name="email" onChange={onChangeEmail} value={inputEmail} required/>

                    <label id ='setpassword'>
                        <strong>
                            Set Password
                        </strong>
                    </label>

                    {showPassword 
                    ? 
                    <>
                    <input type="text" name="setpassword" onChange= {onChangePassword} value={inputPassword} required minLength={8}/>
                    <button onClick={onClick}>
                    <EyeLogoOff />
                    </button>
                    </>
                    : 
                    <>
                    <input type='password' name ='setpassword'  onChange={onChangePassword} value={inputPassword} required minLength={8}/>
                    <button onClick={onClick}>
                    <EyeLogoOn />
                    </button>
                    </>
                    }

                    <label id ='repeatpassword'>
                        <strong>
                            Re-enter Password
                        </strong>
                    </label>

                    {showRepeat
                    ? 
                    <>
                    <input type="text" name="repeatpassword" onChange= {onChangeRepeat} value={inputRepeatPassword} required/>
                    <button onClick={onClickRepeat}>
                    <EyeLogoOff />
                    </button>
                    </>
                    : 
                    <>
                    <input type='password' name ='repeatpassword'  onChange={onChangeRepeat} value={inputRepeatPassword} required/>
                    <button onClick={onClickRepeat}>
                    <EyeLogoOn />
                    </button>
                    </>
                    }


                <button>
                    Create an Account and Login
                </button>




                    
                </form>
            </Container>
        
        </>
    )
}

export default CreateNewAccount


