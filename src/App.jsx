import { cars } from './assets/carsAPI'
import './App.css'
import Cars from './components/Cars'

function App() {
  
  
  return (
    <>
      <Cars cars={cars}/>
    </>
  )
}

export default App
