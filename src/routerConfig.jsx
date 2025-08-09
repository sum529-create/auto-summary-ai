import { lazy, Suspense } from "react";
import App from "./App.jsx";
import Notes from "./components/routes/Notes.jsx";
import ErrorPage from "./components/routes/ErrorPage.jsx";

const NoteDetail = lazy(() => import("./components/routes/NoteDetail.jsx"))

export const routerConfig = [
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Notes/>
      },
      {
        path: "/notes/:id",
        element: (
          <Suspense fallback={<div>loading...</div>}>
            <NoteDetail/>
          </Suspense>
        ),
        errorElement: <ErrorPage/>
      }    
    ]
  },
]