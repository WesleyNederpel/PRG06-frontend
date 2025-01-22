import './App.css';
import SetsComponent from "./components/SetsComponent.jsx";
import FormComponent from "./components/FormComponent.jsx";
import EditComponent from "./components/EditComponent.jsx";
import SetItem from "./components/SetItem.jsx";
import Layout from "./components/Layout.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";

function App() {
    const router = createBrowserRouter([
        {
            element: <Layout />,
            children: [
                {
                    path: "/",
                    element: <SetsComponent />,
                },
                {
                    path: "/set/create",
                    element: <FormComponent />,
                },
                {
                    path: "/set/:id/edit",
                    element: <EditComponent />,
                },
                {
                    path: "/set/:id",
                    element: <SetItem />,
                },
            ],
        },
    ]);

    return (
        <div className="bg-yellow-50 min-h-screen text-gray-800">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;