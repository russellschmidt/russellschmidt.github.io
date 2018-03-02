import React from "react";
import Link from "gatsby-link";
import g from "glamorous";
import { css } from "glamor";

import {rhythm} from "../utils/typography";

let bounce = css.keyframes('bounce', {
  '0%': { transform: 'scale(0.1)', opacity: 0 },
  '60%': { transform: 'scale(1.2)', opacity: 1 },
  '100%': { transform: 'scale(1)' }
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
  "@media (max-width: 768px)": {
    gridColumn: `span 3`,
    textAlign: `center`,
  },
  animation: `${slideItIn} 2s`,
});

let logo = css({
  gridColumn: `1/7`,
  textAlign: `left`,
  "@media (max-width: 768px)": {
    gridColumn: `span 3`,
    textAlign: `left`,
  },
  "&:hover": {
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
    animation: `${bounce} 3s`,
  },
});

let navLogo = css({

});



export default () => (
  <nav className={componentGrid}>
    <h6 className={`${navHeader} ${logo}`}>
      <Link className={`${navLink} ${navLogo}`} to="/">Russell Schmidt</Link>
    </h6>
    <h6 className={navHeader}>
      <Link className={navLink} to="/portfolio/">Portfolio</Link>
    </h6>
    <h6 className={navHeader}>
      <Link className={navLink} to="/blog/">Blog</Link>
    </h6>
    <h6 className={`${navHeader} ${rightLink}`}>
      <Link className={navLink} to="/about/">About</Link>
    </h6>
  </nav>
);
