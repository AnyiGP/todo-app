import { Aside } from "../Aside";
import { Header } from "../Header";
import { Main } from "../Main";
import { Footer } from "../Footer";

const Layout = () => {
  return (
    <>
      Layout
      <Header />
      <div className="d-flexflex-grow-1">
        <Aside />
        <Main />
      </div>
      <Footer />
    </>
  );
};

export { Layout };
