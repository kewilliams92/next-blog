import Link from "next/link";
import NavBar from "../components/NavBar";

function HomePage() {
  console.log("Home Page rendered");
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home Page</h1>
      </main>
    </>
  );
}

export default HomePage;
