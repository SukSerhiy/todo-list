import React from 'react';
import { Button } from 'element-react';

const UserInfo = props => {
    const { email, isAuthenticated, doLogout, doLogin } = props;
    return (
        <div className='user-info'>
            <div>
                <span>{email}</span>
            </div>
            {isAuthenticated ? 
                <Button onClick={doLogout}>Вийти</Button>
                :
                <Button onClick={doLogin}>Увійти</Button>
            }
        </div>
    );
}

export default UserInfo;