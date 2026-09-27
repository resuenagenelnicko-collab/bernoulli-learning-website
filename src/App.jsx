import "./App.css";

function App() {
  return (
    <main className="landing-page">

      {/* =========================================
          ANIMATED FLUID BACKGROUND
      ========================================= */}

      <div className="fluid-background" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>


      {/* =========================================
          MAIN CONTENT
      ========================================= */}

      <div className="content">

        {/* Website Name */}
        <p className="website-name">
          BERNOULLI'S PRINCIPLE
        </p>


        {/* Main Welcome */}
        <h1>
          WELCOME
        </h1>


        {/* Learning Title */}
        <h2>
          LET'S LEARN BERNOULLI'S
          <br />
          PRINCIPLE INDEPENDENTLY
        </h2>


        {/* Introduction */}
        <p className="intro">
          Explore the learning materials and resources
          prepared for your independent learning journey.
        </p>


        {/* Google Drive */}
        <a
          href="https://drive.google.com/drive/folders/1WI2KTX_YsQgRCQYGq4OclQXoMWCCj_yj?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="drive-button"
        >
          ACCESS LEARNING MATERIALS
        </a>


        {/* Designer Credit */}
        <p className="designer-credit">
          DESIGNED BY GROUP 1 BSED-SCIE 4A
        </p>

      </div>

    </main>
  );
}

export default App;