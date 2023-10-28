import React, {useEffect} from 'react';
import s from './Users.module.css';
import axios from "axios";
import userAva from '../../assets/images/img_avatar.png';

const UsersFuncComponent = (props) => {

    useEffect(() => {
        axios
            .get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                props.setUsers(response.data.items)
            });
    }, [props, props.users.length]);


    return (
        <div>
            {/*<button onClick={getUsers}>Get users</button>*/}
            {
                props.users.map(u => <div>
                    <span>
                        <div>
                            <img alt='fotoUsers'
                                 src={u.photos.small !== null ? u.photos.small : userAva}
                                 className={s.userPhoto}/>
                        </div>
                        <div>
                            {
                                u.followed
                                    ? <button onClick={() => {
                                        props.unfollow(u.id)
                                    }}>Unfollow</button>
                                    : <button onClick={() => {
                                        props.follow(u.id)
                                    }}>Follow</button>
                            }

                        </div>
                    </span>
                        <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </span>
                    </span>
                    </div>
                )
            }
        </div>
    );
};

export default UsersFuncComponent;