import Header from "./Header"
import Content from "./Content"
import Total from "./Total"


const App = () => {

 
  return (
    <div>
      <Header course = "Half Stack application development" />

      <Content part1="Fundamentals of React"  exercise1={10} 
               part2="Using props to pass data"  exercise2={7}
               part3="State of a component"  exercise3={14} />

      <Total exercise1={10} exercise2={7} exercise3={14}/>
      
    </div>
  )
}

export default App