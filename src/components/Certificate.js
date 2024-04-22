import React, { useState } from 'react';
import '../css/Certificate.css';
import Respon from '../img/responsive.jpg';
import solocss from '../img/css sololearn.jpg';
import solohtml from '../img/html sololearn.jpg';
import solojs from '../img/js sololearn.jpg';
import ReactP from '../img/react.jpeg';
import Udemy from '../img/udemy.jpeg';
import Master from '../img/master-css.jpeg';
import Sql from '../img/sql.jpeg';
import Git from '../img/git.png';
import Sass from '../img/sass.png';
import ReactWeb from '../img/reactlink.png';
import WebRes from '../img/webRespo.jpeg';
import { useTranslation } from 'react-i18next';
import CustomPopup from './main/CustomPopup';
import { Fade } from "react-awesome-reveal";


const Certificate = () => {
  const { t } = useTranslation();

  const [visibility, setVisibility] = useState(false);
  const [Css, setCss] = useState(false);
  const [Html, setHtml] = useState(false);
  const [Javascript, setJavascript] = useState(false);
  const [Sql1, setSql1] = useState(false);
  const [WebRes1, setWebRes1] = useState(false);
  const [Reactc, setReactc] = useState(false);
  const [UdemyP, setUdemyP] = useState(false);
  const [Gitp, setGitp] = useState(false);
  const [Sassp, setSassp] = useState(false);
  const [Reactw, setReactw] = useState(false);
  const [Masterp, setMasterp] = useState(false);

  const popupCloseHandler = (e) => {
    setVisibility(e);
    setCss(e);
    setHtml(e);
    setJavascript(e);
    setSql1(e);
    setWebRes1(e);
    setReactc(e);
    setUdemyP(e);
    setGitp(e);
    setSassp(e);
    setReactw(e);
    setMasterp(e);
  };
  return (
    <div id="CertificateStyle">
      <Fade>
      <div className="Certificate">
        <div className="Certittle">
          <h2>{t('certificate')}</h2>
        </div>
        <div className="Ceritems">


          <div className="photoCrti">
            <img src={Udemy} alt="Avatar" className="respon" />
            <div className="overlay" onClick={(e) => setUdemyP(!UdemyP)}>
              <div className="text">CSS, Bootstrap ,JS Web Development </div>
            </div>
           
             <CustomPopup
             onClose={popupCloseHandler}
             show={UdemyP}
           >
             <img src={Udemy} alt='responsive'/>
                    </CustomPopup>
          </div>


          <div className="photoCrti">
            <img src={Respon} alt="Avatar" className="respon" />
            <div className="overlay" onClick={(e) => setVisibility(!visibility)}>
              <div className="text">Responsive Coursera </div>
            </div>
           
             <CustomPopup
             onClose={popupCloseHandler}
             show={visibility}
           >
             <img src={Respon} alt='responsive'/>
                    </CustomPopup>
          </div>



          <div className="photoCrti ">
            <img src={ReactWeb} alt="Avatar" className="solocss" />
            <div className="overlay" onClick={(e) => setReactw(!Reactw)}>
              <div className="text">React for Web Designers</div>
            </div>
          </div>
          <CustomPopup
             onClose={popupCloseHandler}
             show={Reactw}
           >
             <img src={ReactWeb} alt='responsive'/>
                    </CustomPopup>




          <div className="photoCrti ">
            <img src={Master} alt="Avatar" className="solocss" />
            <div className="overlay" onClick={(e) => setMasterp(!Masterp)}>
              <div className="text">Master CSS3 and React Js</div>
            </div>
          </div>
          <CustomPopup
             onClose={popupCloseHandler}
             show={Masterp}
           >
             <img src={Master} alt='responsive'/>
                    </CustomPopup>






          <div className="photoCrti ">
            <img src={Git} alt="Avatar" className="solocss" />
            <div className="overlay" onClick={(e) => setGitp(!Gitp)}>
              <div className="text">Learning Git and GitHub</div>
            </div>
          </div>
          <CustomPopup
             onClose={popupCloseHandler}
             show={Gitp}
           >
             <img src={Git} alt='responsive'/>
                    </CustomPopup>



          <div className="photoCrti ">
            <img src={Sass} alt="Avatar" className="solocss" />
            <div className="overlay" onClick={(e) => setSassp(!Sassp)}>
              <div className="text">Sass Essential Training</div>
            </div>
          </div>
          <CustomPopup
             onClose={popupCloseHandler}
             show={Sassp}
           >
             <img src={Sass} alt='responsive'/>
                    </CustomPopup>




          <div className="photoCrti ">
            <img src={solocss} alt="Avatar" className="solocss" />
            <div className="overlay" onClick={(e) => setCss(!Css)}>
              <div className="text">CSS Solo Learn</div>
            </div>
          </div>
          <CustomPopup
             onClose={popupCloseHandler}
             show={Css}
           >
             <img src={solocss} alt='responsive'/>
                    </CustomPopup>




          <div className="photoCrti ">
            <img src={solohtml} alt="Avatar" className="solohtml" />
            <div className="overlay" onClick={(e) => setHtml(!Html)}>
              <div className="text">HTML Solo Learn</div>
            </div>
          </div>
          <CustomPopup
             onClose={popupCloseHandler}
             show={Html}
           >
             <img src={solohtml} alt='responsive'/>
                    </CustomPopup>
          <div className="photoCrti ">
            <img src={solojs} alt="Avatar" className="solojs" />
            <div className="overlay" onClick={(e) => setJavascript(!Javascript)}>
              <div className="text">Java Script Solo Learn</div>
            </div>
          </div>
          <CustomPopup
             onClose={popupCloseHandler}
             show={Javascript}
           >
             <img src={solojs} alt='responsive'/>
                    </CustomPopup>


          <div className="photoCrti ">
            <img src={Sql} alt="Avatar" className="solojs" />
            <div className="overlay" onClick={(e) => setSql1(!Sql1)}>
              <div className="text">SQL Solo Learn</div>
            </div>
          </div>
          <CustomPopup
             onClose={popupCloseHandler}
             show={Sql1}
           >
             <img src={Sql} alt='responsive'/>
                    </CustomPopup>



          <div className="photoCrti ">
            <img src={WebRes} alt="Avatar" className="solojs" />
            <div className="overlay" onClick={(e) => setWebRes1(!WebRes1)}>
              <div className="text">Web Responsive Solo Learn</div>
            </div>
          </div>
          <CustomPopup
             onClose={popupCloseHandler}
             show={WebRes1}
           >
             <img src={WebRes} alt='responsive'/>
                    </CustomPopup>



          <div className="photoCrti ">
            <img src={ReactP} alt="Avatar" className="solojs" />
            <div className="overlay" onClick={(e) => setReactc(!Reactc)}>
              <div className="text">React + Redux</div>
            </div>
          </div>
          <CustomPopup
             onClose={popupCloseHandler}
             show={Reactc}
           >
             <img src={ReactP} alt='responsive'/>
                    </CustomPopup>


        </div>
      </div>
      </Fade>
    </div>
  );
};

export default Certificate;
