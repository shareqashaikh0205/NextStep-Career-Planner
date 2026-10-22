
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Categories() {
  const [selectedCareer, setSelectedCareer] = useState(null);
  const navigate = useNavigate();

  const categories = [
    {
      id: 1,
      name: "Technology & IT",
      icon: "💻",
      careers: [
        {
          name: "Full Stack Developer",
          icon: "💻",
          description:
            "Builds complete websites and web applications using frontend and backend technologies.",
          skills: ["HTML", "CSS", "JavaScript", "React"],
          education:
            "Computer Science, IT diploma, degree, or relevant practical training.",
          tasks:
            "Develop website interfaces, connect servers, manage data, and test applications.",
          roadmap:
            "Learn HTML and CSS → JavaScript → React → Backend basics → Build projects.",
        },
        {
          name: "Data Analyst",
          icon: "📊",
          description:
            "Analyzes data to identify patterns and help organizations make informed decisions.",
          skills: ["Excel", "SQL", "Statistics", "Power BI"],
          education:
            "Relevant diploma or degree, with practical data analysis skills.",
          tasks:
            "Clean data, prepare reports, create dashboards, and explain findings.",
          roadmap:
            "Learn Excel → SQL → Statistics → Power BI → Build analysis projects.",
        },
        {
          name: "Cybersecurity Analyst",
          icon: "🛡️",
          description:
            "Helps protect computer systems, networks, and information from cyber threats.",
          skills: [
            "Networking",
            "Linux",
            "Security Basics",
            "Problem Solving",
          ],
          education: "IT or cybersecurity training, diploma, or degree.",
          tasks:
            "Monitor security alerts, investigate suspicious activity, and help prevent attacks.",
          roadmap:
            "Learn networking → Linux → Security fundamentals → Practice labs → Build experience.",
        },
      ],
    },
    {
      id: 2,
      name: "Creative & Design",
      icon: "🎨",
      careers: [
        {
          name: "UI/UX Designer",
          icon: "🖌️",
          description:
            "Designs digital products that are attractive and easy to use.",
          skills: ["Figma", "Wireframing", "Prototyping", "User Research"],
          education:
            "Design training, diploma, degree, or a strong portfolio.",
          tasks:
            "Research users, create layouts, design prototypes, and test usability.",
          roadmap:
            "Learn design basics → Figma → Wireframes → Prototypes → Build a portfolio.",
        },
        {
          name: "Graphic Designer",
          icon: "🖼️",
          description:
            "Creates visual content for brands, advertising, and digital media.",
          skills: [
            "Typography",
            "Color Theory",
            "Photoshop",
            "Illustrator",
          ],
          education:
            "Design course, diploma, degree, or portfolio-based learning.",
          tasks:
            "Create posters, logos, social media graphics, and brand materials.",
          roadmap:
            "Learn design principles → Practice design tools → Create designs → Build a portfolio.",
        },
        {
          name: "Video Editor",
          icon: "🎬",
          description:
            "Edits video footage into engaging content for different audiences.",
          skills: ["Storytelling", "Editing", "Audio", "Visual Effects"],
          education: "Media training or practical editing experience.",
          tasks:
            "Cut footage, add sound, create transitions, and prepare final videos.",
          roadmap:
            "Learn editing basics → Practice a video editor → Create sample videos → Build a portfolio.",
        },
      ],
    },
    {
      id: 3,
      name: "Business & Management",
      icon: "📈",
      careers: [
        {
          name: "Business Analyst",
          icon: "📋",
          description:
            "Helps businesses understand problems and improve their processes.",
          skills: [
            "Communication",
            "Excel",
            "Analysis",
            "Documentation",
          ],
          education:
            "Business, IT, or related education with analytical skills.",
          tasks:
            "Gather requirements, analyze processes, document needs, and coordinate with teams.",
          roadmap:
            "Learn business basics → Excel → Requirements gathering → Practice case studies.",
        },
        {
          name: "Digital Marketing Specialist",
          icon: "📱",
          description:
            "Promotes products and services through digital channels.",
          skills: ["SEO", "Content", "Analytics", "Social Media"],
          education:
            "Marketing training, diploma, degree, or practical experience.",
          tasks:
            "Plan campaigns, manage content, monitor results, and improve reach.",
          roadmap:
            "Learn marketing basics → SEO → Social media → Analytics → Run practice campaigns.",
        },
        {
          name: "HR Executive",
          icon: "🤝",
          description:
            "Supports recruitment, employee records, and workplace activities.",
          skills: [
            "Communication",
            "Organization",
            "Recruitment",
            "Teamwork",
          ],
          education: "HR, business, or related training and education.",
          tasks:
            "Coordinate interviews, maintain records, and support employee onboarding.",
          roadmap:
            "Learn HR basics → Recruitment → Interview coordination → HR tools → Gain experience.",
        },
      ],
    },
    {
      id: 4,
      name: "Healthcare & Life Sciences",
      icon: "🩺",
      careers: [
        {
          name: "Doctor",
          icon: "🩺",
          description:
            "Diagnoses illnesses, treats patients, and supports their health.",
          skills: [
            "Medical Knowledge",
            "Communication",
            "Empathy",
            "Decision Making",
          ],
          education:
            "In India, becoming a doctor generally requires an MBBS and applicable registration.",
          tasks:
            "Examine patients, diagnose conditions, recommend treatment, and monitor recovery.",
          roadmap:
            "Meet medical admission requirements → Qualify NEET-UG → Complete MBBS → Required internship and registration.",
        },
        {
          name: "Pharmacist",
          icon: "💊",
          description:
            "Supports the safe supply and appropriate use of medicines.",
          skills: [
            "Pharmacology",
            "Accuracy",
            "Communication",
            "Medicine Safety",
          ],
          education:
            "A recognized pharmacy qualification and applicable registration requirements.",
          tasks:
            "Dispense medicines, check prescriptions, and explain safe medicine use.",
          roadmap:
            "Meet pharmacy admission requirements → Complete a recognized pharmacy qualification → Meet registration requirements.",
        },
        {
          name: "Medical Laboratory Technologist",
          icon: "🔬",
          description:
            "Performs laboratory tests that help healthcare professionals diagnose diseases.",
          skills: [
            "Lab Techniques",
            "Accuracy",
            "Biology",
            "Record Keeping",
          ],
          education:
            "Relevant recognized medical laboratory technology qualification.",
          tasks:
            "Process samples, conduct tests, record results, and follow laboratory safety procedures.",
          roadmap:
            "Study relevant science subjects → Complete recognized laboratory training → Practice lab techniques → Gain experience.",
        },
      ],
    },
    {
      id: 5,
      name: "Engineering & Manufacturing",
      icon: "⚙️",
      careers: [
        {
          name: "Mechanical Engineer",
          icon: "⚙️",
          description:
            "Designs, tests, and improves machines and mechanical systems.",
          skills: [
            "CAD",
            "Mechanics",
            "Problem Solving",
            "Mathematics",
          ],
          education:
            "Relevant mechanical engineering diploma or degree, depending on the role.",
          tasks:
            "Design components, test systems, and improve machine performance.",
          roadmap:
            "Learn mechanics → Engineering design → CAD tools → Practical projects → Build experience.",
        },
        {
          name: "Civil Engineer",
          icon: "🏗️",
          description:
            "Plans and supports the construction of buildings and infrastructure.",
          skills: [
            "AutoCAD",
            "Structural Basics",
            "Planning",
            "Mathematics",
          ],
          education:
            "Relevant civil engineering diploma or degree, depending on the role.",
          tasks:
            "Read plans, estimate materials, monitor construction, and support safety and quality.",
          roadmap:
            "Learn civil engineering basics → Technical drawing → Design tools → Site experience.",
        },
        {
          name: "Electrical Engineer",
          icon: "⚡",
          description:
            "Designs, tests, or maintains electrical systems and equipment.",
          skills: [
            "Circuit Basics",
            "Electrical Safety",
            "Testing",
            "Troubleshooting",
          ],
          education:
            "Relevant electrical engineering diploma or degree, depending on the role.",
          tasks:
            "Work with electrical designs, test equipment, and troubleshoot system issues.",
          roadmap:
            "Learn circuits → Electrical safety → Design and testing → Practical projects → Gain experience.",
        },
      ],
    },
    {
      id: 6,
      name: "Finance & Accounting",
      icon: "💰",
      careers: [
        {
          name: "Accountant",
          icon: "🧾",
          description:
            "Maintains financial records and helps prepare accurate financial reports.",
          skills: [
            "Accounting",
            "Excel",
            "Attention to Detail",
            "Tax Basics",
          ],
          education:
            "Relevant accounting education or qualification, depending on the role.",
          tasks:
            "Record transactions, reconcile accounts, and help prepare financial statements.",
          roadmap:
            "Learn accounting basics → Excel → Accounting software → Practice bookkeeping.",
        },
        {
          name: "Financial Analyst",
          icon: "📉",
          description:
            "Evaluates financial information to support business and investment decisions.",
          skills: [
            "Excel",
            "Financial Modeling",
            "Analysis",
            "Accounting",
          ],
          education:
            "Finance, accounting, economics, or related education.",
          tasks:
            "Analyze financial performance, prepare forecasts, and explain financial trends.",
          roadmap:
            "Learn finance basics → Excel → Financial statements → Modeling → Build analysis projects.",
        },
        {
          name: "Investment Banking Analyst",
          icon: "🏦",
          description:
            "Supports financial transactions, company valuations, and investment deals.",
          skills: [
            "Financial Modeling",
            "Accounting",
            "Research",
            "Communication",
          ],
          education:
            "Finance, accounting, economics, or another relevant qualification.",
          tasks:
            "Research companies, prepare financial models, and assist with transaction documents.",
          roadmap:
            "Learn accounting → Valuation → Financial modeling → Build relevant experience.",
        },
      ],
    },
  ];

  function openRoadmap(career) {
    localStorage.setItem(
      "nextStepSelectedCareer",
      JSON.stringify(career)
    );

    navigate("/roadmap");
  }

  return (
    <div className="categories-page">
      <section className="categories-hero">
        <span className="categories-badge">
          YOUR FUTURE STARTS HERE
        </span>

        <h1>Explore Career Opportunities</h1>

        <p>
          Explore six career fields, compare different roles, and
          discover the skills and learning paths for your future.
        </p>
      </section>

      <main className="categories-section">
        {categories.map((category) => (
          <section
            className="career-category-section"
            key={category.id}
          >
            <div className="career-category-heading">
              <span className="career-category-emoji">
                {category.icon}
              </span>
              <h2>{category.name}</h2>
            </div>

            <div className="career-options-grid">
              {category.careers.map((career) => (
                <div
                  className={`career-option-card ${
                    selectedCareer?.name === career.name
                      ? "active"
                      : ""
                  }`}
                  key={career.name}
                >
                  <button
                    type="button"
                    className="career-card-main"
                    onClick={() =>
                      setSelectedCareer(
                        selectedCareer?.name === career.name
                          ? null
                          : career
                      )
                    }
                  >
                    <span className="career-option-icon">
                      {career.icon}
                    </span>

                    <h3>{career.name}</h3>

                    <p>{career.description}</p>

                    <span className="career-option-link">
                      {selectedCareer?.name === career.name
                        ? "Hide details ↑"
                        : "Explore career →"}
                    </span>
                  </button>

                </div>
              ))}
            </div>

            {selectedCareer &&
              category.careers.some(
                (career) => career.name === selectedCareer.name
              ) && (
                <div className="career-detail-panel">
                  <button
                    type="button"
                    className="career-detail-close"
                    onClick={() => setSelectedCareer(null)}
                    aria-label="Close career details"
                  >
                    ✕
                  </button>

                  <h2>
                    {selectedCareer.icon} {selectedCareer.name}
                  </h2>

                  <h4>What does this professional do?</h4>
                  <p>{selectedCareer.tasks}</p>

                  <h4>Required skills</h4>

                  <div className="career-skill-tags">
                    {selectedCareer.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>

                  <h4>Education and qualifications</h4>
                  <p>{selectedCareer.education}</p>

                  <h4>Suggested learning roadmap</h4>
                  <p>{selectedCareer.roadmap}</p>

                  <button
                    type="button"
                    className="career-roadmap-btn"
                    onClick={() => openRoadmap(selectedCareer)}
                  >
                    View Full Roadmap →
                  </button>
                </div>
              )}
          </section>
        ))}
      </main>
    </div>
  );
}

export default Categories;
