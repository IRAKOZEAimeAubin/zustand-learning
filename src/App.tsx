import Column from "./components/Column";

function App() {

  return (
    <div className='bg-[#1D2125] min-h-[100vh] flex items-start justify-evenly'>
      <Column state='PLANNED' />
      <Column state='ONGOING' />
      <Column state='DONE' />
    </div>
  )
}

export default App
