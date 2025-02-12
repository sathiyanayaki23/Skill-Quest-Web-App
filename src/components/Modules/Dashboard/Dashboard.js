import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./Dashboard.css"; // Importing the CSS

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <Container fluid className="dashboard-container">
      {/* Left Sidebar: Navigation (Fixed) */}
      <nav className="sidebar">
        <h2>⚡ Level Up</h2>
        <div className="xp-info">
          <div className="xp-bar">
            <div className="xp-fill" style={{ width: "85%" }}></div>
          </div>
          <ul>
            <li><Link to="/learning">📚 Learning Path </Link></li>
            <li><Link to="/practice">🎯 Practice </Link></li>   
            <li><Link to="/community">🏆cummunity</Link></li>
            <li><Link to="/profile">🛠️ Profile </Link></li>
            <li><Link to="/resources">🔖 Power-ups</Link></li>
            <li><Link to="leaderboard">🏆 Leaderboard</Link></li>
            <li><Link to="settings">🏆 settings</Link></li>
            <li><Link to="leaderboard">🏆 Leaderboard</Link></li>
            <li><Link to="help&support">Help & Support</Link></li>
          </ul>
        </div>
      </nav>

      {/* Middle Section: Levels (Scrollable) */}
      <main className="middle-section">
        <h3>🚀 Choose Your Next Challenge</h3>
        <div className="levels-container">
          <Card className="level-card">
            <Card.Body>
              <Row className="text-center">
                <Col>
                  <h4>Level 1 - HTML Basics</h4>
                  <p>Build the foundation of web pages.</p>
                  <Button variant="success">Start</Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>

          <Card className="level-card">
            <Card.Body>
              <Row className="text-center">
                <Col>
                  <h4>Level 2 - CSS Styling</h4>
                  <p>Master styles and layouts.</p>
                  <Button variant="success">Start</Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>

          <Card className="level-card">
            <Card.Body>
              <Row className="text-center">
                <Col>
                  <h4>Level 3 - JavaScript</h4>
                  <p>Unlock dynamic web interactions.</p>
                  <Button variant="success">Start</Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </div>
      </main>

      {/* Right Sidebar: Stats, Daily Challenge, Leaderboard (Fixed) */}
      <aside className="sidebar-right">
        <Card className="stats-card">
          <Row className="text-center">
            <Col>
              <h5>🏅 Achievements</h5>
              <p>3/5</p>
            </Col>
            <Col>
              <h5>🔥 Streak</h5>
              <p>5 days</p>
            </Col>
            <Col>
              <h5>💡 XP</h5>
              <p>850 XP</p>
            </Col>
          </Row>
        </Card>

        <Card className="quest-card">
          <h5>Daily Challenge</h5>
          <p>Earn bonus XP by completing today's challenge!</p>
          <Button variant="warning" onClick={() => navigate("/community")} className="quest-button">
            ⚡ Take Challenge
          </Button>
        </Card>

        <Card className="leaderboard-card">
          <h5>Leaderboard</h5>
          <p>Compete and climb the ranks!</p>
          <Button variant="warning" onClick={() => navigate("/community")} className="leaderboard-button">
            🏅 View Leaderboard
          </Button>
        </Card>
      </aside>
    </Container>
  );
};

export default Dashboard;