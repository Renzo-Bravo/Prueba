import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Info from "./components/info/Info";
import Speakers from "./components/speakers/Speakers";
import Cronograma from "./components/cronograma/Cronograma";
import Form from "./components/form/Form";
import Footer from "./components/footer/Footer";
import Areas from "./components/tematicas/Areas";
import Empresas from "./components/empresas/Empresas";
import Agradecimientos from "./components/agradecimientos/Agradecimientos";
import Report from "./components/report/Report";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Info />
      <Areas />
      <Speakers />
      <Cronograma />
      <Empresas />
      <Form />
      <Agradecimientos />
      <Report />
      <Footer />
    </>
  );
}

export default App;
