import Part from "./Part.jsx"
const Content = (props) => {
    return (
          <>
            <Part part={props.name1} exercise={props.exercises1} /> 
            <Part part={props.name2} exercise={props.exercises2} />
            <Part part={props.name3} exercise={props.exercises3} />
          </>
    )
}
export default Content