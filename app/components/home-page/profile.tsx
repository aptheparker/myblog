import Image from "next/image";
import classes from "./profile.module.css";

export default function Profile() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/snorlax-1.png"
          alt="Snorlax-1"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm aptheparker</h1>
      <p>I blog about web development.</p>
    </section>
  );
}
