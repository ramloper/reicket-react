import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import App from '../App'
import CenterDetail from './pages/CenterDetail'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/center/:centerId",
                element: <CenterDetail />
            }
        ]
    },
    {
        path: '/login',
        element: <Login />
    }
])

export default function Router() {
    return <RouterProvider router={router} />
}