import React from 'react'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from './styles/theme'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import GlobalStyles from './styles/global'
import Auth from './pages/auth/Auth'
import Signup from './pages/signup/Signup'
import withContexts from './HOC/withContexts'

function App() {
    const router = createBrowserRouter([
        {
            path: '/auth',
            element: <Auth />,
        },
        {
            path: '/signup',
            element: <Signup />,
        },
    ])
    return (
        <ThemeProvider theme={lightTheme}>
            <RouterProvider router={router} />
            <GlobalStyles />
        </ThemeProvider>
    )
}

export default withContexts(App)