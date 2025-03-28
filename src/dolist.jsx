const tasks = [
    { id: 1, task: "Finish React project" },
    { id: 2, task: "Workout for 60 minutes" },
    { id: 3, task: "Excel at being awesome!" },
  ]
  
  function Dolist() {
    return (
      <div>
        <h3>Today's To-Do List:</h3>
        <ul>
          {tasks.map((item) => (
            <li key={item.id}>{item.task}</li>
          ))}
        </ul>
      </div>
    )
  }
  
  export default Dolist