import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

function Home({ data }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Birdsquawk App</title>
        <meta name='description' content='Example microservices app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Birdsquawk - Name: {data.name}, Age: {data.age}
        </h1>
      </main>
    </div>
  );
}

export async function getStaticProps(context) {
  const res = await fetch(`https://api.agify.io?name=Birdy`);
  const data = await res.json();
  console.log(data);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data }, // will be passed to the page component as props
  };
}

export default Home;
