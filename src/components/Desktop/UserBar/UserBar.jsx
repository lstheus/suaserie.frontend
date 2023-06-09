import React from "react";
import './UserBar.css'
// ícones:
import { FiLogOut } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";

// Funções:
import { useNavigate } from 'react-router-dom';
import {removeAuth} from '../../../services/authService'



const UserBar = (props) => {

  // Dizer qual item checked do menu é.
  // O side bar item muda com um ID.

  // Navegação da página:
  const navigate = useNavigate();
  const goProfile = () => {
 
    navigate('/perfil');
  }
  const goLogOut = () => {

    removeAuth()
    navigate('/');

  };
  return (


    <div className="user-bar">
      <div className="user-wrapper">
        <div className="circle-user">
          <img src={props.userPic} alt="Perfil do usuário"/>
        </div>

        <span className="nickname">{props.apelido}</span>



      </div>
      <div className="dropbox">
        <li onClick={goProfile} ><AiOutlineUser />Perfil</li>
        <li onClick={goLogOut}><FiLogOut />Sair </li>

      </div>
    </div>






  )

};



export default UserBar;