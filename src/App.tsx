import { NavLink } from "react-router"
function App() {

  return (
    <div>
      <div>I have implemented routing to this page! Please refer to the following for my projects for now:</div>

      <ul className = "flex flex-col gap-3 font-mono">
        <NavLink to = "/personas">personas</NavLink>
        <NavLink to = "/redesign">responsive redesign</NavLink>
      </ul>
    </div>
  )
}

export default App
