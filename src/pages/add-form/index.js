import Container from "../container"
import SiteLogo from "../../icons/SiteLogo"
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import './style.css'


const AddForm = () => {
    const params = useParams()
    const navigate = useNavigate()
    
    const [setsValue, setSets] = useState('')
    const [repsValue, setReps] = useState('')
    const [exerciseValue, setExercise] = useState('')
    const [restValue, setRestValue] = useState('')
    const [data, setData] = useState([])
    const [fetchData, sendFetch] = useState(false)
    

    useEffect(() => {
        fetch(`http://localhost:4000/dates`)
        .then((response) => response.json())
        .then((data) => {
            const list = data.filter((object) => (
                object.userid === params.id && object.date === params.date
            ))
            setData(list)
        })

    }, [fetchData, params.id, params.date])
   



    const handleSets = (event) => {
        setSets(event.target.value)

    }

    const handleReps = (event) => {
        setReps(event.target.value)
        
    }

    const handleExercise = (event) => {
        setExercise(event.target.value)
        
    }

    const handleRest = (event) => {
        setRestValue(event.target.value)
        
    }

    const handleSubmit = (event) => {
        event.preventDefault()
       
        const workouts = {
            date: params.date,
            userid: params.id,
            sets: setsValue,
            reps: repsValue,
            exercise: exerciseValue,
            rest: restValue
        }

        const options = {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(workouts)
        }

        fetch(`http://localhost:4000/dates`, options)
        .then((response) => response.json())

        sendFetch(!fetchData)
        setReps('')
        setSets('')
        setExercise('')
        setRestValue('')
    
    }

    const handleClick = () => {
        navigate(`/${params.id}`)
    }
  

    return(
        <Container className = "add-form">

            <form onSubmit={handleSubmit} className="addWorkout">
            <SiteLogo />
            <h5>🏋️‍♀️Workouts to do on {params.date}</h5>
                <label id="sets">
                    <strong>
                        Workout Sets
                    </strong>
                </label>
                <input type="number" name="sets" onChange={handleSets} value={setsValue} required min={0} className = "add-form-input"/>

                <label id="reps">
                    <strong>
                        Workout Reps
                    </strong>
                </label>
                <input type="number" name="reps" onChange={handleReps} value={repsValue} required min={0} className = "add-form-input"/>


                <label id="Exercise">
                    <strong>
                        Workout Exercise
                    </strong>
                </label>
                <input type="text" name="exercise" onChange={handleExercise} value={exerciseValue} required className = "add-form-input"/>


                <label id="Rest">
                    <strong>
                        Workout Rest (seconds)
                    </strong>
                </label>
                <input type="number" name="rest" onChange={handleRest} value={restValue} required min={0} className = "add-form-input"/>

                <button className = "add-form-elements">
                    Add workout
                </button>

                <button onClick={handleClick} className = "add-form-elements">
                    Return to Calendar
                </button>
            </form>


            <ul>
                {data.map((object, index) => (
                    <li key={index}>
                        <p>
                            {object.sets}x sets of <strong>{object.reps}x{object.exercise}</strong> with {object.rest} seconds of rest.
                        </p>

                    </li>
                ))}
            </ul>

           
        </Container>
    )
}

export default AddForm