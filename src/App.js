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
      <main>
        <div>
          <nav>
            <a href="#about-me">About me</a>
            <a href="#education">Education</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>

          <img
            className="computer"
            src="https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif"
            alt="hello"
          />
          <section id="about-me">
            <div className="informations">
              <img src="img/photo cv.JPG" alt="me " />
              <div className="informations-texts">
                <p className="name">Vincent Desmouceaux</p>
                <p className="job">I am a Full Stack Developer,</p>
                <p className="location">from Paris.</p>
                <img
                  src="https://media.giphy.com/media/WUlplcMpOCEmTGBtBW/giphy.gif"
                  alt="cat"
                />
              </div>
            </div>
            <h3>About me </h3>
            <p className="about-text">
  <span className="bold-text">Vincent Desmouceaux</span> <br />
  <span className="bold-text">Full Stack Developer</span> | Paris <br /><br />

  I am a dedicated and passionate <span className="bold-text">Full Stack Developer</span> from Paris, currently advancing my skills in <span className="bold-text">Python application development</span> through an intensive program at <span className="bold-text">OpenClassrooms</span>. <br />
  In this course, I am focusing on building robust <span className="bold-text">web applications</span> using <span className="bold-text">Python</span>, <span className="bold-text">Django</span>, and various related tools and technologies. I am also learning to optimize <span className="bold-text">backend systems</span> and create efficient, scalable solutions. <br /><br />

  Prior to my current studies, I completed a comprehensive <span className="bold-text">Full-Stack JavaScript Web & Mobile Development</span> course at <span className="bold-text">Le Reacteur</span>, where I became proficient in the <span className="bold-text">M.E.R.N stack</span> (<span className="bold-text">MongoDB</span>, <span className="bold-text">Express</span>, <span className="bold-text">React</span>, <span className="bold-text">Node.js</span>). <br />
  This training allowed me to gain hands-on experience with both <span className="bold-text">front-end</span> and <span className="bold-text">back-end development</span>. I worked on multiple projects involving complex <span className="bold-text">APIs</span>, dynamic user interfaces, and backend architecture. <br /><br />

  Throughout my journey, I have developed strong skills in integrating various technologies such as <span className="bold-text">React</span>, <span className="bold-text">Node.js</span>, and <span className="bold-text">MongoDB</span>. I am now expanding my expertise with <span className="bold-text">Python</span> and <span className="bold-text">Django</span> to become a well-rounded <span className="bold-text">full-stack developer</span>. <br />
  I am continuously improving my knowledge through real-world projects and challenges, and I am always eager to learn new technologies and methodologies.
</p>



          </section>
          <section id="education">
            <h2>Education</h2>
            <p>The technologies and tools on which I continually train 🚀 :</p>
            <div>
  {/* Nouveau bloc avec Python, PM2, et Django */}
  <img
    style={{ height: 100 }}
    src="https://www.logiquetechno.com/wp-content/uploads/2022/12/logo-python-1024x576.png"
    alt="python"
  />
  <img
    style={{ height: 70 }}
    src="https://ludovicwyffels.dev/blog/2019-08_pm2/cover_hu74664c7dac500caeb872530274db0e57_22469_1200x0_resize_q75_box.jpg"
    alt="pm2"
  />
  <img
    style={{ height: 100 }}
    src="https://i0.wp.com/www.opengis.ch/wp-content/uploads/2020/04/django-python-logo.png?w=500&ssl=1"
    alt="django"
  />
</div>



<p>
  Recently, I completed an intensive training in <span>Web & Mobile Development</span>, where I honed my skills in both front-end and back-end technologies. This experience allowed me to dive deep into modern development frameworks and sharpen my ability to create dynamic, responsive, and user-friendly applications. I continuously push myself to learn cutting-edge tools and technologies to stay at the forefront of the development world.
</p>


            <div>
  <img src="/img/react.png" alt="react" />
  <img src="/img/mongodb.png" alt="react" />
  <img
    style={{ height: 80 }}
    src="https://cdn.icon-icons.com/icons2/2415/PNG/512/vuejs_original_wordmark_logo_icon_146305.png"
    alt="Vue.js"
  />
  <img
    style={{ height: 80 }}
    src="https://raw.githubusercontent.com/jsx-ir/logo/master/jsx.png"
    alt="JSX"
  />
  <img
    src="https://res.cloudinary.com/practicaldev/image/fetch/s--H6L3JDpH--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://repository-images.githubusercontent.com/65750241/79017180-d4ce-11e9-9955-3f0a7be00c7a"
    alt="expo"
  />
  <img
    src="https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png"
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
    style={{ height: 70 }}
    src="https://upload.wikimedia.org/wikipedia/commons/b/b8/Netlify_logo.svg"
    alt="netlify"
  />
  <img
    src="https://sofacto.force.com/support/servlet/rtaImage?eid=ka008000000dkuz&feoid=00N1p00000JI0JP&refid=0EM08000007PCaC"
    alt="stripe"
  />
  <img
    style={{ height: 50 }}
    src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Cloudinary_logo_blue_0720_2x.png"
    alt="cloudinary"
  />
  <img
    style={{ height: 50 }}
    src="https://upload.wikimedia.org/wikipedia/commons/9/92/Android_Studio_Trademark.svg"
    alt="astudio"
  />
  <img
    style={{ height: 60 }}
    src="https://logos-download.com/wp-content/uploads/2020/06/Postman_Logo.png"
    alt="postman"
  />
  <img
    style={{ height: 40 }}
    src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Axios_%28computer_library%29_logo.svg"
    alt="AXIOS"
  />

 
  <img src="img/javascript.png" alt="js" />
  <img src="img/html.png" alt="html" />
  <img src="img/css.png" alt="css" />


  <img
    style={{ height: 100 }}
    src="https://blog.appseed.us/content/images/2024/01/cover-flask.jpg"
    alt="flask"
  />

<img
    style={{ height: 100 }}
    src="https://cdn.dribbble.com/users/1139587/screenshots/10738459/media/d0157111b7e3517c6dce1560d24bfcd8.png?resize=1000x750&vertical=center"
    alt="northflank"
  />
 
</div>

          </section>

          <section id="projects">
            <h2>Projects</h2>

            <p>
  I consistently work on a variety of projects to sharpen my development skills. On the front-end, I specialize in creating dynamic user interfaces using technologies like <span>Vanilla JavaScript</span>, <span>React</span>, and <span>Vue.js</span>. These projects involve crafting responsive, interactive designs that enhance user experience. <br /><br />
  
  On the back-end, I have extensive experience developing robust, scalable systems using <span>Python</span>, <span>Django</span>, and <span>Node.js</span>. These back-end services are designed to efficiently handle data management, API integration, and server-side logic. <br /><br />

  In addition to web development, I also focus on software engineering. Several of my Python projects, including algorithm challenges and back-end-only systems, are available exclusively on my <a href="https://github.com/VincentDesmouceaux" target="_blank" rel="noreferrer">GitHub</a>. These projects showcase my ability to build complex logic and problem-solving skills in non-web environments. <br /><br />

  Here are some examples of my recent work, ranging from full-stack applications to specialized software development 🚧:
</p>



            <a
              href="https://cafewithavue.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="project-container">
                <img src="img/Screenshot 2023-11-02 at 14.29.48.png" alt="thePhotographer" />
                <div>
                  <h3>Cafe with a Vue</h3>
                  <h4>Front-End project</h4>
                  <ul>
                    <li>Using the Vue.js framework</li>
                    <li>Data recovery</li>
                    <li>Order cart</li>
                  </ul>
                </div>
              </div>
            </a>

            <a
              href="https://mysearchbar-vd.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="project-container">
                <img src="img/mySearchBar.png" alt="thePhotographer" />
                <div>
                  <h3>Search bar module</h3>
                  <h4>Front-End project</h4>
                  <ul>
                    <li>Operation of three APIs</li>
                    <li>Autocomplete search</li>
                  </ul>
                </div>
              </div>
            </a>
            <a
              href="https://photographer-by-vd.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="project-container">
                <img
                  src="img/Capture d’écran 2023-04-03 à 17.23.46.png"
                  alt="thePhotographer"
                />
                <div>
                  <h3>The Photographer Portfolio</h3>
                  <h4>Front-End project</h4>
                  <ul>
                    <li>mastery of the basics of HTML5 and CSS3</li>
                  </ul>
                </div>
              </div>
            </a>
            <a
              href="https://deliveroo-by-vincent.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="project-container">
                <img src="img/delivins.png" alt="deliveroo" />
                <div>
                  <h3>Deliveroo Web</h3>
                  <h4>Front-End project</h4>
                  <ul>
                    <li>Data recovery</li>
                    <li>Order cart</li>
                  </ul>
                </div>
              </div>
            </a>
            <a
              href="https://tripadvisor-by-vincent.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
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
            <a
              href="https://main--flix-net-vd.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
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
            <a
              href="https://vinted-vincent.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
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
            <a
              href="https://rawg-by-vincent.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="project-container">
                <img src="img/rawgbyvincent.png" alt="rawg" />
                <div>
                  <h3>Rawg Web</h3>
                  <h4>Full-Stack project</h4>
                  <ul>
                    <li>Registration / login</li>

                    <li>Operation of an API</li>

                    <li>Search bar</li>
                    <li>Filters</li>
                  </ul>
                </div>
              </div>
            </a>

            <div className="project-container">
              <img src="img/airbnb.png" alt="airbnb" />
              <div>
                <h3>Airbnb Mobile</h3>
                <h4>Full-Stack project</h4>
                <ul>
                  <li>Registration / login</li>

                  <li>Editing the user profile</li>
                  <li>Map display</li>
                  <li>Geolocation</li>
                  <li>Access to the image gallery</li>
                  <li>Access to the camera</li>
                </ul>
              </div>
            </div>
          </section>
          <section id="contact">
            <h2>Contact</h2>
            <div>
              <img src="img/mail.jpg" alt="mail" />
              <p>desmontvincent@gmail.com</p>
            </div>
            <div>
              <img src="img/linkedin.png" alt="linkedin" />
              <a
                href="https://www.linkedin.com/in/vincent-desmouceaux-277b3b244/"
                target="_blank"
                rel="noreferrer"
              >
                https://www.linkedin.com/
              </a>
            </div>
            <div>
              <img src="img/github.png" alt="github" />
              <a
                href="https://github.com/VincentDesmouceaux"
                target="_blank"
                rel="noreferrer"
              >
                https://github.com/
              </a>
            </div>
          </section>
        </div>
      </main>

      <footer>
        <p>Portfolio produced by Vincent Desmouceaux</p>
        <p> with React®️</p>
        <p>2023</p>
      </footer>
    </div>
  );
}

export default App;
