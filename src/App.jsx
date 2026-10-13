import { useState } from "react";
import "./App.css";

function App() {
  const [showInstructions, setShowInstructions] = useState(false);

  return (
    <main className="landing-page">
      <div className="fluid-background" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

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

        <div className="instructions-control">
          <button
            type="button"
            className="instructions-button"
            onClick={() =>
              setShowInstructions(!showInstructions)
            }
            aria-expanded={showInstructions}
            aria-controls="general-instructions"
          >
            {showInstructions
              ? "HIDE GENERAL INSTRUCTIONS"
              : "GENERAL INSTRUCTIONS"}
          </button>
        </div>

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

            <p className="instructions-description">
              Please read the general instructions carefully
              before proceeding with the learning materials.
              Follow the guidelines provided to help you
              complete the learning activities.
              Read and answer all the activities
              and questions in the module.
              Write your answers on one (1) whole sheet of paper.
              Write your answers only, without copying the questions.
              Make sure your answers are properly
              numbered, organized, and legible.
              Review your work before submitting it.
              Submission Deadline: Saturday, October 17, 2026.
              Please ensure that your work is complete
              and submitted on or before the specified deadline.
            </p>

            <div className="download-placeholder">
              <span aria-hidden="true">↓</span>
              <p>
                Your PDF download button will be available here
                once the instructions file is ready.
              </p>
            </div>
          </section>
        )}

        <p className="designer-credit">
          DESIGNED BY GROUP 1 BSED-SCIE 4A
        </p>
      </div>
    </main>
  );
}

export default App;