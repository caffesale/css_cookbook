import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"; 
import { createGlobalStyle } from "styled-components";
import ImageContainer from "./pages/ImageContainer/Image";
import SlideWithTitle from "./pages/slideWithTitle/SlideWithTitle";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<ImageContainer />}/>
        <Route path="/slide_with_title" element={<SlideWithTitle />}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* remove default spacing */
/* force styling of type through styling, rather than elements */

* {
  margin: 0;
  padding: 0;
  font: inherit;
}

/* dark mode user-agent-styles */

html {
  color-scheme: dark light;
}

/* min body height */

body {
  min-height: 100vh;
}

/* responsive images/videos */
img,
picture,
svg,
video {
  display: block;
  max-width: 100%;
}
`