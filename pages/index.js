import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { useUser } from "@auth0/nextjs-auth0";

export default function Home() {
  const { user, error, isLoading } = useUser();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header
          title={`Welcome ${user ? user.name + ", " : ""} to my Courier app!`}
        />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
          <br />
          {!user ? (
            <a href="/api/auth/login">Login</a>
          ) : (
            <a href="/api/auth/logout">Logout</a>
          )}
        </p>
      </main>

      <Footer />
    </div>
  );
}
