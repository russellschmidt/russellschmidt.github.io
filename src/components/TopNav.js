import React from "react";
import Link from "gatsby-link";
import g from "glamorous";
import { css } from "glamor";

import {rhythm} from "../utils/typography";

let componentGrid = css({
  display: `grid`,
  gridTemplateColumns: `repeat(12, 8.5%)`,
  gridTemplateRows: `auto`,
  borderBottom: `1px solid #333`,
  width: `100%`,
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
    paddingRight: 5,
  },
});

let navLink = css({
  color: `#000`,
  fontStyle: `normal`,
  "&:hover": {
    textDecoration: `none`,
  },
});



export default () => (
  <nav className={componentGrid}>
    <h6 className={`${navHeader} ${logo}`}>
      <Link className={navLink} to="/">Russell Schmidt</Link>
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
