import Profile from "../components/home-page/profile";

export const metadata = {
  title: "aptheparker",
  description: "I post about programming and web development.",
};

export default function Home() {
  return (
    <>
      <Profile />
      Posts
    </>
  );
}
