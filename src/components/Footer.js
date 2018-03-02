import React from "react";
import Link from "gatsby-link";
import g from "glamorous";
import { css } from "glamor";

import {rhythm} from "../utils/typography";

let componentGrid = css({
  display: `grid`,
  gridTemplateColumns: `repeat(12, 8%)`,
  gridTemplateRows: `33px 33px 33px`,
  borderTop: `1px solid #333`,
  width: `100%`,
  justifyContent: `space-evenly`,
});

let iconP = css({
  margin: 0,
  padding: `5px 0 0`,
});

let iconA = css({
  margin: 0,
  padding: 0,
});

let iconImg = css({
  width: 20,
  height: 20,
  "&:hover": {
    borderRadius: `30%`,
    background: `rgba(255,0,0,0.8)`,
  },
});

export default () => (
  <footer className={componentGrid}>
    <p css={{gridColumn: `span 2`, fontSize: 8, margin: 0, paddingTop: 5,}}>Follow Me</p>
    <p className={iconP}>
      <a className={iconA} href="https://linkedin.com/in/russellschmidt" target="_blank"><img className={iconImg} src="https://s3.amazonaws.com/russell-personal/social-icons/linkedin.svg" alt="LinkedIn russellschmidt profile"/></a>
    </p>
    <p className={iconP}>
      <a className={iconA} href="https://github.com/russellschmidt" target="_blank"><img className={iconImg} src="https://s3.amazonaws.com/russell-personal/social-icons/github.svg" alt="GitHub russellschmidt profile"/></a>
    </p>
    <p className={iconP}>
      <a className={iconA} href="https://twitter.com/russ_eel" target="_blank"><img className={iconImg} src="https://s3.amazonaws.com/russell-personal/social-icons/twitter.svg" alt="Twitter profile @russ-eel"/></a>
    </p>
    <p className={iconP}>
      <a className={iconA} href="https://www.instagram.com/russ_eel/" target="_blank"><img className={iconImg} src="https://s3.amazonaws.com/russell-personal/social-icons/instagram.svg" alt="Instagram @russ_eel"/></a>
    </p>
    <p className={iconP}>
      <a className={iconA} href="https://plus.google.com/u/0/115439838839649200716" target="_blank"><img className={iconImg} src="https://s3.amazonaws.com/russell-personal/social-icons/googleplus.svg" alt="Google+ Google Plus everyone's favorite social site"/></a>
    </p>
    <p className={iconP}>
      <a className={iconA} href="http://snapchat.com/add/rms-one" target="_blank"><img className={iconImg} src="https://s3.amazonaws.com/russell-personal/social-icons/snapchat.svg" alt="Snapchat"/></a>
    </p>
    <p className={iconP}>
      <a className={iconA} href="http://steamcommunity.com/id/russ-eel/" target="_blank"><img className={iconImg} src="https://s3.amazonaws.com/russell-personal/social-icons/steam.svg" alt="Steam user russ-eel"/></a>
    </p>
    <p className={iconP}>
      <a className={iconA} href="https://www.pinterest.com/rschmidt0378/" target="_blank"><img className={iconImg} src="https://s3.amazonaws.com/russell-personal/social-icons/pinterest.svg" alt="Pinterest rschmidt0378"/></a>
    </p>
    <p className={iconP}>
      <a className={iconA} href="https://www.codewars.com/users/russellschmidt" target="_blank"><img className={iconImg} src="https://s3.amazonaws.com/russell-personal/social-icons/codewars.svg" alt="CodeWars Russell Schmidt profile"/></a>
    </p>
    <p className={iconP}>
      <a className={iconA} href="https://stackoverflow.com/users/1834685/russell-schmidt" target="_blank"><img className={iconImg} src="https://s3.amazonaws.com/russell-personal/social-icons/stackoverflow.svg" alt="Stack Overflow Russell Schmidt profile"/></a>
    </p>
    <g.P
      fontSize={8}
      gridColumn={`span 4`}
    >&copy; {new Date().getFullYear()} Russell Schmidt</g.P>
  </footer>
);
