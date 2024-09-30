import Web3Provider from './contexts/Web3Provider'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes/Routes'

function App() {
  return (
    <>
      <Web3Provider>
        <RouterProvider router={routes}></RouterProvider>
      </Web3Provider>
    </>
  )
}

export default App
