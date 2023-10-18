import React from "react";
 import ReactDOM from "react-dom";

 function App() {
   return (
     <img 
      src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
      alt="new"
      />
   );
 }

 const rootElement = document.getElementById("root");
 ReactDOM.render(<App />, rootElement)