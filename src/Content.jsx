const Content = (props) => {
    return (
          <>
          <p> Section - 1: {props.part1} which has {props.exercise1} no of tasks </p>
          <p> Section - 2: {props.part2} which has {props.exercise2} no of tasks </p>
          <p> Section - 3: {props.part3} which has {props.exercise3} no of tasks </p>
          </>
    )
}
export default Content