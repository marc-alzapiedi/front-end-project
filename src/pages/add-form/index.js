import Container from "../container"
import SiteLogo from "../../icons/SiteLogo"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


const AddForm = () => {
    const params = useParams()
    
    const [setsValue, setSets] = useState('')
    const [repsValue, setReps] = useState('')
    const [exerciseValue, setExercise] = useState('')
    const [restValue, setRestValue] = useState('')

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


    }
  

    return(
        <Container>
            <SiteLogo />
            <h5>🏋️‍♀️Workouts to do on {params.date}</h5>

            <form onSubmit={handleSubmit}>
                <label id="sets">
                    <strong>
                        Workout Sets
                    </strong>
                </label>
                <input type="text" name="sets" onChange={handleSets} value={setsValue} required/>

                <label id="reps">
                    <strong>
                        Workout Reps
                    </strong>
                </label>
                <input type="text" name="reps" onChange={handleReps} value={repsValue} required/>


                <label id="Exercise">
                    <strong>
                        Workout Exercise
                    </strong>
                </label>
                <input type="text" name="exercise" onChange={handleExercise} value={exerciseValue} required/>


                <label id="Rest">
                    <strong>
                        Workout Rest
                    </strong>
                </label>
                <input type="text" name="rest" onChange={handleRest} value={restValue} required/>

                <button>
                    Add workout
                </button>
                <button>
                    Return to Calendar
                </button>

            </form>

           
        </Container>
    )
}

export default AddForm