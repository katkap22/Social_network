import React from 'react';

const Friend = (props) => {

    return (
            <div>
               <img alt='foto of friend' src='https://html5css.ru/w3css/img_avatar3.png' />
               <div>{props.state.name}</div>
            </div>
    );
};

export default Friend;