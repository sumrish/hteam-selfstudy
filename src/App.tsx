import { 
    createBrowserRouter, 
    createRoutesFromElements, 
    Route, 
    RouterProvider 
  } from 'react-router-dom'
  
  // layouts and pages
  import RootLayout from './layouts/RootLayout'
  import Login from './pages/Login'
 
  // router and routes
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Login />} />
      </Route>
    )
  )
  
  function App() {
    return (
      <RouterProvider router={router} />
    )
  }
  
  export default App
  