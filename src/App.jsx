// 1. Optionally, import CSS for the component:
import { BrowserRouter, Routes, Route } from 'react-router'
import './App.css'
import Navbar from './Components/Navbar'
import HomePage from './Pages/HomePage'
import CounterPage from './Pages/CounterPage'
import InstructionsPage from './Pages/InstructionsPage'
import CounterProvider from './Context/CounterProvider'
import UserProvider from './Context/UserProvider'

// 2. Create a function that returns JSX:
// The <App /> component:
function App() {

  // 3. A component always returns valid JSX:
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <CounterProvider>
            <Navbar />
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/counter' element={<CounterPage />} />
              <Route path='/instructions' element={<InstructionsPage />} />
            </Routes>
          </CounterProvider>
        </UserProvider>
      </BrowserRouter>
    </>
  )
}

// 4. Finally, export the function that returns the JSX:
// ES6 Modules in JavaScript
export default App