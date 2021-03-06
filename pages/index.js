// import { getSession } from "next-auth/client";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useSession, signIn, signOut } from "next-auth/react";
import Head from "next/head";
import Feed from "../components/Feed";
import Header from "../components/Header";
import Login from "../components/Login";
import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";
import { db } from "../firebase";

export default function Home({ test, posts }) {
  const { data: session } = useSession();

  if (!session) return <Login />;
  return (
    <div className="h-screen bg-gray-100 overflow-hidden">
      <Head>
        <title>Facebook</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex">
        <Sidebar />
        <Feed posts={posts} />
        <Widgets />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  // const session = await getSession(context);
  const q = query(collection(db, "posts"), orderBy("timestamp", "desc"));
  const posts = await getDocs(q);
  const docs = posts.docs.map((post) => ({
    id: post.id,
    ...post.data(),
    timestamp: null,
  }));
  return {
    props: {
      test: "test",
      posts: docs,
    },
  };
}
