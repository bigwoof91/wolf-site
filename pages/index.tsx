import Head from 'next/head';
import { Typography } from 'components/Typography';
import { Nav, NavItem } from 'components/Nav';
import { Header } from 'components/Header/Header';
import { Emoji } from 'components/Emoji';
import styles from 'styles/Home.module.scss';
import { ROUTES } from 'constants/routes';
import { Link } from 'components/Link';

const { RESUME } = ROUTES;
/**
 * @todo create html resume
 */
function Home() {
  return (
    <>
      <Head>
        <title>Engineering Dude | Mike Wolf</title>
        <meta name="description" content="Engineering Dude | Mike Wolf" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <Header />
        <main className={styles.main}>
          <Typography.Title>Mike Wolf</Typography.Title>
          <Typography.Heading>
            I like building stellar teams and product.
          </Typography.Heading>
          <Typography.Heading>
            Engineering frontend things @{' '}
            <Link href="https://socialive.us" target="_blank" variant="heading">
              Socialive
            </Link>
          </Typography.Heading>
          <Nav>
            <NavItem href="mailto:bigwoof91@gmail.com">Email</NavItem>
            <NavItem to={RESUME}>Resume</NavItem>
            <NavItem href="https://github.com/bigwoof91">Github</NavItem>
            <NavItem href="https://www.linkedin.com/in/mikerosswolf/">
              LinkedIn
            </NavItem>
          </Nav>
        </main>
      </div>
    </>
  );
}

export default Home;
