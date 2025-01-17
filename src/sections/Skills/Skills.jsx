import React from "react";
import styles from "./SkillStyles.module.css";
import checkMarkIcon from "../../assets/checkmark-dark.svg";
import SkillList from "../../common/SkillList";
const Skills = () => {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>

      <h2>Programming Language</h2>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="HTML" />
        <SkillList src={checkMarkIcon} skill="CSS" />
        <SkillList src={checkMarkIcon} skill="JavaScript" />
        <SkillList src={checkMarkIcon} skill="PHP" />
        <SkillList src={checkMarkIcon} skill="Java" />
        <SkillList src={checkMarkIcon} skill="Python" />
      </div>
      <hr />

      <h2>Frameworks</h2>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Bootstrap" />
        <SkillList src={checkMarkIcon} skill="TailwindCSS" />
        <SkillList src={checkMarkIcon} skill="ReactJS" />
        <SkillList src={checkMarkIcon} skill="Laravel" />
        <SkillList src={checkMarkIcon} skill="Express.js" />
        <SkillList src={checkMarkIcon} skill="Node.js" />
      </div>
      <hr />

      <h2>Database Management</h2>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="MySQL" />
        <SkillList src={checkMarkIcon} skill="MongoDB" />
      </div>
      <hr />

      <h2>Tools</h2>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Git" />
        <SkillList src={checkMarkIcon} skill="Docker" />
      </div>
      <hr />

      <h2>Networking & Operating Systems</h2>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Mikrotik" />
        <SkillList src={checkMarkIcon} skill="Cisco" />
        <SkillList src={checkMarkIcon} skill="Linux" />
      </div>
    </section>
  );
};

export default Skills;
