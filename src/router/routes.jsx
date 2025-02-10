import { createBrowserRouter } from "react-router"
import RootLayout from "./RootLayout.jsx"
import ErrorPage from "./ErrorPage.jsx"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [

        ]
    }
])