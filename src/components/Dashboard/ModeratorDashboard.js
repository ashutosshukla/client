// ModeratorDashboard.js
import React from 'react';

const ModeratorDashboard = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center text-primary mb-4">Moderator Dashboard</h1>
      <div className="card shadow-sm">
        <div className="card-body">
          <p className="card-text">
            Manage content and user interactions with moderation tools.
          </p>
          <p className="card-text">
            As a moderator, you can review flagged content, manage user reports, and ensure compliance with platform rules.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ModeratorDashboard;
