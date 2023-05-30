import Container from "../container"
import SiteLogo from "../../icons/SiteLogo"
import {useState} from 'react'
import EyeLogoOff from "../../icons/EyeLogoOff"
import EyeLogoOn from "../../icons/EyeLogoOn"


const CreateNewAccount = () => {

    const [inputUsername, setInputUsername] = useState("")
    const [inputPassword, setInputPassword] = useState("")
    const [inputRepeatPassword, setRepeatPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [showRepeat, setShowRepeat] = useState(false)

    const onChangeUsername = (event) => {
        setInputUsername(event.target.value)
       
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


    return (
        <>
            <Container>
                <form>
                    <SiteLogo />
                    <label id = 'username'>
                        <strong>
                            Set Username
                        </strong>
                    </label>
                    <input type="text" name="username" onChange={onChangeUsername} value={inputUsername}/>

                    <label id ='setpassword'>
                        <strong>
                            Set Password
                        </strong>
                    </label>

                    {showPassword 
                    ? 
                    <>
                    <input type="text" name="setpassword" onChange= {onChangePassword} value={inputPassword}/>
                    <button onClick={onClick}>
                    <EyeLogoOff />
                    </button>
                    </>
                    : 
                    <>
                    <input type='password' name ='setpassword'  onChange={onChangePassword} value={inputPassword} />
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
                    <input type="text" name="repeatpassword" onChange= {onChangeRepeat} value={inputRepeatPassword}/>
                    <button onClick={onClickRepeat}>
                    <EyeLogoOff />
                    </button>
                    </>
                    : 
                    <>
                    <input type='password' name ='repeatpassword'  onChange={onChangeRepeat} value={inputRepeatPassword} />
                    <button onClick={onClickRepeat}>
                    <EyeLogoOn />
                    </button>
                    </>
                    }


                <button>
                    Create an Account
                </button>




                    
                </form>
            </Container>
        
        </>
    )
}

export default CreateNewAccount


