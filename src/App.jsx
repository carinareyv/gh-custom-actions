import MainContent from "./components/MainContent";
import logo from "./assets/images/rb.jpg";

function App() {
  return (
    <>
      <header>
        <div id="logo-img">
          <img src={logo} />
        </div>
        <h1>You made it!</h1>
      </header>
      <MainContent />
    </>
  );
}

export default App;
