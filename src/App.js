import "./App.css";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Main from "./Main/Main";

function App() {
  return (
    <div className="bg-bgCol min-h-screen flex flex-col justify-between">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
