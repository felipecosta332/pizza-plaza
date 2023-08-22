import "./ProfileCardV1.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

export const ProfileCardV2 = () => {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
};

function Avatar() {
  return (
    <img
      className="avatar"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-rOXDl5O826tSX93Bl_nhJHhe0G7xZyjbgw&usqp=CAU"
      alt="Felipe Costa"
    />
  );
}

function Intro() {
  return (
    <div>
      <h1>Felipe Costa</h1>
      <p>
        Full-stack web developer and competitive programmer. When not coding or
        studying, I like to workout.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map(({skill, level, color}) => (
        <Skill skill={skill} emoji={level} color={color} />
      ))}
    </div>
  );
}

function Skill({ skill, emoji, color }) {

  
  function handleEmoji(level) {
    switch (level) {
      case "beginner": return "👶";
      case "intermediate": return "👍";
      case "advanced": return "💪";
      default: return "";
    }
  }

  emoji = handleEmoji(emoji);

  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>{emoji}</span>
    </div>
  );
}
