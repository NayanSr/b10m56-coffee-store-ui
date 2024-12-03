import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCards from './components/CoffeeCards';

function App() {
  const coffees= useLoaderData();

  return (
    <div>
      <h1>Total: {coffees.length}</h1>
     <div className='w-3/4 mx-auto'>
     {
        coffees.map(coffee=><CoffeeCards key={coffee._id} coffee={coffee}/>)
      }
     </div>
      </div>
  )
}

export default App
