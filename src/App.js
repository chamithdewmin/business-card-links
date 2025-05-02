import React from "react";
import { Helmet } from "react-helmet";
import SocialMediaLinks from "./SocialMediaLinks/SocialMediaLinks";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>LOGOZO</title>
        <link rel="icon" href="/icon.png" type="image/png" />
      </Helmet>

      <SocialMediaLinks />
    </div>
  );
}

export default App;
