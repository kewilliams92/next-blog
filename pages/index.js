import Head from "next/head";
import Link from "next/link";

function HomePage() {
  console.log("Home Page rendered");
  return (
    <>
        <Head>
            <title>My Blog</title>
        </Head>
      <main>
        <h1>My Blog</h1>
        <ul>
            <li> one </li>
            <li> two </li>
            <li> three </li>
        </ul>
      </main>
    </>
  );
}

export default HomePage;
