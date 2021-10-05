import {
  Footer,
  Header,
} from '../components/layout';

const BaseLayout = ({ children }) => {
  return (
    <>
      <Header />

      <main>
        {children}
      </main>

      <Footer />
    </>
  )
};

export default BaseLayout;
