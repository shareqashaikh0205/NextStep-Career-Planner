
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <span className="about-tag">ABOUT NEXTSTEP</span>

          <h1>
            Discover Your Path.
            <br />
            <span>Build Your Future.</span>
          </h1>

          <p>
            Your career journey starts with one step. NextStep helps
            you explore career opportunities, understand your interests,
            and create a clear path toward your future.
          </p>

          <Link to="/categories" className="about-btn">
            Explore Careers <span>→</span>
          </Link>
        </div>

        <div className="about-hero-visual">
          <div className="about-visual-circle">
            <div className="about-visual-icon">✦</div>
          </div>

          <div className="about-floating-card about-card-top">
            <span>🎯</span>
            <div>
              <strong>Find Your Direction</strong>
              <small>Discover new possibilities</small>
            </div>
          </div>

          <div className="about-floating-card about-card-bottom">
            <span>🚀</span>
            <div>
              <strong>Build Your Future</strong>
              <small>One step at a time</small>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-intro">
        <div className="about-section-heading">
          <span className="about-tag">WHO WE ARE</span>
          <h2>Your Future Deserves a Plan</h2>
        </div>

        <p>
          Choosing a career can feel confusing when there are so many
          options available. NextStep is designed to make that journey
          easier by bringing career discovery, guidance, and learning
          resources together in one place.
        </p>

        <p>
          Whether you are a student exploring your interests or someone
          planning a new direction, NextStep gives you a starting point
          to learn about careers and work toward your goals.
        </p>
      </section>

      {/* Mission and Vision */}
      <section className="about-purpose">
        <div className="about-purpose-card">
          <div className="about-purpose-icon">🎯</div>
          <h3>Our Mission</h3>
          <p>
            To make career exploration simpler and more accessible by
            helping users discover opportunities, understand required
            skills, and plan their learning journey.
          </p>
        </div>

        <div className="about-purpose-card">
          <div className="about-purpose-icon">🌟</div>
          <h3>Our Vision</h3>
          <p>
            To encourage people to make informed career decisions,
            develop useful skills, and move toward a future that matches
            their interests and ambitions.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="about-features">
        <div className="about-section-heading">
          <span className="about-tag">WHAT YOU CAN DO</span>
          <h2>Everything Starts With NextStep</h2>
          <p>
            Explore helpful tools designed to guide your career journey.
          </p>
        </div>

        <div className="about-feature-grid">
          <div className="about-feature-card">
            <div className="about-feature-icon">🧭</div>
            <h3>Career Discovery</h3>
            <p>
              Explore different career paths and find opportunities
              that match your interests.
            </p>
          </div>

          <div className="about-feature-card">
            <div className="about-feature-icon">📚</div>
            <h3>Career Roadmaps</h3>
            <p>
              Understand learning stages, useful study materials,
              and resources for your chosen career.
            </p>
          </div>

          <div className="about-feature-card">
            <div className="about-feature-icon">💡</div>
            <h3>Decision Support</h3>
            <p>
              Think through career choices and understand different
              possibilities before taking your next step.
            </p>
          </div>

          <div className="about-feature-card">
            <div className="about-feature-icon">🎮</div>
            <h3>Learn Through Play</h3>
            <p>
              Use interactive activities to make career learning
              more interesting and engaging.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="about-cta">
        <span className="about-tag">YOUR JOURNEY BEGINS HERE</span>
        <h2>Small Steps. Bigger Possibilities.</h2>
        <p>
          You do not need to have everything figured out today.
          Start exploring, keep learning, and take your next step
          with confidence.
        </p>

        <Link to="/categories" className="about-btn">
          Find Your Career <span>→</span>
        </Link>
      </section>
    </div>
  );
}

export default AboutUs;
