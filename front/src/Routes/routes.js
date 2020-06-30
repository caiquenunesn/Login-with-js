import React from 'react';
import { LoopCircleLoading } from 'react-loadingg';
import { AuthC } from '../Context/auth';

import AuthRoutes from './authRoutes';
import AppRoutes from './appRoutes';

export default function Routes(){
    const { load ,signed } = AuthC();

    if(load){
        return(
        <div>
            <LoopCircleLoading size={12} color="#000" />
        </div>)
    }
    
    return signed ? <AppRoutes /> : <AuthRoutes />
}