import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCards from './components/CoffeeCards';
import { useState } from 'react';

function App() {
  const loadesCoffees= useLoaderData();
  const [coffees, setCoffees] =useState(loadesCoffees);

  return (
    <div>
      <h1>Total: {coffees.length}</h1>
     <div className='w-3/4 mx-auto'>
     {
        coffees.map(coffee=><CoffeeCards key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees} />)
      }
     </div>
      </div>
  )
}

export default App
