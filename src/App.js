import "./App.css";

const skillList = [
  {
    key: 1,
    name: "HTML",
    level: "advanced",
    bgColor: "#CEAB93",
  },
  {
    key: 2,
    name: "CSS",
    level: "intermediate",
    bgColor: "#B9CCED",
  },
  {
    key: 3,
    name: "JavaScript",
    level: "advanced",
    bgColor: "#FF8585",
  },
  {
    key: 4,
    name: "React",
    level: "beginner",
    bgColor: "#D5A4CF",
  },
  {
    key: 5,
    name: "Python",
    level: "advanced",
    bgColor: "#99B080",
  },
  {
    key: 6,
    name: "Git & GitHub",
    level: "intermediate",
    bgColor: "#A58FAA",
  },
];

export default function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="photo.jpg" alt="Devaloper_Photo" />;
}

function Intro() {
  return (
    <div>
      <h1>Arman Rajib</h1>
      <p>
        A web developer is a professional who specializes in the creation and
        maintenance of websites and web applications. They are skilled in
        programming languages and technologies used for building websites, such
        as HTML, CSS, JavaScript, and various frameworks and libraries.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skillList.map((skill) => (
        <Skill skill={skill} key={skill.key} />
      ))}
    </div>
  );
}

function Skill({ skill }) {
  return (
    <div className="skill" style={{ backgroundColor: skill.bgColor }}>
      <span>{skill.name}</span>
      <span>
        {skill.level === "beginner" && "🤓"}
        {skill.level === "intermediate" && "👌"}
        {skill.level === "advanced" && "💪"}
      </span>
    </div>
  );
}
