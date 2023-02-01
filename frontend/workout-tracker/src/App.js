import React, { useEffect, useState } from 'react'

function App() {

  // State for all workouts
  const [allWorkouts, setAllWorkouts] = useState([])

  const getData = async () => {
    const data = await fetch('http://localhost:4000/workouts/')
    const json = await data.json()
    setAllWorkouts(json)
  }

  useEffect(() => {
    getData()
  }, [])

  return (

    <div>
      <h1>HellO!</h1>
      <h1>All Workouts:</h1>

      {allWorkouts.map((workout) => (
          <>
            <div>{workout.type}</div>
            <div>{workout.reps}</div>
            <div>{workout.weight}</div>
          </>
      ))}
    </div>
    
  )
}

export default App
