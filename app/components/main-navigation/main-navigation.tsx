import Link from "next/link";
import classes from "./main-navigation.module.css";
import Logo from "./logo/logo";

export default function MainNavigation() {
  return (
    <nav className={classes.nav}>
      <Link legacyBehavior href="/">
        <Logo/>
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
    </nav>
  );
}
