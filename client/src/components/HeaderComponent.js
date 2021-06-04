import React from 'react';
import ttlogo from './images/ttlogo.png';

function HeaderComponent() {

    return (
        <>
        <header className="tt__box--header">
            <img src={ttlogo} alt="" />            
        </header>
    
        </>
    );

};

export default HeaderComponent;