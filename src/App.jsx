import { useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
function App() {
  const isOnwerPath = useLocation().pathname.includes("owner");

  return (
    <>
      {!isOnwerPath && <Navbar />}
    </>
  )
}

export default App
