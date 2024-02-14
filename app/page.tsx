import Hero from "../components/home-page/hero";

export const metadata = {
  title: "aptheparker",
  description: "I post about programming and web development.",
};

export default function Home() {
  return (
    <>
      <Hero />
      Posts
    </>
  );
}
