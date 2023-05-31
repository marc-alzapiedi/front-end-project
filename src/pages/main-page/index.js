import { useState } from 'react'
import Calendar from 'react-calendar'


const Main = () => {
    
    const [date, selectDate] = useState(new Date());
    

    return (
        <div>
            <Calendar onChange={selectDate} value={date} />
        </div>
    );
}

export default Main