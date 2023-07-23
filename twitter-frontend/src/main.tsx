import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from './error-page.tsx';
import Login from './routes/login.tsx';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
const client = new ApolloClient({
  uri: `${import.meta.env.VITE_SERVER_URL}/graphql`,
  cache: new InMemoryCache(),
});
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />
  },
  {
    path: "login",
    element: <Login></Login>,
    errorElement: <ErrorPage />
  }
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <ApolloProvider client={client}>
    <RouterProvider router={router} />
  </ApolloProvider>
)
