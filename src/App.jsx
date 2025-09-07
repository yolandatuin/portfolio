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
  const experienceTpt = t("experience-details-tpt", { returnObjects: true }); 
  const experienceV3 = t("experience-details-V3", { returnObjects: true }); 
  const experienceMutua = t("experience-details-Mutua", { returnObjects: true }); 


  return (
    <div className="App">
      <header>
        <div className="toolbar">
            <div className="section-buttons">
              <button>{t("experience")}</button>
              <button>{t("education")}</button>
              <button>{t("projects")}</button>
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
            <p>{t("description2")}</p>
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
            <h2>Languages</h2>
              <ul>
                <li><p>Spanish</p>
                  <div className="language__bar-complete"></div>
                </li>
                <li><p>Catalan</p>
                  <div className="language__bar-complete"></div>
                </li>
                <li><p>English</p>
                  <div className="languages__bar"><div className="languages__bar-uncomplete"></div></div>
                </li>
              </ul>
            <h2>Software Skills</h2>
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
              <h2>{t("experience")}</h2>
              <p><span className="years">2015 - 2025</span><br />
              <span className="role">DTP Associate Lead</span><br />
              {t("in")} Transperfect Translations</p>
              <ul className="list-disc pl-6 space-y-2">
                {experienceTpt.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
              
              <p><span className="years">2014</span><br />
              <span className="role">Graphic Designer</span><br />
              {t("in")} V3rtice</p>
              <ul className="list-disc pl-6 space-y-2">
                {experienceV3.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>

              <p><span className="years">2013</span><br />
              <span className="role">Graphic Designer</span><br />
              {t("in")} Mutua Universal</p>
              <ul className="list-disc pl-6 space-y-2">
                {experienceMutua.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
            <div className="central__education">
              <h2>{t("education")}</h2>
                <p><span className="years">2025</span><br />
                <span className="role">Programación Web</span><br />
                {t("in")} Adalab</p>
                

                  <p><span className="years">2015 - 2020</span><br />
                <span className="role">Grado Multimedia</span><br />
                {t("in")} Universitat Oberta de Catalunya</p>
                

                  <p><span className="years">2015</span><br />
                <span className="role">Diseño Gráfico</span><br />
                {t("in")} Salford University, Mánchester (UK)</p>
                

                  <p><span className="years">2013 - 2015</span><br />
                <span className="role">Gráfica Interactiva</span><br />
                {t("in")} Escola Llotja</p>
                

                <p><span className="years">2010 - 2013</span><br />
                <span className="role">English</span><br />
                {t("in")} Escola Oficial d'Idiomes</p>
                

                <p><span className="years">2011 - 2013</span><br />
                <span className="role">Gráfica Publicitaria</span><br />
                {t("in")} Escola Llotja</p>
                
            </div>
          </main>

        </div>


      </main>
      <h1>{t("welcome")}</h1>
      <p>{t("about")}</p>

      <h2>{t("projects")}</h2>
      <h2>{t("contact")}</h2>
    </div>
  );
}

export default App;
