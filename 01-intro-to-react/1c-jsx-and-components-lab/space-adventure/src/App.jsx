import "./App.css";
import { Header, Navbar, Main, Footer } from "./components";

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* NAVBAR */}
        <Navbar />
        {/* HEADER */}
        <Header />
      </div>
      <div className="row">
        {/* MAIN */}
        <Main />
        {/* FOOTER */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
