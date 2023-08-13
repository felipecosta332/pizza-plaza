import "./ProfileCardV1.css";

export const ProfileCardV1 = () => {
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
      <Skill skill="React" emoji="💪" color="blue" />
      <Skill skill="HTML+CSS" emoji="💪" color="orange" />
      <Skill skill="JavaScript" emoji="💪" color="yellow" />
      <Skill skill="Svelte" emoji="👶" color="orangered" />
    </div>
  );
}

function Skill({ skill, emoji, color }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>{emoji}</span>
    </div>
  );
}
