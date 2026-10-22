
import { useState } from "react";
import { Link } from "react-router-dom";

const questions = [
  {
    question: "Which activity interests you the most?",
    options: [
      { label: "Building websites and applications", career: "Full Stack Developer" },
      { label: "Understanding data and solving problems", career: "Data Analyst" },
      { label: "Designing creative digital experiences", career: "UI/UX Designer" },
      { label: "Protecting systems and information", career: "Cybersecurity Analyst" },
      { label: "Helping people learn and grow", career: "Teacher" },
      { label: "Understanding business and management", career: "Business Analyst" }
    ]
  },
  {
    question: "Which task would you enjoy doing?",
    options: [
      { label: "Writing code and fixing errors", career: "Full Stack Developer" },
      { label: "Finding patterns in information", career: "Data Analyst" },
      { label: "Improving how an app looks and feels", career: "UI/UX Designer" },
      { label: "Finding weaknesses in digital security", career: "Cybersecurity Analyst" },
      { label: "Explaining ideas and helping others", career: "Teacher" },
      { label: "Planning projects and solving business problems", career: "Business Analyst" }
    ]
  },
  {
    question: "Which skill would you most like to develop?",
    options: [
      { label: "Programming and web development", career: "Full Stack Developer" },
      { label: "Data analysis and logical thinking", career: "Data Analyst" },
      { label: "Visual design and creativity", career: "UI/UX Designer" },
      { label: "Network security and risk awareness", career: "Cybersecurity Analyst" },
      { label: "Communication and teaching", career: "Teacher" },
      { label: "Leadership and business strategy", career: "Business Analyst" }
    ]
  },
  {
    question: "What kind of challenge sounds exciting?",
    options: [
      { label: "Creating a useful digital product", career: "Full Stack Developer" },
      { label: "Using facts to make decisions", career: "Data Analyst" },
      { label: "Making technology easier to use", career: "UI/UX Designer" },
      { label: "Preventing digital attacks", career: "Cybersecurity Analyst" },
      { label: "Helping someone understand a difficult topic", career: "Teacher" },
      { label: "Finding ways to improve a business", career: "Business Analyst" }
    ]
  },
  {
    question: "Which work style suits you best?",
    options: [
      { label: "Building and testing solutions", career: "Full Stack Developer" },
      { label: "Researching and interpreting results", career: "Data Analyst" },
      { label: "Designing and testing creative ideas", career: "UI/UX Designer" },
      { label: "Investigating problems and reducing risks", career: "Cybersecurity Analyst" },
      { label: "Working with and guiding people", career: "Teacher" },
      { label: "Organising tasks and making decisions", career: "Business Analyst" }
    ]
  }
];

const careerInfo = [
  {
    name: "Full Stack Developer",
    icon: "💻",
    description: "Build websites and applications using frontend and backend technologies.",
    skills: "HTML, CSS, JavaScript, React and databases",
    category: "Technology"
  },
  {
    name: "Data Analyst",
    icon: "📊",
    description: "Study data, discover patterns and help organisations make informed decisions.",
    skills: "Excel, SQL, statistics and data visualisation",
    category: "Business & Data"
  },
  {
    name: "UI/UX Designer",
    icon: "🎨",
    description: "Create digital products that are useful, attractive and easy to navigate.",
    skills: "Wireframing, prototyping, design principles and user research",
    category: "Creative"
  },
  {
    name: "Cybersecurity Analyst",
    icon: "🔐",
    description: "Help protect digital systems, networks and information from security threats.",
    skills: "Networking, security fundamentals and risk assessment",
    category: "Security"
  },
  {
    name: "Teacher",
    icon: "📚",
    description: "Help students develop knowledge, confidence and practical skills.",
    skills: "Communication, subject knowledge and lesson planning",
    category: "Education"
  },
  {
    name: "Business Analyst",
    icon: "📈",
    description: "Understand business needs and help teams improve processes and decisions.",
    skills: "Problem-solving, communication, research and business analysis",
    category: "Business"
  }
];

const features = [
  {
    icon: "🧭",
    number: "01",
    title: "Discover Your Direction",
    description: "Answer a short, preference-based quiz to explore career paths that may interest you.",
    link: "#career-quiz",
    linkText: "Take the quiz"
  },
  {
    icon: "🗂️",
    number: "02",
    title: "Explore Career Categories",
    description: "Browse six career fields and discover different roles, skills and opportunities.",
    link: "/categories",
    linkText: "Browse categories"
  },
  {
    icon: "🗺️",
    number: "03",
    title: "Build Your Roadmap",
    description: "Turn your career interests into manageable learning goals and track your progress.",
    link: "/roadmap",
    linkText: "View roadmap"
  }
];

function CareerDiscovery({ setRecommendedCareers }) {
  const [started, setStarted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [results, setResults] = useState(null);

  function beginQuiz() {
    setStarted(true);
    setCurrent(0);
    setAnswers([]);
    setResults(null);
    document.getElementById("career-quiz")?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }

  function selectAnswer(career) {
    const updatedAnswers = [...answers];
    updatedAnswers[current] = career;
    setAnswers(updatedAnswers);
  }

  function finishQuiz() {
    const scores = careerInfo
      .map((career) => ({
        ...career,
        score: answers.filter((answer) => answer === career.name).length
      }))
      .sort((a, b) => b.score - a.score);

    setResults(scores);
    setRecommendedCareers(scores);
  }

  function restartQuiz() {
    setStarted(false);
    setCurrent(0);
    setAnswers([]);
    setResults(null);
    setRecommendedCareers([]);

    document.getElementById("career-quiz")?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }

  return (
    <main className="discovery-home">

      {/* HERO SECTION */}
      <section className="discovery-hero">
        <div className="discovery-hero-content">
          <span className="discovery-eyebrow">
            YOUR FUTURE, YOUR CHOICE
          </span>

          <h1>
            Not sure what comes next?
            <span> Let's find your direction.</span>
          </h1>

          <p>
            Every career journey begins with a question. Discover different
            career possibilities, understand the skills they need and find
            practical steps to start building your future with NextStep.
          </p>

          <div className="discovery-hero-actions">
            <button
              type="button"
              className="discovery-primary-btn"
              onClick={beginQuiz}
            >
              Discover My Career →
            </button>

            <Link to="/categories" className="discovery-secondary-btn">
              Explore Career Categories
            </Link>
          </div>

          <div className="discovery-hero-points">
            <span>✓ Beginner-friendly guidance</span>
            <span>✓ Multiple career fields</span>
            <span>✓ Learn at your own pace</span>
          </div>
        </div>

        <div className="discovery-hero-visual">
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=85"
            alt="Young professionals discussing ideas and planning their careers"
          />

          <div className="discovery-image-card">
            <span className="discovery-image-icon">🚀</span>
            <div>
              <strong>Your next chapter starts here</strong>
              <p>Explore. Learn. Take your next step.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CAREER QUIZ — DIRECTLY AFTER HERO */}
      <section className="discovery-quiz-section" id="career-quiz">
        <div className="discovery-section-heading">
          <span className="discovery-eyebrow">START WITH YOURSELF</span>
          <h2>Which career could suit you?</h2>
          <p>
            Answer five quick questions about your interests and preferences.
            We'll show you which of our example career paths received the most
            matches from your answers.
          </p>
        </div>

        {!started && !results && (
          <div className="discovery-quiz-intro">
            <div className="discovery-quiz-intro-icon">✨</div>
            <div className="discovery-quiz-intro-content">
              <h3>A small step towards a clearer direction</h3>
              <p>
                No complicated tests or previous experience required. Just
                choose the answers that feel closest to you.
              </p>
              <span>5 questions · 6 example career paths</span>
            </div>
            <button
              type="button"
              className="discovery-primary-btn"
              onClick={() => setStarted(true)}
            >
              Start the Quiz →
            </button>
          </div>
        )}

        {started && !results && (
          <div className="discovery-quiz-panel">
            <div className="discovery-quiz-progress-heading">
              <span>Question {current + 1} of {questions.length}</span>
              <span>
                {Math.round(((current + 1) / questions.length) * 100)}%
              </span>
            </div>

            <div
              className="discovery-quiz-progress"
              role="progressbar"
              aria-valuenow={current + 1}
              aria-valuemin={1}
              aria-valuemax={questions.length}
              aria-label="Quiz progress"
            >
              <div
                className="discovery-quiz-progress-bar"
                style={{
                  width: `${((current + 1) / questions.length) * 100}%`
                }}
              />
            </div>

            <h3>{questions[current].question}</h3>
            <p className="discovery-quiz-helper">
              Choose one answer that best describes your interests.
            </p>

            <div className="discovery-quiz-options">
              {questions[current].options.map((option, index) => (
                <button
                  type="button"
                  key={option.career}
                  className={`discovery-answer-option ${
                    answers[current] === option.career ? "selected" : ""
                  }`}
                  aria-pressed={answers[current] === option.career}
                  onClick={() => selectAnswer(option.career)}
                >
                  <span className="discovery-answer-letter">
                    {String.fromCharCode(65 + index)}
                  </span>
                  {option.label}
                </button>
              ))}
            </div>

            <div className="discovery-quiz-navigation">
              <button
                type="button"
                className="discovery-secondary-btn"
                disabled={current === 0}
                onClick={() => setCurrent(current - 1)}
              >
                ← Previous
              </button>

              {current < questions.length - 1 ? (
                <button
                  type="button"
                  className="discovery-primary-btn"
                  disabled={!answers[current]}
                  onClick={() => setCurrent(current + 1)}
                >
                  Next Question →
                </button>
              ) : (
                <button
                  type="button"
                  className="discovery-primary-btn"
                  disabled={answers.filter(Boolean).length !== questions.length}
                  onClick={finishQuiz}
                >
                  Show My Matches →
                </button>
              )}
            </div>
          </div>
        )}

        {results && (
          <div className="discovery-results">
            <span className="discovery-eyebrow">YOUR QUIZ RESULTS</span>
            <h3>Career paths to explore</h3>
            <p>
              These are starting points based on your selected answers, not a
              final judgement about your abilities or future.
            </p>

            <div className="discovery-results-grid">
              {results.slice(0, 3).map((career, index) => (
                <article className="discovery-result-card" key={career.name}>
                  <span className="discovery-result-icon">{career.icon}</span>
                  <span className="discovery-result-label">
                    {index === 0 ? "TOP MATCH" : `MATCH ${index + 1}`}
                  </span>
                  <h4>{career.name}</h4>
                  <p>{career.description}</p>
                  <p>
                    <strong>Skills to explore:</strong> {career.skills}
                  </p>
                  <p>
                    <strong>Preference matches:</strong> {career.score} / {questions.length}
                  </p>
                </article>
              ))}
            </div>

            <div className="discovery-results-actions">
              <Link to="/categories" className="discovery-primary-btn">
                Explore All Categories →
              </Link>
              <Link to="/explorer" className="discovery-secondary-btn">
                Explore Career Details
              </Link>
              <button
                type="button"
                className="discovery-secondary-btn"
                onClick={restartQuiz}
              >
                Retake Quiz
              </button>
            </div>
          </div>
        )}
      </section>

      {/* INTRODUCTION TO NEXTSTEP */}
      <section className="discovery-intro-section">
        <span className="discovery-eyebrow">WELCOME TO NEXTSTEP</span>
        <h2>Your career journey doesn't need to feel confusing.</h2>
        <p>
          Choosing a career can feel overwhelming when there are so many
          options. NextStep brings career discovery, career information,
          planning tools and interactive activities together in one place.
          Use them to research possibilities, identify skills to learn and
          decide what you would like to explore next.
        </p>
      </section>

      {/* THREE DIFFERENT FEATURES */}
      <section className="discovery-features-section">
        <div className="discovery-section-heading">
          <span className="discovery-eyebrow">YOUR JOURNEY</span>
          <h2>From curiosity to action</h2>
          <p>
            Get to know yourself, explore your options and take practical steps
            towards your goals.
          </p>
        </div>

        <div className="discovery-features-grid">
          {features.map((feature) => (
            <article className="discovery-feature-card" key={feature.number}>
              <div className="discovery-feature-top">
                <span className="discovery-feature-icon">{feature.icon}</span>
                <span className="discovery-feature-number">
                  {feature.number}
                </span>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>

              {feature.link.startsWith("#") ? (
                <button
                  type="button"
                  className="discovery-text-link"
                  onClick={beginQuiz}
                >
                  {feature.linkText} →
                </button>
              ) : (
                <Link to={feature.link} className="discovery-text-link">
                  {feature.linkText} →
                </Link>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* CATEGORY PREVIEW */}
      <section className="discovery-categories-section">
        <div className="discovery-section-heading">
          <span className="discovery-eyebrow">EXPLORE POSSIBILITIES</span>
          <h2>There is more than one path to success.</h2>
          <p>
            Discover career fields that connect with different interests,
            strengths and ways of working.
          </p>
        </div>

        <div className="discovery-category-grid">
          <article className="discovery-category-card">
            <span>💻</span>
            <h3>Technology</h3>
            <p>Explore software, web development and emerging technologies.</p>
          </article>

          <article className="discovery-category-card">
            <span>📊</span>
            <h3>Business & Data</h3>
            <p>Explore analysis, business decisions and problem-solving.</p>
          </article>

          <article className="discovery-category-card">
            <span>🎨</span>
            <h3>Creative Careers</h3>
            <p>Explore design, visual communication and creative work.</p>
          </article>

          <article className="discovery-category-card">
            <span>🔐</span>
            <h3>Security</h3>
            <p>Explore cybersecurity, digital safety and risk prevention.</p>
          </article>

          <article className="discovery-category-card">
            <span>📚</span>
            <h3>Education</h3>
            <p>Explore teaching, training and helping others learn.</p>
          </article>

          <article className="discovery-category-card">
            <span>🌱</span>
            <h3>More Possibilities</h3>
            <p>Discover additional fields and career options on our Categories page.</p>
          </article>
        </div>

        <div className="discovery-category-action">
          <Link to="/categories" className="discovery-primary-btn">
            View All Career Categories →
          </Link>
        </div>
      </section>

      {/* ABOUT THE WEBSITE */}
      <section className="discovery-about-section">
        <div className="discovery-about-image">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=85"
            alt="Students learning together and discussing their future goals"
            loading="lazy"
          />
          <div className="discovery-about-image-caption">
            Your interests today can inspire the skills you build tomorrow.
          </div>
        </div>

        <div className="discovery-about-content">
          <span className="discovery-eyebrow">MORE THAN A CAREER LIST</span>
          <h2>Make informed choices, one step at a time.</h2>
          <p>
            A career decision involves more than choosing a job title. It also
            means understanding the work involved, the skills required, the
            learning options available and whether a field fits your personal
            interests and circumstances.
          </p>

          <ul className="discovery-benefits-list">
            <li>
              <span>✓</span>
              <div>
                <strong>Learn about different roles</strong>
                <p>Understand what careers involve and which skills they use.</p>
              </div>
            </li>
            <li>
              <span>✓</span>
              <div>
                <strong>Plan your learning journey</strong>
                <p>Break a big goal into smaller, practical learning steps.</p>
              </div>
            </li>
            <li>
              <span>✓</span>
              <div>
                <strong>Track your own progress</strong>
                <p>Save career interests and revisit your goals through your profile.</p>
              </div>
            </li>
          </ul>

          <Link to="/profile" className="discovery-primary-btn">
            Set Up My Profile →
          </Link>
        </div>
      </section>

      {/* HOW NEXTSTEP WORKS */}
      <section className="discovery-steps-section">
        <div className="discovery-section-heading">
          <span className="discovery-eyebrow">YOUR NEXT THREE STEPS</span>
          <h2>A simple way to get started</h2>
          <p>You don't need to have your entire future figured out today.</p>
        </div>

        <div className="discovery-steps-grid">
          <article className="discovery-step-card">
            <span className="discovery-step-number">01</span>
            <h3>Discover</h3>
            <p>Reflect on your interests and use the quiz as a starting point.</p>
          </article>

          <article className="discovery-step-card">
            <span className="discovery-step-number">02</span>
            <h3>Research</h3>
            <p>Compare career paths, understand their skills and explore alternatives.</p>
          </article>

          <article className="discovery-step-card">
            <span className="discovery-step-number">03</span>
            <h3>Take Action</h3>
            <p>Choose a skill to practise, follow a roadmap and review your progress.</p>
          </article>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="discovery-final-cta">
        <div>
          <span className="discovery-eyebrow">YOUR FUTURE STARTS WITH ONE STEP</span>
          <h2>You don't need every answer. Just a place to begin.</h2>
          <p>
            Explore your interests today and give yourself room to discover
            new possibilities.
          </p>
        </div>

        <button
          type="button"
          className="discovery-primary-btn"
          onClick={beginQuiz}
        >
          Find My NextStep →
        </button>
      </section>

    </main>
  );
}

export default CareerDiscovery;
