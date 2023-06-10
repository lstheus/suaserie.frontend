import React, { useState } from "react";
import images from "../../../constants/images";
import './SideMenu.css'
import logos from "../../../constants/logos";
import UserBar from "../UserBar/UserBar";
import SideMenuItem from "../SideMenuItem/SideMenuItem";

// ícones:
import { MdOutlineSentimentVerySatisfied, MdDoneAll, MdOutlineHotelClass, MdOutlineSentimentVeryDissatisfied } from "react-icons/md";



const SideMenu = (props) => {

  // Dizer qual item checked do menu é.
  // O side bar item muda com um ID.







  return (
    <div className="side-menu"  >
      <div className="user-wrapper">
        <UserBar apelido={props.apelido} image={props.imgUser} />

      </div>

      <div className="user-wrapper user-hidden">
        <UserBar apelido={""} image={props.imgUser} isSettingVisible={"invisible"} />

      </div>







      <div className="side-bar-items">


        <span className={`side-bar-items-title `}>Suas listas</span>
        <hr />




        <div className="side-item-wrapper wrapper-hidden">
          <SideMenuItem linkTo={props.checkedItem == "liked" ? "" : "/favoritas"} isChecked={props.checkedItem == "liked" ? true : false} type="liked">
            {""}
            <MdOutlineSentimentVerySatisfied />
          </SideMenuItem>

        </div>

        <div className="side-item-wrapper wrapper-not-hidden">
          <SideMenuItem linkTo={props.checkedItem == "liked" ? "" : "/favoritas"} isChecked={props.checkedItem == "liked" ? true : false} type="liked">
            {"Favoritas"}
            <MdOutlineSentimentVerySatisfied />
          </SideMenuItem>

        </div>


        <div className="side-item-wrapper wrapper-not-hidden">
          <SideMenuItem linkTo={props.checkedItem == "watched" ? "" : "/assistidas"} isChecked={props.checkedItem == "watched" ? true : false} type="watched">
            {"Já vistas"}
            <MdDoneAll />
          </SideMenuItem>
        </div>
        <div className="side-item-wrapper wrapper-hidden">
          <SideMenuItem linkTo={props.checkedItem == "watched" ? "" : "/assistidas"} isChecked={props.checkedItem == "watched" ? true : false} type="watched">
            {""}
            <MdDoneAll />
          </SideMenuItem>
        </div>


        <div className="side-item-wrapper wrapper-hidden">
          <SideMenuItem linkTo={props.checkedItem == "wish" ? "" : "/desejoVer"} isChecked={props.checkedItem == "wish" ? true : false} type="wish">
            {""}
            <MdOutlineHotelClass />
          </SideMenuItem>
        </div>
        <div className="side-item-wrapper wrapper-not-hidden">
          <SideMenuItem linkTo={props.checkedItem == "wish" ? "" : "/desejoVer"} isChecked={props.checkedItem == "wish" ? true : false} type="wish">
            {"Desejo ver"}
            <MdOutlineHotelClass />
          </SideMenuItem>
        </div>

        <div className="side-item-wrapper wrapper-not-hidden">
          <SideMenuItem linkTo={props.checkedItem == "disliked" ? "" : "/piores"} isChecked={props.checkedItem == "disliked" ? true : false} type="disliked">
            {"Piores"}
            <MdOutlineSentimentVeryDissatisfied />
          </SideMenuItem>
        </div>

        <div className="side-item-wrapper wrapper-hidden">
          <SideMenuItem linkTo={props.checkedItem == "disliked" ? "" : "/piores"} isChecked={props.checkedItem == "disliked" ? true : false} type="disliked">
            {""}
            <MdOutlineSentimentVeryDissatisfied />
          </SideMenuItem>
        </div>






        <img
          src={logos.logoLight}
          alt="Projeto SóSéries logomarca."
        />
      </div>
    </div>
  )

};



export default SideMenu;