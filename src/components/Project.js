import React, { useState } from 'react';
import '../css/Project.css';
import project from '../img/6.jpg';
import daily from '../img/Untitled.png';
import darman from '../img/2.jpg';
import Hami from '../img/hamitest.png';
import Intranet1 from '../img/434.jpeg';
import Pdarman from '../img/pDarman.jpg';
import Fish from '../img/10.jpg'
import { useTranslation } from 'react-i18next';
import CustomPopup from './main/CustomPopup';
import IntranetVideo from '../img/99.jpeg';
import Water1 from '../img/water.png';
import Falcon from '../img/falcon.png'
import Gold from '../img/gold.png'
import Sharan from '../img/sharan.png'
import Carbon from '../img/Carbon.png'



const Project = () => {
  const { t } = useTranslation();

  const [Darman, setDarman] = useState(false);
  const [Darmani, setDarmani] = useState(false);
  const [Pedarman, setPedarman] = useState(false);
  const [Intranet, setIntranet] = useState(false);
  const [Water, setWater] = useState(false);
  

  const popupCloseHandler = (e) => {
    setDarman(e);
    setDarmani(e);
    setPedarman(e);
    setIntranet(e);
    setWater(e);
    
  };
  return (
    <div id="project">
      <div className="proStyle">
        <div className="proTittle">
          <h2>{t('PROJEC')}</h2>
        </div>
        <div className="proinfo">


          


        <div className="perspective">
            <div className="pro">
              <div className="prophoto">
                <a href="http://carbonsteel.org/">
                  <img src={Carbon} alt="Carbon" />
                </a>
              </div>
              <div className="aboutpro">
                <a href="http://carbonsteel.org/">
                  {' '}
                  <h4>{t('Carbon')}</h4>
                </a>
              </div>
            </div>
          </div>
 


        <div className="perspective">
            <div className="pro">
              <div className="prophoto">
                <a href="http://qalaybitumen.com/">
                  <img src={Sharan} alt="sharan" />
                </a>
              </div>
              <div className="aboutpro">
                <a href="http://qalaybitumen.com/">
                  {' '}
                  <h4>{t('Sharan')}</h4>
                </a>
              </div>
            </div>
          </div>
 


        <div className="perspective">
            <div className="pro">
              <div className="prophoto">
                <a href="https://bulima.com/">
                  <img src={Gold} alt="Gold" />
                </a>
              </div>
              <div className="aboutpro">
                <a href="https://bulima.com/">
                  {' '}
                  <h4>{t('GoldS')}</h4>
                </a>
              </div>
            </div>
          </div>
 

           
          <div className="perspective">
            <div className="pro">
              <div className="prophoto">
                <a href="https://hamitest.com/">
                  <img src={Hami} alt="pro" />
                </a>
              </div>
              <div className="aboutpro">
                <a href="https://hamitest.com/">
                  {' '}
                  <h4>{t('hami')}</h4>
                </a>
              </div>
            </div>
          </div>


        <div className="perspective">
            <div className="pro">
              <div className="prophoto">
                <a href="https://nemat-doosti.ir/">
                  <img src={Falcon} alt="pro" />
                </a>
              </div>
              <div className="aboutpro">
                <a href="https://nemat-doosti.ir/">
                  {' '}
                  <h4>{t('falcon')}</h4>
                </a>
              </div>
            </div>
          </div>



               
        <div className="perspective">
            <div className="pro">
              <div className="prophoto">
                <img src={Intranet1} alt="pro" onClick={(e) => setIntranet(!Intranet)} />
              </div>
              <div className="aboutpro">
                <h4>{t('intranet')}</h4>
              </div>
            </div>
          </div>
          
          <CustomPopup
                   onClose={popupCloseHandler}
                   show={Intranet}
                   
           >
                        <img className='tanplatePhoto' src={IntranetVideo} alt="IntranetVideo"/>
                    </CustomPopup>

 


                    <div className="perspective">
            <div className="pro">
              <div className="prophoto">
                <a href="http://dailyscribe.ir/">
                  <img src={daily} alt="pro" />
                </a>
              </div>
              <div className="aboutpro">
                <a href="http://dailyscribe.ir/">
                  {' '}
                  <h4>{t('dailyscribe')}</h4>
                </a>
              </div>
            </div>
          </div>

         
 


          
          
        <div className="perspective">
            <div className="pro">
              <div className="prophoto">
                <img src={Water1} alt="pro" onClick={(e) => setWater(!Water)} />
              </div>
              <div className="aboutpro">
                <h4>{t('water')}</h4>
              </div>
            </div>
          </div>
          
          <CustomPopup
                   onClose={popupCloseHandler}
                   show={Water}
                   
           >
                        <img  src={Water1} alt="Water1"/>
                    </CustomPopup>


          
     




          
          <div className="perspective">
            <div className="pro">
              <div className="prophoto">
                <img src={Fish} alt="pro" onClick={(e) => setPedarman(!Pedarman)} />
              </div>
              <div className="aboutpro">
                <h4>{t('fish')}</h4>
              </div>
            </div>
          </div>
          
          <CustomPopup
                   onClose={popupCloseHandler}
                   show={Pedarman}
           >
                          <img src={Fish} alt='Fish'/>
                    </CustomPopup>



          <div className="perspective">
            <div className="pro">
              <div className="prophoto" >
                <img src={project} alt="pro" onClick={(e) => setDarman(!Darman)} />
                  
              </div>
              <div className="aboutpro">
                <h4>{t('moshanir')}</h4>
              </div>
            </div>
          </div>
          <CustomPopup
                   onClose={popupCloseHandler}
                   show={Darman}
           >
                          <img src={project} alt='darman'/>
                    </CustomPopup>


          <div className="perspective">
            <div className="pro">
              <div className="prophoto">
                <img src={darman} alt="pro" onClick={(e) => setDarmani(!Darmani)} />
              </div>
              <div className="aboutpro">
                <h4>{t('darman')}</h4>
              </div>
            </div>
          </div>
          
          <CustomPopup
                   onClose={popupCloseHandler}
                   show={Darmani}
           >
                          <img src={darman} alt='darman'/>
                    </CustomPopup>


          <div className="perspective">
            <div className="pro">
              <div className="prophoto">
                <img src={Pdarman} alt="pro" onClick={(e) => setPedarman(!Pedarman)} />
              </div>
              <div className="aboutpro">
                <h4>{t('darman')}</h4>
              </div>
            </div>
          </div>
          
          <CustomPopup
                   onClose={popupCloseHandler}
                   show={Pedarman}
           >
                          <img src={Pdarman} alt='darman'/>
                    </CustomPopup>





         

        </div>
      </div>
    </div>
  );
};

export default Project;
