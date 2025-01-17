import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import instagramLight from "../../assets/instagram-light.svg";
import instagramDark from "../../assets/instagram-dark.svg";
import tiktokLight from "../../assets/tiktok-light.svg";
import tiktokDark from "../../assets/tiktok-dark.svg";
// import CV from '../../assets/Tiswan_Ajah_CV.pdf'

import { ReactTyped } from "react-typed";
import { useTheme } from "../../common/ThemeContext.jsx";
const Hero = () => {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const instagramIcon = theme === "light" ? instagramLight : instagramDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;
  const tiktokIcon = theme === "light" ? tiktokLight : tiktokDark;
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt="Profile Tiswan" />
        <img
          onClick={toggleTheme}
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          role="button"
          tabIndex={0}
        />
      </div>

      <div className={styles.info}>
        <h1>Tiswan</h1>
        <h2>
          <ReactTyped
            strings={[
              "Frontend Developer",
              "Network Engineer",
              "Cyber Security Enthusiast",
            ]}
            loop
            typeSpeed={100}
            backSpeed={100}
            startDelay={100}
            showCursor={false}
          />
        </h2>

        <span>
          <a href="https://www.instagram.com/code.wannn/" target="_blank">
            <img src={instagramIcon} alt="Instagram icon" />
          </a>

          <a href="https://github.com/tiswan14" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>

          <a href="https://www.linkedin.com/in/tiswann/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>

          <a href="https://www.tiktok.com/@code.wannn" target="_blank">
            <img src={tiktokIcon} alt="TikTok icon" />
          </a>
        </span>
        <p className={styles.description}>
          Enthusiastic about coding, always exploring new technologies, and
          passionate about problem-solving and innovation.
        </p>

        <a href="#">
          <button className="hover" download>
            Resume
          </button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
