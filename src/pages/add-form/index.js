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
       
        const workouts = {
            [params.date]: [
                {sets: setsValue,
                reps: repsValue,
                exercise: exerciseValue,
                rest: restValue}
            ]
        }

        const options = {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(workouts)
        }

        fetch(`http://localhost:4000/credentials/${params.id}`, options)
        .then((response) => response.json())
      


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
                <input type="number" name="sets" onChange={handleSets} value={setsValue} required min={0}/>

                <label id="reps">
                    <strong>
                        Workout Reps
                    </strong>
                </label>
                <input type="number" name="reps" onChange={handleReps} value={repsValue} required min={0}/>


                <label id="Exercise">
                    <strong>
                        Workout Exercise
                    </strong>
                </label>
                <input type="text" name="exercise" onChange={handleExercise} value={exerciseValue} required/>


                <label id="Rest">
                    <strong>
                        Workout Rest (seconds)
                    </strong>
                </label>
                <input type="number" name="rest" onChange={handleRest} value={restValue} required min={0}/>

                <button>
                    Add workout
                </button>

            </form>

            <button>
                Return to Calendar
            </button>

           
        </Container>
    )
}

export default AddForm