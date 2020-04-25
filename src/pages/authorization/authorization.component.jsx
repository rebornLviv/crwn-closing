import React from 'react';
import './authorization.styles.scss'
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const Authorization =() =>(
<div className='sign-in-and-sign-up' >
    <SignIn />
    <SignUp/>
</div>

)


export default Authorization;