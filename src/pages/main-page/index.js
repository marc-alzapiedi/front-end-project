import { useState, useEffect } from 'react'
import {Link, useParams, useNavigate} from 'react-router-dom'
import Calendar from 'react-calendar'
import Container from '../container'
import SiteLogo from '../../icons/SiteLogo'
import 'react-calendar/dist/Calendar.css'


const Main = () => {

    const [date, selectDate] = useState(new Date());
    const [credentials, setCredentials] = useState([])
    

    

    const params = useParams()
    const navigate = useNavigate()
    
    
    
    const handleClickDay = (event) => {
        

        navigate(`/${params.id}/${event}`)
    }

    const handleClickLink = () => {
        

        const isLogged = {
            loginStatus: false
        }

        const options = {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(isLogged)
        }

        fetch(`http://localhost:4000/credentials/${params.id}`, options)
        .then((response) => response.json())
    }

    

    useEffect(() => {
        fetch(`http://localhost:4000/credentials/${params.id}`)
        .then((response) => response.json())
        .then(data => {
            setCredentials(data)
        })
    }, [params.id])


    return (

        <>
        <Container>

            <div>
                <SiteLogo />
                <p>
                    <strong>
                        Welcome! {credentials.username}
                    </strong>
                </p>

                <Calendar onChange={selectDate} onClickDay={handleClickDay} value={date} />
            </div>

            <Link to={'/'} onClick={handleClickLink}>Logout</Link>
        </Container>
        
        </>
    );
}

export default Main