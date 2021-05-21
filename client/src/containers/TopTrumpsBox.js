import React from 'react';
import Games from '../components/Games';
import CreateCardComponent from '../components/CreateCardComponent';
import HeaderComponent from '../components/HeaderComponent';

function TopTrumpsBox(){

    return(
        <div>
            <h1>Top Trumps Box Content</h1>
            <HeaderComponent />
            <Games />
            <CreateCardComponent />
        </div>

    );
};

export default TopTrumpsBox;