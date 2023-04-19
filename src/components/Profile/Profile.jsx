import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from './Profile.module.css'

const  Profile = () => {
    return (
      <div className={s.content}>
        <div className={s.mainFotoWrapper}>
          <img
            alt="mainFoto"
            src="https://img.freepik.com/premium-photo/programming-code-abstract-technology-background-of-software-developer-and-computer-script_34663-31.jpg?size=626&ext=jpg&uid=R99814540&ga=GA1.2.1663930170.1681815990&semt=sph"
          />
        </div>
        <div className={s.aboutMe}>
          <img alt="avatar" src="../../ava.jpg" />
          <div className={s.description}>
            <h3>Ekaterina Kopylova</h3>
            <p>City: Rostov-on-Done</p>
            <p>Education: АГТУ им. Ползунова, г.Барнаул</p>
            <p>Speciality: Прикладная информатика в экономике</p>
          </div>
        </div>
        <MyPosts />
      </div>
    );
}

export default Profile;
