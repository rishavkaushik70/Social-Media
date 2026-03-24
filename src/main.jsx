import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./routes/App.jsx";
import CreatePost, { createPostAction } from "./components/post/CreatePost.jsx";
import PostList, { postLoader } from "./components/post/PostList";
import LoginForm from "./components/pages/loginForm/LoginForm.jsx";
import SignUp from "./components/pages/signUpForm/SignUp.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <PostList />, loader: postLoader },
      {
        path: "/create-post",
        element: <CreatePost />,
        action: createPostAction,
      },
      { path: "/login-form", element: <LoginForm /> },
      { path: "/signup-form", element: <SignUp /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
