import React from 'react';
import ProfileCard from './ProfileCard';

const profiles = [
  {
    image: "images/doctor3.png",
    name: "AbduLLahi Smith",
    jobTitle: "Frontend Developer",
    bio: "Passionate about creating user-friendly web applications.",
    skills: ["React", "JavaScript", "CSS"]
  },
  {
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Aishah Thomas",
    jobTitle: "UI/UX Designer",
    bio: "Loves designing beautiful and intuitive user interfaces.",
    skills: ["Figma", "Sketch", "Adobe XD"]
  },
  {
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    name: "Mike Johnson",
    jobTitle: "Backend Developer",
    bio: "Enjoys building robust server-side applications.",
    skills: ["Node.js", "Express", "MongoDB"]
  }
];


function App() {
  return (
    <div className="app">
      <h1>Team Profiles</h1>
      <div className="profile-list">
        {profiles.map((profile, idx) => (
          <ProfileCard
            key={idx}
            image={profile.image}
            name={profile.name}
            jobTitle={profile.jobTitle}
            bio={profile.bio}
            skills={profile.skills} />
        ))}
      </div>
    </div>
  );
}

/* //Arrow Function
const App = () => (
  <div className="app">
    <h1>Team Profiles</h1>
    <div className="profile-list">
      {profiles.map((profile, idx) => (
        <ProfileCard
          key={idx}
          image={profile.image}
          name={profile.name}
          jobTitle={profile.jobTitle}
          bio={profile.bio}
          skills={profile.skills}
        />
      ))}
    </div>
  </div>
); */

export default App;