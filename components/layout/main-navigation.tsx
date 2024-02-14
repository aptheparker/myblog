import Link from "next/link";

import classes from "./main-navigation.module.css";
import Logo from "./logo";

export default function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link legacyBehavior href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <ul>
        <li>
          <Link legacyBehavior href="/posts">
            Posts
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </header>
  );
}
