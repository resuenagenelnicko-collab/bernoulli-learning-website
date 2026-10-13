import { useState } from "react";
import "./App.css";

function App() {
  const [showInstructions, setShowInstructions] = useState(false);

  return (
    <main className="landing-page">
      {/* Animated fluid background */}
      <div className="fluid-background" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Main website content */}
      <div className="content">
        <p className="website-name">BERNOULLI'S PRINCIPLE</p>

        <h1>WELCOME</h1>

        <h2>
          LET'S LEARN BERNOULLI'S
          <br />
          PRINCIPLE INDEPENDENTLY
        </h2>

        <p className="intro">
          Explore the learning materials and resources
          prepared for your independent learning journey.
        </p>

        {/* General Instructions toggle button */}
        <div className="instructions-control">
          <button
            type="button"
            className="instructions-button"
            onClick={() =>
              setShowInstructions((previousState) => !previousState)
            }
            aria-expanded={showInstructions}
            aria-controls="general-instructions"
          >
            {showInstructions
              ? "HIDE GENERAL INSTRUCTIONS"
              : "GENERAL INSTRUCTIONS"}
          </button>
        </div>

        {/* General Instructions section */}
        {showInstructions && (
          <section
            id="general-instructions"
            className="instructions-section"
          >
            <div className="instructions-heading">
              <span className="instructions-label">
                STUDENT GUIDE
              </span>

              <h3>GENERAL INSTRUCTIONS</h3>
            </div>

            <div className="instructions-description">
              <p>
                Please read the general instructions carefully
                before proceeding with the learning materials.
                Follow the guidelines provided to help you
                complete the learning activities.
              </p>

              <ol>
                <li>
                  Read and answer all the activities and
                  questions in the module.
                </li>
                <li>
                  Write your answers on one (1) whole sheet
                  of paper.
                </li>
                <li>
                  Write your answers only, without copying
                  the questions.
                </li>
                <li>
                  Make sure your answers are properly numbered,
                  organized, and legible.
                </li>
                <li>
                  Review your work before submitting it.
                </li>
              </ol>

              <p>
                <strong>Submission Deadline:</strong>{" "}
                Saturday, October 17, 2026.
              </p>

              <p>
                Please ensure that your work is complete and
                submitted on or before the specified deadline.
              </p>
            </div>

            {/* Download General Instructions PDF */}
            <a
              href="/files/general-instructions.pdf"
              download="General-Instructions.pdf"
              className="download-button"
            >
              <span aria-hidden="true">↓</span>
              DOWNLOAD GENERAL INSTRUCTIONS (PDF)
            </a>
          </section>
        )}

        {/* Designer credit */}
        <p className="designer-credit">
          DESIGNED BY GROUP 1 BSED-SCIE 4A
        </p>
      </div>
    </main>
  );
}

export default App;