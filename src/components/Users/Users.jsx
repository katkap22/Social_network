import React from 'react';
import s from './Users.module.css';
import userAva from '../../assets/images/img_avatar.png';

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {
                pages.map(p => {
                    return <span
                        className={props.currentPage === p && s.selectedPage}
                        style={{cursor: "pointer", marginRight: 7}}
                        onClick={(e) => {
                            props.onPageChanged(p)
                        }}>{p}</span>
                })
            }
        </div>
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
}


export default Users;