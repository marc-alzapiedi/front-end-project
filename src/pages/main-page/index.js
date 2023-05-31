import { useState } from 'react'
import {Link} from 'react-router-dom'
import Calendar from 'react-calendar'


const Main = () => {

    const [date, selectDate] = useState(new Date());
    

    return (

        <>
        <div>
            <Calendar onChange={selectDate} value={date} />
        </div>

        <Link to={'/login'}>Logout</Link>
        
        </>
    );
}

export default Main