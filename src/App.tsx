import React, { FC } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { HomePage } from "./components/HomePage";
import "./app.scss";

export const App: FC = () => (
  <ErrorBoundary>
    <HomePage />
  </ErrorBoundary>
);

export default App;
