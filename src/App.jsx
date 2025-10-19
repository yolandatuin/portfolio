import React from "react";
import { useTranslation } from "react-i18next";
import "./i18n";
import "./styles/App.scss";
import ReactDOM from 'react-dom'
import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/linkedin'
import 'react-social-icons/github'
import 'react-social-icons/behance'
import 'react-social-icons/email'




function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };


  return (
    <div className="App">
      <header>
        <div className="toolbar">
            <div className="section-buttons">
              <a href="#experience"><button>{t("experience")}</button></a>
              <a href="#education"><button>{t("education")}</button></a>
              <a href="#projects"><button>{t("projects")}</button></a>
            </div>
            <div className="lang-buttons">
              <button onClick={() => changeLanguage("cat")}>CAT</button>
              <button onClick={() => changeLanguage("es")}>ES</button>
              <button onClick={() => changeLanguage("en")}>EN</button>
            </div>
          </div>

          <div className="hero">
            <p className="hero__hi">{t("hi")}</p>
            <p className="hero__Im">{t("Im")} <span>Yolanda</span></p>
            <p className="hero__junior"><span>Tuñón</span> {t("a")} Junior </p>
            <p className="hero__front">Front-End</p>
          </div>
      
        <div className="introduction">
          <div className="introduction__photo">
            <img src="/src/assets/photo.png" alt="Yolanda Tuñón photo" />
          </div>
          <div className="introduction__description">
            <p>{t("description1")}</p>
          </div>
        </div>
        
        <div className="contact">
          <SocialIcon target="_blank" url="https://www.linkedin.com/in/yolandatunyon/" />
          <SocialIcon target="_blank" url="https://github.com/yolandatuin" />
          <SocialIcon target="_blank" url="https://www.behance.net/yolandatunyon" />
          <SocialIcon target="_blank" url="mailto:yolandatuin@gmail.com" network="email"/>
        </div>
      </header>
      <main>
        
        <div className="central">
          <aside>
            <h2>{t("languages")}</h2>
              <ul>
                <li><p>{t("spanish")}</p>
                  <div className="language__bar-complete"></div>
                </li>
                <li><p>{t("catalan")}</p>
                  <div className="language__bar-complete"></div>
                </li>
                <li><p>{t("english")}</p>
                  <div className="languages__bar"><div className="languages__bar-uncomplete"></div></div>
                </li>
              </ul>
            <h2>{t("software")}</h2>
            <h3>Front-End</h3>
              <div className="aside__skills">
                <img src="/icons/css.svg" alt="CSS"/>
                <img src="/icons/html5.svg" alt="HTML"/>
                <img src="/icons/github.svg" alt="Github"/>
                <img src="/icons/javascript.svg" alt="JavaScript"/>
                <img src="/icons/sass.svg" alt="SCSS"/>
              </div>
            
            <h3>Graphic Design</h3>
              <div className="aside__skills">
                <img src="/icons/figma.svg" alt="Figma"/>
                <img src="/icons/illustrator.svg" alt="Adobe Illustrator"/>
                <img src="/icons/indesign.svg" alt="Adobe Indesign"/>
                <img src="/icons/photoshop.svg" alt="Adobe Photoshop"/>
                <img src="/icons/powerpoint.svg" alt="Microsoft PowerPoint"/>
                <img src="/icons/word.svg" alt="Microsoft Word"/>
                <img src="/icons/sketch.svg" alt="Sketch"/>
                <img src="/icons/xd.svg" alt="Adobe Xd"/>
              </div>

        
          </aside>
          <main>
            <div className="central__experience">
              <h2 id="experience">{t("experience")}</h2>
              <p><span className="years">2015 - 2025</span><br />
              <span className="role">DTP Associate Lead</span><br />
              {t("in")} Transperfect Translations</p>
              <p>{t("experience-details-tpt")}</p>
                
              <div className="more"><a href="https://www.linkedin.com/in/yolandatunyon/" target="_blank">{t("more")}</a></div>

            </div>
            <div className="central__education">
              <h2 id="education">{t("education")}</h2>
              <p><span className="years">2025</span><br />
                <span className="role">{t("web-programming")}</span><br />
                {t("in")} Adalab</p>
                <p>{t("experience-details-adalab")}</p>

                <div className="more"><a href="https://www.linkedin.com/in/yolandatunyon/" target="_blank">{t("more")}</a></div>

            </div>
            <div className="central__projects">
              <h2 id="projects">{t("projects")}</h2>
              <div className="project">
                <div className="project__image catcus"></div>
                <div className="project__description">
                  <h4>{t("catcus")}</h4>
                  <p>{t("catcus-desc")}</p>
                  <p><a href="https://github.com/yolandatuin/catcus" target="_blank">{t("web-code")}</a> | <a href="https://yolandatuin.github.io/catcus/" target="blank">{t("web-visual")}</a></p>
                </div>
              </div>

              <div className="project">
                <div className="project__image harry"></div>
                <div className="project__description">
                  <h4>{t("harry")}</h4>
                  <p>{t("harry-desc")}</p>
                  <p><a href="https://github.com/yolandatuin/Harry-Potter-Characters" target="_blank">{t("web-code")}</a> | <a href="https://yolandatuin.github.io/Harry-Potter-Characters/" target="blank">{t("web-visual")}</a></p>
                </div>
              </div>

              <div className="project">
                <div className="project__image store"></div>
                <div className="project__description">
                  <h4>{t("store")}</h4>
                  <p>{t("store-desc")}</p>
                  <p><a href="https://github.com/yolandatuin/tienda-de-cositas" target="_blank">{t("web-code")}</a> | <a href="https://yolandatuin.github.io/tienda-de-cositas/" target="blank">{t("web-visual")}</a></p>
                </div>
              </div>


                
            </div>
          </main>

        </div>


      </main>
    </div>
  );
}

export default App;
