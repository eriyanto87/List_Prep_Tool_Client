import React from "react";
import Email from "./components/email/email";
import PhoneNumbers from "./components/phonenumbers/phonenumbers";
import YCList from "./components/yclist/yclist";

function App() {
  return (
    <div className="App">
      <h1 className="header">List Prepping Tool</h1>
      <Email />
      <PhoneNumbers />
      <YCList />
    </div>
  );
}

export default App;
