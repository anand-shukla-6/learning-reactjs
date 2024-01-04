import { LearnComponent } from "./component/LearnComponent"
import { LearnEvent } from "./component/LearnEvent"
import { LearnJSX } from "./component/LearnJSX"
import { LearnLiftingSateUp } from "./component/LearnLiftingSateUp"
import { LearnProps } from "./component/LearnProps"

function App() {
  let roll=1110

  const getData =(data)=>{
    console.log(data);
  }
  return (
    <>
      {/* <LearnComponent/>
      <LearnJSX/> */}
      {/* <LearnProps name="Anand Shukla" roll={roll}/> */}
      {/* <LearnEvent/> */}

      <LearnLiftingSateUp myclick={getData} />

    </>
  )
}

export default App
