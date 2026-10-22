
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const careerResources = {
  "Full Stack Developer": [
    {
      name: "MDN Web Docs",
      description: "Learn HTML, CSS, and JavaScript.",
      url: "https://developer.mozilla.org/",
    },
    {
      name: "React Documentation",
      description: "Learn React components, props, and hooks.",
      url: "https://react.dev/learn",
    },
    {
      name: "freeCodeCamp",
      description: "Practice web development with tutorials and projects.",
      url: "https://www.freecodecamp.org/",
    },
  ],
  "Data Analyst": [
    {
      name: "Microsoft Excel Help",
      description: "Learn spreadsheet formulas and data analysis.",
      url: "https://support.microsoft.com/excel",
    },
    {
      name: "SQLBolt",
      description: "Practice SQL lessons interactively.",
      url: "https://sqlbolt.com/",
    },
    {
      name: "Microsoft Learn: Power BI",
      description: "Learn dashboards and data visualization.",
      url: "https://learn.microsoft.com/power-bi/",
    },
  ],
  "Cybersecurity Analyst": [
    {
      name: "Cisco Networking Academy",
      description: "Explore networking and cybersecurity learning.",
      url: "https://www.netacad.com/",
    },
    {
      name: "OverTheWire",
      description: "Practice security concepts through guided games.",
      url: "https://overthewire.org/wargames/",
    },
    {
      name: "TryHackMe",
      description: "Explore guided cybersecurity labs.",
      url: "https://tryhackme.com/",
    },
  ],
  "UI/UX Designer": [
    {
      name: "Figma Learn",
      description: "Learn interface design and prototyping.",
      url: "https://help.figma.com/",
    },
    {
      name: "Google Design",
      description: "Explore design principles and resources.",
      url: "https://design.google/",
    },
    {
      name: "Nielsen Norman Group",
      description: "Learn usability and user experience principles.",
      url: "https://www.nngroup.com/articles/",
    },
  ],
  "Graphic Designer": [
    {
      name: "Canva Design School",
      description: "Learn visual design and graphic composition.",
      url: "https://www.canva.com/designschool/",
    },
    {
      name: "Adobe Learn",
      description: "Explore graphic design tutorials.",
      url: "https://www.adobe.com/learn",
    },
    {
      name: "Behance",
      description: "Explore creative portfolios for inspiration.",
      url: "https://www.behance.net/",
    },
  ],
  "Video Editor": [
    {
      name: "Blackmagic Design Training",
      description: "Learn video editing through DaVinci Resolve tutorials.",
      url: "https://www.blackmagicdesign.com/products/davinciresolve/training",
    },
    {
      name: "Adobe Learn",
      description: "Explore video editing tutorials.",
      url: "https://www.adobe.com/learn",
    },
    {
      name: "YouTube Creator Academy",
      description: "Learn video storytelling and content creation.",
      url: "https://creatoracademy.youtube.com/",
    },
  ],
  "Business Analyst": [
    {
      name: "Microsoft Excel Help",
      description: "Practice spreadsheets and business reporting.",
      url: "https://support.microsoft.com/excel",
    },
    {
      name: "Atlassian Guides",
      description: "Learn about requirements, workflows, and teamwork.",
      url: "https://www.atlassian.com/agile",
    },
    {
      name: "Coursera",
      description: "Explore business analysis courses.",
      url: "https://www.coursera.org/",
    },
  ],
  "Digital Marketing Specialist": [
    {
      name: "Google Skillshop",
      description: "Explore Google Ads and analytics training.",
      url: "https://skillshop.withgoogle.com/",
    },
    {
      name: "HubSpot Academy",
      description: "Learn content marketing and digital strategy.",
      url: "https://academy.hubspot.com/",
    },
    {
      name: "Google Search Central",
      description: "Learn SEO fundamentals.",
      url: "https://developers.google.com/search",
    },
  ],
  "HR Executive": [
    {
      name: "AIHR",
      description: "Explore human resources learning resources.",
      url: "https://www.aihr.com/",
    },
    {
      name: "SHRM",
      description: "Explore HR practices and professional resources.",
      url: "https://www.shrm.org/",
    },
    {
      name: "Microsoft Learn",
      description: "Build spreadsheet and workplace productivity skills.",
      url: "https://learn.microsoft.com/",
    },
  ],
  "Doctor": [
    {
      name: "National Testing Agency",
      description: "Check official NEET examination information.",
      url: "https://exams.nta.ac.in/NEET/",
    },
    {
      name: "NCERT",
      description: "Study school-level Biology, Chemistry, and Physics.",
      url: "https://ncert.nic.in/",
    },
    {
      name: "National Medical Commission",
      description: "Check official medical education information in India.",
      url: "https://www.nmc.org.in/",
    },
  ],
  "Pharmacist": [
    {
      name: "Pharmacy Council of India",
      description: "Check pharmacy education and regulatory information.",
      url: "https://pci.nic.in/",
    },
    {
      name: "NCERT",
      description: "Revise foundational Biology and Chemistry.",
      url: "https://ncert.nic.in/",
    },
    {
      name: "PubMed",
      description: "Explore biomedical research and literature.",
      url: "https://pubmed.ncbi.nlm.nih.gov/",
    },
  ],
  "Medical Laboratory Technologist": [
    {
      name: "NCBI Bookshelf",
      description: "Explore biomedical and laboratory science references.",
      url: "https://www.ncbi.nlm.nih.gov/books/",
    },
    {
      name: "MedlinePlus",
      description: "Learn about laboratory tests and health topics.",
      url: "https://medlineplus.gov/lab-tests/",
    },
    {
      name: "NCERT",
      description: "Revise foundational Biology and Chemistry.",
      url: "https://ncert.nic.in/",
    },
  ],
  "Mechanical Engineer": [
    {
      name: "NPTEL",
      description: "Explore mechanical engineering courses.",
      url: "https://nptel.ac.in/",
    },
    {
      name: "Autodesk Learning",
      description: "Learn CAD and engineering design tools.",
      url: "https://www.autodesk.com/learn",
    },
    {
      name: "MIT OpenCourseWare",
      description: "Study engineering concepts and course materials.",
      url: "https://ocw.mit.edu/",
    },
  ],
  "Civil Engineer": [
    {
      name: "NPTEL",
      description: "Explore civil engineering lectures and courses.",
      url: "https://nptel.ac.in/",
    },
    {
      name: "Autodesk Learning",
      description: "Learn technical drawing and design tools.",
      url: "https://www.autodesk.com/learn",
    },
    {
      name: "MIT OpenCourseWare",
      description: "Study engineering fundamentals.",
      url: "https://ocw.mit.edu/",
    },
  ],
  "Electrical Engineer": [
    {
      name: "NPTEL",
      description: "Explore electrical engineering courses.",
      url: "https://nptel.ac.in/",
    },
    {
      name: "All About Circuits",
      description: "Learn and practice electrical circuit fundamentals.",
      url: "https://www.allaboutcircuits.com/",
    },
    {
      name: "MIT OpenCourseWare",
      description: "Study electrical engineering concepts.",
      url: "https://ocw.mit.edu/",
    },
  ],
  "Accountant": [
    {
      name: "Tally Education",
      description: "Explore accounting software and bookkeeping training.",
      url: "https://tallyeducation.com/",
    },
    {
      name: "Microsoft Excel Help",
      description: "Practice formulas, spreadsheets, and reports.",
      url: "https://support.microsoft.com/excel",
    },
    {
      name: "ICAI",
      description: "Explore accounting resources and professional guidance.",
      url: "https://www.icai.org/",
    },
  ],
  "Financial Analyst": [
    {
      name: "Corporate Finance Institute",
      description: "Explore financial analysis and modeling resources.",
      url: "https://corporatefinanceinstitute.com/",
    },
    {
      name: "Microsoft Excel Help",
      description: "Practice financial calculations and spreadsheets.",
      url: "https://support.microsoft.com/excel",
    },
    {
      name: "Investopedia",
      description: "Learn financial terms and market fundamentals.",
      url: "https://www.investopedia.com/",
    },
  ],
  "Investment Banking Analyst": [
    {
      name: "Corporate Finance Institute",
      description: "Learn financial modeling and valuation fundamentals.",
      url: "https://corporatefinanceinstitute.com/",
    },
    {
      name: "Investopedia",
      description: "Understand finance and investment terminology.",
      url: "https://www.investopedia.com/",
    },
    {
      name: "Aswath Damodaran's Resources",
      description: "Study valuation concepts and financial analysis.",
      url: "https://pages.stern.nyu.edu/~adamodar/",
    },
  ],
};

const generalResources = [
  {
    name: "Coursera",
    description: "Explore courses related to your chosen career.",
    url: "https://www.coursera.org/",
  },
  {
    name: "YouTube",
    description: "Find tutorials and practical demonstrations.",
    url: "https://www.youtube.com/",
  },
  {
    name: "Google Search",
    description: "Find additional learning materials and references.",
    url: "https://www.google.com/",
  },
];

function CareerRoadmap() {
  const [career, setCareer] = useState(null);

  useEffect(() => {
    function loadCareer() {
      const savedCareer = localStorage.getItem(
        "nextStepSelectedCareer"
      );

      if (savedCareer) {
        try {
          setCareer(JSON.parse(savedCareer));
        } catch {
          setCareer(null);
        }
      } else {
        setCareer(null);
      }
    }

    loadCareer();

    window.addEventListener("storage", loadCareer);

    return () => {
      window.removeEventListener("storage", loadCareer);
    };
  }, []);

  if (!career) {
    return (
      <div className="roadmap-page">
        <section className="roadmap-empty">
          <span>🧭</span>
          <h1>No Career Selected Yet</h1>
          <p>
            First select a career from Categories to see its
            personalized learning roadmap and study resources.
          </p>
          <Link to="/categories" className="roadmap-primary-btn">
            Explore Careers →
          </Link>
        </section>
      </div>
    );
  }

  const roadmapStages = career.roadmap
    .split("→")
    .map((stage) => stage.trim())
    .filter(Boolean);

  const resources = careerResources[career.name] || generalResources;

  const weeklyPlan = [
    {
      day: "Monday",
      task: `Learn the basics of ${roadmapStages[0] || career.name}.`,
    },
    {
      day: "Tuesday",
      task: "Study notes and follow a beginner tutorial.",
    },
    {
      day: "Wednesday",
      task: `Practice skills related to ${career.name}.`,
    },
    {
      day: "Thursday",
      task: "Continue learning and revise important concepts.",
    },
    {
      day: "Friday",
      task: "Complete a small practical exercise.",
    },
    {
      day: "Saturday",
      task: "Work on a mini-project or practical activity.",
    },
    {
      day: "Sunday",
      task: "Review the week's learning and plan the next week.",
    },
  ];

  return (
    <div className="roadmap-page">
      <section className="roadmap-hero">
        <span className="roadmap-badge">YOUR PERSONAL CAREER PLAN</span>

        <div className="roadmap-hero-icon">{career.icon}</div>

        <h1>{career.name} Roadmap</h1>

        <p>{career.description}</p>

        <div className="roadmap-hero-note">
          <span>🎯</span>
          <span>
            Follow each stage at your own pace. Learn, practice,
            and build your skills step by step.
          </span>
        </div>
      </section>

      <main className="roadmap-content">
        <section className="roadmap-section">
          <div className="roadmap-section-heading">
            <span className="roadmap-eyebrow">YOUR LEARNING PATH</span>
            <h2>Step-by-Step Roadmap</h2>
            <p>
              Complete these learning stages in order. Adjust the
              duration according to your experience and available time.
            </p>
          </div>

          <div className="roadmap-timeline">
            {roadmapStages.map((stage, index) => (
              <div className="roadmap-stage" key={stage + index}>
                <div className="roadmap-stage-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="roadmap-stage-card">
                  <span className="roadmap-stage-label">
                    STAGE {index + 1}
                  </span>

                  <h3>{stage}</h3>

                  <p>
                    {index === 0
                      ? "Build your foundation and understand the important concepts."
                      : index === roadmapStages.length - 1
                      ? "Apply what you have learned and demonstrate your skills through practical work."
                      : "Study the key concepts, follow guided lessons, and practise what you learn."}
                  </p>

                  <span className="roadmap-stage-tip">
                    <strong>Suggested focus:</strong>{" "}
                    {index === roadmapStages.length - 1
                      ? "Practical work and portfolio"
                      : "Learn, practise, and revise"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="roadmap-section">
          <div className="roadmap-section-heading">
            <span className="roadmap-eyebrow">LEARNING RESOURCES</span>
            <h2>Study Materials & References</h2>
            <p>
              Start with these resources to learn the skills needed
              for your selected career.
            </p>
          </div>

          <div className="roadmap-resource-grid">
            {resources.map((resource, index) => (
              <article className="roadmap-resource-card" key={resource.name}>
                <div className="roadmap-resource-number">
                  0{index + 1}
                </div>

                <h3>{resource.name}</h3>

                <p>{resource.description}</p>

                <a
                  href={resource.url}
                  target="_blank"
                  rel="noreferrer"
                  className="roadmap-resource-link"
                >
                  Open Resource ↗
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="roadmap-section">
          <div className="roadmap-section-heading">
            <span className="roadmap-eyebrow">YOUR WEEKLY ROUTINE</span>
            <h2>Suggested Study Timetable</h2>
            <p>
              A simple routine you can follow alongside your regular
              classes or other responsibilities.
            </p>
          </div>

          <div className="roadmap-timetable">
            {weeklyPlan.map((item) => (
              <div className="roadmap-timetable-row" key={item.day}>
                <div className="roadmap-day">{item.day}</div>
                <p>{item.task}</p>
                <span className="roadmap-duration">1–2 hours</span>
              </div>
            ))}
          </div>
        </section>

        <section className="roadmap-section">
          <div className="roadmap-tips-card">
            <span className="roadmap-eyebrow">A FEW HELPFUL TIPS</span>
            <h2>Make Your Learning Count</h2>

            <ul>
              <li>Study consistently instead of trying to learn everything at once.</li>
              <li>Practise each skill rather than only watching tutorials.</li>
              <li>Keep your notes and useful learning links organised.</li>
              <li>Build practical work to demonstrate your progress.</li>
            </ul>
          </div>
        </section>

        <div className="roadmap-bottom-action">
          <Link to="/categories" className="roadmap-secondary-btn">
            ← Back to Categories
          </Link>
        </div>
      </main>
    </div>
  );
}

export default CareerRoadmap;
