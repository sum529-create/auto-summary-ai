import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NoteDetail from "./components/routes/NoteDetail.jsx";
import Notes from "./components/routes/Notes.jsx";
import ErrorPage from "./components/routes/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Notes/>
      },
      {
        path: "/notes/:id",
        element: <NoteDetail/>,
        errorElement: <ErrorPage/>
      }
    ]
  },
])

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
  // </StrictMode>,
);
