import Head from 'next/head';
import { useContext } from "react";
import { GlobalContext } from "@utils/GlobalContext";
import BlurImage from '@components/BlurImage';

export async function getServerSideProps(context) {
  const res = await fetch(`${process.env.API_ROUTE}/api/images`);
  const images = await res.json();
  return {
    props: {
      images
    }, // will be passed to the page component as props
  }
}

export default function Home({ images }) {
  const { darkMode, setDarkMode } = useContext(GlobalContext);

  return (
    <div>
      <Head>
        <title>Image Blur Loader</title>
        <meta name="description" content="Image Blur Loader" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="dark:bg-neutral-900 min-h-screen">

        <div className="mx-auto max-w-7xl py-8 px-8 xl:px-0">
          <div className="flex items-center justify-between mb-8">
            <h1 className="dark:text-white text-2xl font-semibold">Image Blur Loader</h1>
            <div onClick={() => setDarkMode(!darkMode)} className="transition-all cursor-pointer w-12 h-7 dark:bg-blue-500 bg-neutral-200 rounded-full relative">
              <div className="h-5 w-5 bg-white rounded-full absolute top-1 transition-all dark:left-6 left-1"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-y-8 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
            {images.map((image) => (
              <BlurImage key={image.id} image={image} />
            ))}
          </div>
        </div>

      </main>
    </div>
  )
}

