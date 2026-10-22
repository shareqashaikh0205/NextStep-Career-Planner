
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import CareerDiscovery from "./pages/CareerDiscovery";
import Categories from "./pages/Categories";
import CareerRoadmap from "./pages/CareerRoadmap";
import MyProfile from "./pages/MyProfile";
import GameZone from "./pages/GameZone";
import AboutUs from "./pages/Aboutus";
import ScrollToTop from "./ScrollToTop";

import "./App.css";

// Safely read saved data from localStorage
function getSavedData(key, defaultValue) {
  try {
    const savedData = localStorage.getItem(key);
    return savedData ? JSON.parse(savedData) : defaultValue;
  } catch {
    return defaultValue;
  }
}

function App() {
  // User profile
  const [profile, setProfile] = useState(() =>
    getSavedData("nextStepProfile", {
      name: "",
      education: "",
      skills: "",
      goal: "",
    })
  );

  // Saved careers
  const [savedCareers, setSavedCareers] = useState(() =>
    getSavedData("nextStepSavedCareers", [])
  );

  // Career selected from Categories for its roadmap
  const [selectedCareer, setSelectedCareer] = useState(() =>
    getSavedData("nextStepSelectedCareer", null)
  );

  // Career quiz recommendations
  const [recommendedCareers, setRecommendedCareers] = useState([]);

  // Roadmap progress
  const [completedSteps, setCompletedSteps] = useState(() =>
    getSavedData("nextStepCompletedSteps", [])
  );

  // Update profile information
  function updateProfile(newProfile) {
    setProfile(newProfile);

    localStorage.setItem(
      "nextStepProfile",
      JSON.stringify(newProfile)
    );
  }

  // Save or remove a career
  function toggleSavedCareer(careerName) {
    const updated = savedCareers.includes(careerName)
      ? savedCareers.filter((name) => name !== careerName)
      : [...savedCareers, careerName];

    setSavedCareers(updated);

    localStorage.setItem(
      "nextStepSavedCareers",
      JSON.stringify(updated)
    );
  }

  // Select a career for the roadmap
  function updateSelectedCareer(career) {
    setSelectedCareer(career);

    localStorage.setItem(
      "nextStepSelectedCareer",
      JSON.stringify(career)
    );
  }

  // Mark roadmap steps as complete or incomplete
  function toggleStep(stepName) {
    const updated = completedSteps.includes(stepName)
      ? completedSteps.filter((step) => step !== stepName)
      : [...completedSteps, stepName];

    setCompletedSteps(updated);

    localStorage.setItem(
      "nextStepCompletedSteps",
      JSON.stringify(updated)
    );
  }

  return (
    <>
      {/* Scroll to top whenever the route changes */}
      <ScrollToTop />

      {/* Navigation Bar */}
      <Navbar />

      {/* Application Routes */}
      <Routes>
        {/* Home page and career discovery quiz */}
        <Route
          path="/"
          element={
            <CareerDiscovery
              setRecommendedCareers={setRecommendedCareers}
            />
          }
        />

        {/* Six career categories */}
        <Route
          path="/categories"
          element={
            <Categories
              selectedCareer={selectedCareer}
              updateSelectedCareer={updateSelectedCareer}
            />
          }
        />

        {/* Roadmap for the selected career */}
        <Route
          path="/roadmap"
          element={
            <CareerRoadmap
              selectedCareer={selectedCareer}
              completedSteps={completedSteps}
              toggleStep={toggleStep}
            />
          }
        />

        {/* User profile and progress */}
        <Route
          path="/profile"
          element={
            <MyProfile
              profile={profile}
              updateProfile={updateProfile}
              savedCareers={savedCareers}
              completedSteps={completedSteps}
              recommendedCareers={recommendedCareers}
            />
          }
        />

        {/* Mini-games */}
        <Route
          path="/games"
          element={<GameZone />}
        />

        {/* About Us */}
        <Route
          path="/about"
          element={<AboutUs />}
        />

        {/* Page not found */}
        <Route
          path="*"
          element={
            <div className="container page-container text-center py-5">
              <h2>Page not found</h2>
              <p>
                Use the navigation menu to explore NextStep.
              </p>
            </div>
          }
        />
      </Routes>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
