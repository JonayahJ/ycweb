import React, { useState } from "react";
import Link from "next/link";

import SocialIcons from "../../Other/SocialIcons";
import { renderContainer } from "../../../common/utils";

export default function TopNavOne({ container }) {
  return (
    <div className="top-nav .-style-1">
      <div className={renderContainer(container)}>
        <div className="top-nav__wrapper">
          <SocialIcons className="-white" />
          <p className="top-nav__wrapper__promo top-nav__wrapper__selectors">
            <Link href="/about/request">
              <a className="top-nav__auth">Request a sample of our green coffee</a>
            </Link>
          </p>
          <div className="top-nav__wrapper__selectors">
            {/* AUTH */}
            <Link href={process.env.PUBLIC_URL + "#"}>
              <a className="top-nav__auth">Login/Register</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
