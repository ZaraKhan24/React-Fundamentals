
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  // Counter states
  const [count, setCount] = useState(0);
  const [totalClicks, setTotalClicks] = useState(0);

  // useEffect notification states
  const [showMessage, setShowMessage] = useState(false);
  const [actionVersion, setActionVersion] = useState(0);

  // useEffect Hook with dependency array
  useEffect(() => {
    // Do not show message on initial page load
    if (actionVersion === 0) return;

    console.log('Component ReRendered');

    // Show notification
    setShowMessage(true);

    // Hide notification after 5 seconds
    const timer = setTimeout(() => {
      setShowMessage(false);
    }, 2000);

    // Clear previous timer
    return () => clearTimeout(timer);

  }, [count, totalClicks, actionVersion]);

  // Counter functions
  const increment = (value = 1) => {
    setCount((prev) => Math.min(prev + value, 100));
    setTotalClicks((prev) => prev + 1);
    setActionVersion((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => Math.max(prev - 1, 0));
    setTotalClicks((prev) => prev + 1);
    setActionVersion((prev) => prev + 1);
  };

  const reset = () => {
    setCount(0);
    setTotalClicks(0);
    setActionVersion((prev) => prev + 1);
  };

  return (
    <main className="dashboard">

      {/* Navigation */}
      <nav className="navbar">
        <a href="#home" className="brand">
          <span className="brand-icon">R</span>
          React<span>Space</span>
        </a>

        <span className="nav-label">
          FUNDAMENTALS PROJECT
        </span>

        <div className="nav-status">
          <span className="status-dot"></span>
          Learning React
        </div>
      </nav>

      {/* Welcome Section */}
      <section className="welcome-section" id="home">
        <div>
          <span className="eyebrow">MY PERSONAL DASHBOARD</span>

          <h1>
            Hello, <span>Welcome!</span>
          </h1>

          <p>
            Exploring React, building skills and learning
            something new every day.
          </p>
        </div>

        <div className="welcome-decoration">
          {'</>'}
        </div>
      </section>

      {/* Main Layout */}
      <div className="content-grid">

        {/* Profile Card */}
        <section className="profile-card">

          <div className="profile-cover">
            <span className="cover-label">MY PROFILE</span>
          </div>

          <div className="profile-body">

            <div className="avatar">ZK</div>

            <div className="profile-heading">
              <h2>Zara Khan</h2>
              <p>Computer Science Student</p>
            </div>

            <div className="profile-divider"></div>

            {/* About Me */}
            <div className="profile-section">
              <h3>
                <span className="section-icon">✦</span>
                About Me
              </h3>

              <p className="about-text">
                I am a Computer Science student passionate
                about software development and modern
                technologies. Currently, I am learning
                React.js and improving my frontend
                development skills by building practical
                projects.
              </p>
            </div>

            {/* Education */}
            <div className="profile-section">
              <h3>
                <span className="section-icon">▤</span>
                Education
              </h3>

              <div className="education-box">
                <div className="education-icon">🎓</div>

                <div>
                  <h4>Bachelor of Computer Science</h4>
                  <p>Undergraduate Student</p>
                  <span>Computer Science</span>
                </div>
              </div>
            </div>

            {/* Technical Skills */}
            <div className="profile-section">
              <h3>
                <span className="section-icon">✧</span>
                Technical Skills
              </h3>

              <div className="skills-list">
                <span>HTML5</span>
                <span>CSS3</span>
                <span>JavaScript</span>
                <span>React.js</span>
                <span>Bootstrap</span>
                <span>Git & GitHub</span>
              </div>
            </div>

            {/* Profile Footer */}
            <div className="profile-footer">
              <span className="online-dot"></span>
              Currently learning React.js
            </div>

          </div>
        </section>

        {/* Counter Dashboard */}
        <section className="counter-panel">

          <div className="counter-top">
            <div>
              <span className="eyebrow">
                INTERACTIVE PROJECT
              </span>

              <h2>Counter Studio</h2>

              <p>
                Manage your numbers with React useState.
              </p>
            </div>

            <div className="counter-symbol">01</div>
          </div>

          {/* Main Counter */}
          <div className="counter-display">

            <span className="display-label">
              CURRENT VALUE
            </span>

            <div className="count-number">
              {count}
            </div>

            <span className="count-caption">
              {count === 0
                ? 'Ready to get started'
                : count === 100
                ? 'Maximum value reached!'
                : 'Keep going!'}
            </span>

            {/* Progress */}
            <div className="progress-info">
              <span>Progress</span>
              <span>{count}%</span>
            </div>

            <div
              className="progress-track"
              role="progressbar"
              aria-valuenow={count}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                className="progress-fill"
                style={{ width: `${count}%` }}
              ></div>
            </div>

          </div>

          {/* Main Buttons */}
          <div className="counter-controls">

            <button
              className="control-btn minus-btn"
              onClick={decrement}
              disabled={count === 0}
            >
              <span>−</span>
              Decrease
            </button>

            <button
              className="control-btn plus-btn"
              onClick={() => increment()}
              disabled={count === 100}
            >
              <span>+</span>
              Increase
            </button>

          </div>

          {/* Quick Actions */}
          <div className="quick-actions">

            <span className="quick-label">
              QUICK ADD
            </span>

            <div className="quick-buttons">

              <button
                onClick={() => increment(1)}
                disabled={count === 100}
              >
                +1
              </button>

              <button
                onClick={() => increment(5)}
                disabled={count === 100}
              >
                +5
              </button>

              <button
                onClick={() => increment(10)}
                disabled={count === 100}
              >
                +10
              </button>

            </div>
          </div>

          {/* Statistics */}
          <div className="stats-grid">

            <div className="stat-card">
              <span className="stat-icon">↗</span>

              <div>
                <strong>{totalClicks}</strong>
                <p>Total Actions</p>
              </div>
            </div>

            <div className="stat-card">
              <span className="stat-icon">◎</span>

              <div>
                <strong>{100 - count}</strong>
                <p>Remaining</p>
              </div>
            </div>

          </div>

          {/* Reset Button */}
          <button
            className="reset-btn"
            onClick={reset}
          >
            ↻ &nbsp; Reset Counter
          </button>

          <p className="counter-note">
            Built with React useState Hook
          </p>

          {/* useEffect Notification */}
          {showMessage && (
            <h3 className="render-message">
              Component ReRendered
            </h3>
          )}

        </section>

      </div>

      {/* Footer */}
      <footer className="footer">
        <p>
          Built with <span>♥</span> using React.js
        </p>

        <p>React Fundamentals · 2026</p>
      </footer>

    </main>
  );
}

export default App;
