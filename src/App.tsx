import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.scss'
import MainLayout from './layout/main-layout'
import routes from './router'

function App() {
  const router = createBrowserRouter([
    {
      element: <MainLayout />,
      errorElement: <div>Not Found</div>,
      children: routes
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
