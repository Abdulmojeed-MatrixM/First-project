import React from 'react';
import './ProfileCard.css';

const ProfileCard = ({ image, name, jobTitle, bio, skills }) => (
  <div className="profile-card">
    <img src={image} alt={name} className="profile-image" />
    <h2>{name}</h2>
    <h4>{jobTitle}</h4>
    <p>{bio}</p>
    {skills && skills.length > 0 && (
      <div className="skills">
        <h5>Skills:</h5>
        <ul>
          {skills.map((skill, idx) => (
            <li key={idx} className="skill-tag">{skill}</li>
          ))}
        </ul>
      </div>
    )}
  </div>
);

export default ProfileCard;