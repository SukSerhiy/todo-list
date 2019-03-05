import React from 'react';
import { Button } from 'element-react';
import { getCookie } from '../utils/cookieHelper';

const UserInfo = props => {
    const {isAuthenticated, doLogout, doLogin } = props;
    const username = getCookie('username');
    return (
        <div className='user-info'>
            {!!username && <div>
                <span>{`Hi, ${username}`}</span>
            </div>}
            {isAuthenticated ? 
                (<Button onClick={doLogout}>Вийти</Button>)
                :
                (<Button onClick={doLogin}>Увійти</Button>)
            }
        </div>
    );
}

export default UserInfo;