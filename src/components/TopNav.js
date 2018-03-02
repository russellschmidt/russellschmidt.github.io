import React from "react";
import Link from "gatsby-link";
import g from "glamorous";
import { css } from "glamor";

import {rhythm} from "../utils/typography";

let pulsate = css.keyframes('pulsate', {
  '0%': { opacity: 0.8, textShadow: `0 0 25px #f80` },
  '33%': { opacity: 0.6, textShadow: `0 0 25px #0f8` },
  '66%': { opacity: 0.8, textShadow: `0 0 25px #0ff` },
  '100%': { opacity: 0.6, textShadow: `0 0 25px #80f` },
});

let slideItIn = css.keyframes('slideItIn', {
  '0%': {
    marginLeft: '200%',
    width: '300%',
  },
  '100%': {
    marginLeft: '0%',
    width: '300%',
  }
});

let componentGrid = css({
  display: `grid`,
  gridTemplateColumns: `repeat(12, 8%)`,
  gridTemplateRows: `auto`,
  borderBottom: `1px solid #888`,
  width: `100%`,
  justifyContent: `space-evenly`,
});

let navHeader = css({
  marginTop: rhythm(1),
  marginBottom: rhythm(1/2),
  textAlign: `left`,
  gridColumn: `span 2`,
  animation: `${slideItIn} 2s`,
  "@media (max-width: 768px)": {
    gridColumn: `span 3`,
    textAlign: `right`,
    animation: `none`,
    marginTop: rhythm(2/3),
    marginBottom: rhythm(1/3),
  },

});

let logo = css({
  gridColumn: `1/7`,
  textAlign: `left`,
  "@media (max-width: 768px)": {
    gridColumn: `span 3`,
    textAlign: `left`,
  },
});

let rightLink = css({
  "@media (max-width: 768px)": {
    textAlign: `right`,
  },
});

let navLink = css({
  color: `#000`,
  fontStyle: `normal`,
  "&:hover": {
    textDecoration: `none`,
    animation: `${pulsate} 2s ease-in-out infinite`,
  },
  "@media (max-width: 768px)": {
    fontSize: rhythm(2/5),
    textAlign: `center`,
    gridColumn: `span 3`,
  },
});

let navLogo = css({

});



export default () => (
  <nav className={componentGrid}>
    <h6 className={`${navHeader} ${logo}`}>
      <Link className={`${navLink} ${navLogo}`} to="/">RUSSELL SCHMIDT</Link>
    </h6>
    <h6 className={navHeader}>
      <Link className={navLink} to="/portfolio/">PORTFOLIO</Link>
    </h6>
    <h6 className={navHeader}>
      <Link className={navLink} to="/blog/">BLOG</Link>
    </h6>
    <h6 className={`${navHeader} ${rightLink}`}>
      <Link className={navLink} to="/about/">ABOUT</Link>
    </h6>
  </nav>
);
