import React from 'react';
import '../../css/NewNav.css';
import MyPhoto from '../../img/me2.png';
import Logo from '../../img/mylogo2.png'

const NewNavbar = () => {
  return (
    <div className='NewNavbar'>
        <div className="Myphoto">
            <img src={MyPhoto} alt="MyPhoto" />
        </div>
        <img className='wihteLogo' src={Logo} alt="Logo" />
    </div>
  )
}

export default NewNavbar