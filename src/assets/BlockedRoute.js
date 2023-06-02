import { redirect } from "react-router-dom"
import { useEffect, useState } from "react"

const BlockedRoute = ({loginstatus, route}) => {

    const [dataStore, setData] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/credentials')
        .then((response) => response.json())
        .then(data => { 
            setData(data)
        })

    }, [])

    console.log(dataStore)

   
}

export default BlockedRoute