import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./Resources.css"; // Importing the CSS

const Resources = () => {
  const navigate = useNavigate();

  return (
    <Container fluid className="resources-container">
      {/* Left Sidebar: Navigation (Fixed) */}
      <nav className="sidebar">
        <h2>⚡ Level Up</h2>
        <div className="xp-info">
          <div className="xp-bar">
            <div className="xp-fill" style={{ width: "85%" }}></div>
          </div>
          <ul>
            <li><Link to="/learning">📚 Learning Path</Link></li>
            <li><Link to="/practice">🎯 Practice Mode</Link></li>
            <li><Link to="/community">🏆 Leaderboard</Link></li>
            <li><Link to="/profile">🛠️ Profile & Progress</Link></li>
            <li><Link to="/resources">🔖 Power-ups</Link></li>
          </ul>
        </div>
      </nav>

      {/* Middle Section: Resources (Scrollable) */}
      <main className="middle-section">
        <h3>📚 Unlock Your Developer Toolkit</h3>
        <div className="resources-container">
          <Card className="resource-card">
            <Card.Body>
              <Row className="text-center">
                <Col>
                  <h4>📜 Official Documentation</h4>
                  <p>HTML, CSS, JavaScript, Bootstrap.</p>
                  <Button variant="info">Explore</Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>

          <Card className="resource-card">
            <Card.Body>
              <Row className="text-center">
                <Col>
                  <h4>📘 Tutorials & Guides</h4>
                  <p>Curated learning resources.</p>
                  <Button variant="info">Browse</Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>

          <Card className="resource-card">
            <Card.Body>
              <Row className="text-center">
                <Col>
                  <h4>⚡ Code Snippets</h4>
                  <p>Reusable snippets for fast development.</p>
                  <Button variant="info">View</Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>

          <Card className="resource-card">
            <Card.Body>
              <Row className="text-center">
                <Col>
                  <h4>🛠️ Developer Tools</h4>
                  <p>Online validators, compressors, and more.</p>
                  <Button variant="info">Access</Button>
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

export default Resources;
