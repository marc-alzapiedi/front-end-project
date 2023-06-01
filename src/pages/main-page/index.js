import { useState, useEffect } from 'react'
import {Link, useParams, useNavigate} from 'react-router-dom'
import Calendar from 'react-calendar'
import Container from '../container'
import SiteLogo from '../../icons/SiteLogo'


const Main = () => {

    const [date, selectDate] = useState(new Date());
    const [credentials, setCredentials] = useState([])

    const params = useParams()
    const navigate = useNavigate()
    
    
    
    const handleClick = (event) => {
        
        
        const dates = {
           [event]: [
           ]
        }

        const optionsDates = {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(dates)
        }

        fetch(`http://localhost:4000/credentials/${params.id}`, optionsDates)
        .then((response) => response.json())
        

        navigate(`/${params.id}/${event}`)
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

                <Calendar onChange={selectDate} onClickDay={handleClick} value={date} />
            </div>

            <Link to={'/login'}>Logout</Link>
        </Container>
        
        </>
    );
}

export default Main