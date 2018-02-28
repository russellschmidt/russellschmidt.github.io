import React from "react";
import Link from "gatsby-link";
import g from "glamorous";
import { css } from "glamor";

import {rhythm} from "../utils/typography";

let navStyle = css({
  margin: 0,
  padding: 0,
  display: `flex`,
  flexFlow: `row nowrap`,
  justifyContent: `space-between`
});

let topnav = css({
  display: `inline-block`,
  marginTop: rhythm(1/2),
  marginBottom: rhythm(1/4),
  flexGrow: 1,
});

let topnavLink = css({
  color: `#000`,
  fontStyle: `normal`,
  ':hover': {
    color: `#333`,
    textDecoration: `none`
  },
});

let logo = css({
  flexGrow: 3,
});

export default ({ children }) => (
  <div style={{ margin: `0 auto`, maxWidth: 960, padding: `0 1rem` }}>
    <g.Div
      width={`100%`}
      borderBottom={`1px solid black`}

    >
      <nav className={navStyle}>
        <h6 className={ css(topnav, logo) }><Link className={topnavLink} to="/">russellschmidt.net</Link></h6>
        <h6 className={topnav}><Link className={topnavLink} to="/portfolio">portfolio</Link></h6>
        <h6 className={topnav}><Link className={topnavLink} to="/blog">blog</Link></h6>
        <h6 className={topnav}><Link className={topnavLink} to="/about">about</Link></h6>
      </nav>
    </g.Div>

    {children()}
  </div>
);