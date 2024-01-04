
export const LearnEvent = () => {
    const handleClick_1 =(e)=>{
        e.preventDefault()
        console.log("Button clicked 1")
    }

    const handleClick_2 =(empID)=>{
        
        console.log("Button clicked 2: ", empID)
    }
  return (
    <>
    <h1>LearnEvent</h1>
    
    {/* Without Argument Events  */}
    <button onClick={handleClick_1}>Click 1</button>

    {/* With Argument Events  */}
    <button onClick={(e)=>{handleClick_2("G7616")}}>Click 2</button>

    </>
  )
}
