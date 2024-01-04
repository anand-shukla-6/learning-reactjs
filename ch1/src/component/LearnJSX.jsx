export const LearnJSX = () => {
    let phone ="iPhone 15"
  return (
    <>
     <h1>LearnJSX 1</h1>
     <h1>LearnJSX 2</h1>
    
        {/* LearnJSX expression in react */}

        <h1>Price of Milk : {28 + 5}</h1>
        <h1>I am gonna buy this year {phone}</h1>

        {/* Attributes in JSX */}
        <h1 className="bg-primary">LearnJSX 3</h1>
        <h1 className={phone}>LearnJSX 4</h1>
    </>
  )
}
