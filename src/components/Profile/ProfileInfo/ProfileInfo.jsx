import React from "react";
import s from './ProfileInfo.module.css'
import mainFoto from '../../assets/mainFoto.avif';
import ava from '../../assets/ava.jpg';

const  ProfileInfo = () => {
    return (
      <div>
          <div className={s.mainFotoWrapper}>
              <img
                  alt="mainFoto"
                  src={mainFoto}
              />
          </div>
          <div className={s.descriptionBlock}>
              <img alt="avatar" src={ava} />
              <div className={s.description}>
                  <h3>Ekaterina Kopylova</h3>
                  <p>City: Rostov-on-Done</p>
                  <p>Education: АГТУ им. Ползунова, г.Барнаул</p>
                  <p>Speciality: Прикладная информатика в экономике</p>
              </div>
          </div>
      </div>

    );
}

export default ProfileInfo;
