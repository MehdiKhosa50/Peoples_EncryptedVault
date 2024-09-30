import { createBrowserRouter } from 'react-router-dom'
import { Wallets } from '../pages/Wallets'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Wallets />,
    },
])