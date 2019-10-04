import React from "react";
import ReactDOM from "react-dom";
import AWS from "aws-sdk";

import awsmobile from "./aws-exports";
import "./styles.css";

AWS.config.update({
  region: awsmobile.aws_cognito_region,
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId: awsmobile.aws_cognito_identity_pool_id
  })
});

const signin = () => {
  console.log("sd");
};

function App() {
  return (
    <div className="App">
      <h2>AWS signin</h2>
      <button onClick={signin}>signin</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
