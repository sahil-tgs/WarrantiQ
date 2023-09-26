import Head from "next/head";
import Layout from "@/components/Layout";
import First from "@/components/Frontpages/First";
import Second from "@/components/Frontpages/Second";
import { useSelector } from "react-redux";
import { useRouter } from "next/router"; // Corrected import
import { useEffect } from "react";

export default function Home() {
  const { userRole } = useSelector((state) => state.navbar);
  const router = useRouter(); // Changed to `router` for clarity
  useEffect(() => {
    if (userRole != null) {
      router.push("/profile"); // Used `router.push` to navigate
    }
  }, [userRole]);

  return (
    <>
      <Head>
        <title>WarrantiQ</title>
        <meta name="description" content="Hello, this is the DWAR App." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <First />
        <Second />
      </Layout>
    </>
  );
}
