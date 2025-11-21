import React from 'react';

const Team: React.FC = () => {
  return (
    <div className="page">
      <h2>Our team</h2>
      <div className="team-members">
        <div className="member">
          <h3>Anna is a Frontend Developer.</h3>
          <p>Specializes in React and TypeScript</p>
        </div>
        <div className="member">
          <h3>Boris - Backend developer</h3>
          <p>Works with Node.js and databases</p>
        </div>
        <div className="member">
          <h3>Victoria - Designer</h3>
          <p>Creates beautiful and user-friendly interfaces</p>
        </div>
      </div>
    </div>
  );
};

export default Team;