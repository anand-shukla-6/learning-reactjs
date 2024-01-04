import React from 'react'

export const LearnLiftingSateUp = (props) => {
    const handleClick=(e)=>{
        e.preventDefault()
        let dt ="Hi, I'm learning Lifting state up Concept."

        props.myclick(dt)
    }
  return (
    <>
    {/* Send data child to parent the we used lifting-state-up concept */}
    <h1>LearnLiftingSateUp</h1>

    <button onClick={handleClick}>Click 1</button>
    </>
  )
}
