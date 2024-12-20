import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainScreenPage from "./Main/containers/MainScreenPage";
import JoinRoomPage from "./Join/containers/JoinRoomPage";
import CreateRoomPage from "./Create/containers/CreateRoomPage";
import ChatRoomPage from "./Chatroom/containers/ChatRoomPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <MainScreenPage /> },
      { path: "/join", element: <JoinRoomPage /> },
      { path: "/create", element: <CreateRoomPage /> },
      { path: "/room/:roomId", element: <ChatRoomPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);