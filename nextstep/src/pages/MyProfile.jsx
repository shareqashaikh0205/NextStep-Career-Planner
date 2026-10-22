import { useState } from "react";


function MyProfile({
  profile,
  updateProfile,
  savedCareers,
  completedSteps,
  recommendedCareers
}) {
  const [form, setForm] = useState(profile);
  const [message, setMessage] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value
    }));

    setMessage("");
  }

  function handleSubmit(event) {
    event.preventDefault();
    updateProfile(form);
    setMessage("Your profile has been saved successfully!");
  }

  const fieldsCompleted = [
    form.name,
    form.education,
    form.skills,
    form.goal
  ].filter((value) => value.trim() !== "").length;

  const profilePercentage = Math.round((fieldsCompleted / 4) * 100);

  return (
    <main className="container page-container">
      <section className="profile-hero">
        <div className="profile-avatar">
          {form.name.trim() ? form.name.trim().charAt(0).toUpperCase() : "👤"}
        </div>

        <div>
          <span className="eyebrow">YOUR PERSONAL DASHBOARD</span>
          <h1>{form.name ? `Welcome, ${form.name}!` : "My NextStep Profile"}</h1>
          <p>Keep your career goals, favourites and learning progress together.</p>
        </div>
      </section>

      <div className="row g-4 mt-2">
        <div className="col-lg-7">
          <section className="profile-card">
            <h3>Personal Information</h3>
            <p className="text-secondary">
              Add a few details to personalise your career journey.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label" htmlFor="profileName">Full Name</label>
                <input
                  id="profileName"
                  className="form-control"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="profileEducation">
                  Education
                </label>
                <input
                  id="profileEducation"
                  className="form-control"
                  name="education"
                  value={form.education}
                  onChange={handleChange}
                  placeholder="e.g. Diploma in Computer Engineering"
                />
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="profileSkills">
                  Skills and Interests
                </label>
                <textarea
                  id="profileSkills"
                  className="form-control"
                  rows="3"
                  name="skills"
                  value={form.skills}
                  onChange={handleChange}
                  placeholder="e.g. HTML, CSS, JavaScript, problem-solving"
                />
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="profileGoal">
                  Career Goal
                </label>
                <select
                  id="profileGoal"
                  className="form-select"
                  name="goal"
                  value={form.goal}
                  onChange={handleChange}
                >
                  <option value="">Select your goal</option>
                  <option>Full Stack Developer</option>
                  <option>Data Analyst</option>
                  <option>UI/UX Designer</option>
                  <option>Cybersecurity Analyst</option>
                  <option>Still Exploring</option>
                </select>
              </div>

              <button type="submit" className="btn btn-primary">
                Save Profile
              </button>

              {message && (
                <div className="alert alert-success mt-3 mb-0" role="status">
                  {message}
                </div>
              )}
            </form>
          </section>

          <section className="profile-card mt-4">
            <h3>Profile Completion</h3>
            <div className="d-flex justify-content-between mb-2">
              <span>Your profile</span>
              <strong>{profilePercentage}%</strong>
            </div>

            <div className="progress">
              <div
                className="progress-bar"
                style={{ width: `${profilePercentage}%` }}
              />
            </div>

            <p className="small text-secondary mt-2">
              Complete your information to keep your goals organised.
            </p>
          </section>
        </div>

        <div className="col-lg-5">
          <section className="profile-stat-grid">
            <div className="profile-stat">
              <span>⭐</span>
              <h3>{savedCareers.length}</h3>
              <p>Saved Careers</p>
            </div>

            <div className="profile-stat">
              <span>✅</span>
              <h3>{completedSteps.length}</h3>
              <p>Completed Tasks</p>
            </div>

            <div className="profile-stat">
              <span>🧭</span>
              <h3>{recommendedCareers.length}</h3>
              <p>Quiz Matches</p>
            </div>

            <div className="profile-stat">
              <span>🎯</span>
              <h3>{profile.goal ? "1" : "0"}</h3>
              <p>Career Goal Set</p>
            </div>
          </section>

          <section className="profile-card mt-4">
            <h3>Saved Careers</h3>

            {savedCareers.length > 0 ? (
              <ul className="profile-list">
                {savedCareers.map((career) => (
                  <li key={career}>⭐ {career}</li>
                ))}
              </ul>
            ) : (
              <p className="text-secondary">
                No saved careers yet. Visit Career Explorer to save one.
              </p>
            )}
          </section>

          <section className="profile-card mt-4">
            <h3>Your Quiz Matches</h3>

            {recommendedCareers.length > 0 ? (
              <ul className="profile-list">
                {recommendedCareers.slice(0, 3).map((career) => (
                  <li key={career.name}>
                    {career.icon} {career.name}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-secondary">
                Take the Career Discovery Quiz to see your matches here.
              </p>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}

export default MyProfile;