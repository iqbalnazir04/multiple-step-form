import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import React from "react";
import { Header } from "./components/Header";
import { MultiStepForm } from "./components/MultiStepForm";

function App() {
  return (
    <div className="App">
      <Header />
      <MultiStepForm />
    </div>
  );
}

export default App;
