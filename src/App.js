import React from "react";
import SignUp from "./SignUp/SignUp";
import "./App.scss";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="App">
      <div className="above-fold">
        <h1>Learn to code by watching others</h1>
        <p>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </div>

      <div className="signup-container">
        <div className="heading">
          <p>
            <b>Try it free 7 days</b> then $20/mo. therafter
          </p>
        </div>

        <SignUp />
      </div>

      <Footer />
    </div>
  );
}

export default App;
