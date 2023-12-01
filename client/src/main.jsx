import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App.jsx";
// import Homepage from "./pages/Homepage";
import Dashboard from "./pages/Dashboard";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <h1 className="display-2">Wrong page!</h1>,
		children: [
			// {
			// 	index: true,
			// 	element: <Homepage />,
			// },
			{
				path: "/dashboard",
				element: <Dashboard />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<RouterProvider router={router} />
);
