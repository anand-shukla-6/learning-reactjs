
export const LearnProps = (props) => {
  return (
    <>
    {/* When we need to send data from parent to child then we used props  */}
    <h1>LearnProps</h1>
    <h1>{props.name}</h1>
    <h1>{props.roll}</h1>
    </>
  )
}
// export const LearnProps = ({name,roll}) => {
//   return (
//     <>
//     <h1>LearnProps</h1>
//     <h1>{name}</h1>
//     <h1>{roll}</h1>
//     </>
//   )
// }
