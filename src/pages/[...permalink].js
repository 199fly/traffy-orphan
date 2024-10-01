import api from './api/mock-api.json'
import Render from './Render'
import Head from 'next/head'

/**
 * The api mocks the cms data that specifies how the website will render
 * - Each page is a route
 * - Each route is made of compoenent blocks (data) which specifiy which component 
 * to render based on the component name.
 */
const pages = api.pages

export default function Home(data) {
  const { id, title, permalink, status, blocks } = data?.page;
  return (
    <>
      <Head>
        <title>{title}</title>
        {/* Necessary Src and Style tags */}
      </Head>
      {blocks.map((data) => <Render {...data} />)
      }
    </>
  );
}


// getStaticPaths generates each website path to be statically generated at build time
export async function getStaticPaths() {
  const paths = pages.map((page) => ({
    params: { permalink: [page.permalink] },
  }))

  return {
    paths, fallback: false,
  };
}


// getStaticProps fetches data for the corresponding dynamic page
export async function getStaticProps({ params }) {
  const { permalink } = params;
  const page = pages.find(page => page?.permalink === permalink[0]);
  return {
    props: {
      page, // Pass the page content as props
    },
  };
}