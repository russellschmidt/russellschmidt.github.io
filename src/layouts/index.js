import React from "react";
import { css } from "glamor";

import Footer from "../components/Footer";
import TopNav from "../components/TopNav";

let container = css({
  margin: `0 auto`,
  maxWidth: 1280,
  height: `100%`,
  padding: `0 1rem`,

});

let topContainer = css({
  height: 100,
  width: `100%`,
});

let bodyContainer = css({
  minHeight: `calc(100vh - 280px)`,
  "@media (max-width: 768px)": {
    minHeight: `calc(100vh - 270px)`,
  },
});

let bottomContainer = css({
  height: 70,
  width: `100%`,
});


export default ({ children }) => (
  <div css={container}>
    <div css={topContainer}>
      <TopNav />
    </div>
    <div css={bodyContainer}>
      {children()}
    </div>
    <div css={bottomContainer}>
      <Footer />
    </div>
  </div>
);
