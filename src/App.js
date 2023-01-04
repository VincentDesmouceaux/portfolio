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
              <p className="name">Vincent Desmouceaux</p>
              <p className="job">I am a Full Stack Developer,</p>
              <img src="https://media.giphy.com/media/WUlplcMpOCEmTGBtBW/giphy.gif" />
              <p className="location">from Paris.</p>
            </div>
          </div>
          <h3>About me 😀</h3>
          <p>
            I built my first computer when I was in sixth grade and since then,
            always passionate about new technologies, I studied sound
            engineering, I worked in mobile telephony or even in real estate.
            Knowledge of the M.E.R.S environment ( mongoDb, expo, react, node.js
            ).
          </p>
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
