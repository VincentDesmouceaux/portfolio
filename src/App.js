import "./App.css";

function App() {
  return (
    <div>
      <header>
        <h1>Hello World :D !</h1>
        <div className="helloworld">
          <img
            className="gif"
            src="https://media.giphy.com/media/bGgsc5mWoryfgKBx1u/giphy.gif"
            alt="hello"
          />
        </div>
      </header>
      <main className="main-block">
        <nav>
          <a href="#about-me">About me</a>
          <a href="#education">Education</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <img className="computer" src="img/1671641382486.jpg" alt="hello" />
        <section id="about-me">
          <div className="informations">
            <img src="img/photo cv.JPG" alt="me " />
            <div className="informations-texts">
              <p>Vincent Desmouceaux</p>
              <p>full-stack web developer, Paris</p>
            </div>
          </div>
        </section>
        <section id="education"></section>
        <section id="projects"></section>
        <section id="contact"></section>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
