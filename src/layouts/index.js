import React from "react";
import { css } from "glamor";

import Footer from "../components/Footer";
import TopNav from "../components/TopNav";

let container = css({
  margin: `0 auto`,
  maxWidth: 1280,
  minHeight: `100vh`,
  padding: `0 1rem`,
  display: `flex`,
  flexFlow: `row wrap`,
  alignContent: `stretch`,
});

let sandwichContainer = css({
  height: 100,
  width: `100%`,
});

let bodyContainer = css({
  flex: `1 100%`
});

export default ({ children }) => (
  <div css={container}>
    <div css={sandwichContainer}>
      <TopNav />
    </div>
    <div css={bodyContainer}>
      {children()}
    </div>
    <div css={sandwichContainer}>
      <Footer />
    </div>
  </div>
);
