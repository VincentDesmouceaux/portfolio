import "./App.css";

function App() {
  return (
    <div>
      <header>
        <h1>Hello World !</h1>
        <div className="helloworld">
          <img
            className="gif"
            src="https://media.giphy.com/media/3SL41WtN5l9DNdPJGs/giphy.gif"
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
              <p className="location">from Paris.</p>
              <img src="https://media.giphy.com/media/WUlplcMpOCEmTGBtBW/giphy.gif" />
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
        <section id="education">
          <h2>Education</h2>
          <p>The technologies and tools on which I continually train 🚀 :</p>
          <div>
            <img src="img/javascript.png" alt="js" />
            <img src="img/html.png" alt="html" />
            <img src="img/css.png" alt="css" />
          </div>

          <p>
            Recently, I took the <span>Web & Mobile Development</span> training
            at
            <a href="https://www.lereacteur.io/" target="_blank">
              le Reacteur
            </a>
            to improve my knowledge and learn new technologies :
          </p>

          <div>
            <img src="/img/react.png" alt="react" />
            <img src="/img/mongodb.png" alt="react" />
            <img
              src="https://raw.githubusercontent.com/jsx-ir/logo/master/jsx.png "
              alt="JSX"
            />

            <img
              src="https://res.cloudinary.com/practicaldev/image/fetch/s--H6L3JDpH--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://repository-images.githubusercontent.com/65750241/79017180-d4ce-11e9-9955-3f0a7be00c7a"
              alt="expo"
            />
            <img
              src="https://www.soat.fr/assets/images/formation/git.jpg"
              alt="git"
            />

            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/1200px-Visual_Studio_Code_1.35_icon.svg.png"
              alt="vsc"
            />

            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/langfr-1024px-Node.js_logo.svg.png"
              alt="node.js"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b8/Netlify_logo.svg"
              alt="netlify"
            />

            <img
              src="https://sofacto.force.com/support/servlet/rtaImage?eid=ka008000000dkuz&feoid=00N1p00000JI0JP&refid=0EM08000007PCaC"
              alt="stripe"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Cloudinary_logo_blue_0720_2x.png"
              alt="cloudinary"
            />

            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/92/Android_Studio_Trademark.svg"
              alt="astudio"
            />
            <img
              src="https://logos-download.com/wp-content/uploads/2020/06/Postman_Logo.png"
              alt="postman"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Axios_%28computer_library%29_logo.svg "
              alt="AXIOS"
            />
          </div>
        </section>

        <section id="projects">
          <h2>Projects</h2>

          <p>
            I train daily to make replicas of websites and I'm able to develop
            backends that interact with databases and frontends integrating{" "}
            <span>react</span>, <span>html</span> and
            <span> css</span>. Here are examples of work 🚧:
          </p>
          <a href="https://tripadvisor-by-vincent.netlify.app/" target="_blank">
            <div className="project-container">
              <img src="img/tripadvisorbyvins.png" alt="tripadvisor" />
              <div>
                <h3>Tripadvisor Web</h3>
                <h4>Front-End project</h4>
                <ul>
                  <li>photo carousel</li>
                  <li>Automated sending of emails</li>
                </ul>
              </div>
            </div>
          </a>
          <a href="https://netflix-by-vincent.netlify.app/" target="_blank">
            <div className="project-container">
              <img src="img/netflixbyvins.png" alt="netflix" />
              <div>
                <h3>Netflix Web</h3>
                <h4>Front-End project</h4>
                <ul>
                  <li>photo carousel</li>
                  <li>Operation of an API</li>
                </ul>
              </div>
            </div>
          </a>
          <a href="https://vinted-vincent.netlify.app/" target="_blank">
            <div className="project-container">
              <img src="img/vintedbyvins.png" alt="vinted" />
              <div>
                <h3>Vinted Web</h3>
                <h4>Full-Stack project</h4>
                <ul>
                  <li>Registration / login</li>
                  <li>Data recovery</li>
                  <li>Posting</li>
                  <li>Announcements</li>
                  <li>Search bar</li>
                  <li>Payment</li>
                  <li>Photo upload</li>
                </ul>
              </div>
            </div>
          </a>
          <a href="https://rawg-by-vincent.netlify.app/" target="_blank">
            <div className="project-container">
              <img src="img/rawgbyvincent.png" alt="rawg" />
              <div>
                <h3>Rawg Web</h3>
                <h4>Full-Stack project</h4>
                <ul>
                  <li>Registration / login</li>

                  <li>Operation of an API</li>
                  <li>Announcements</li>
                  <li>Search bar</li>
                  <li>Filters</li>
                </ul>
              </div>
            </div>
          </a>
        </section>
        <section id="contact"></section>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
