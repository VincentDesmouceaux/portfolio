import "./App.css";

function App() {
  return (
    <div>
      <header>
        <h1>Hello World :D !</h1>
      </header>
      <main className="main-block">
        <nav>
          <a href="#about-me">About me</a>
          <a href="#formation">Formation</a>
          <a href="#projets">Projects</a>
          <a href="#formation">Contact</a>
        </nav>

        <img
          className="computer"
          src="/Users/vincentdesmont/LeReacteur/Portfolio/portfolio/public/img/1671641382486.jpg"
          alt="hello"
        />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
