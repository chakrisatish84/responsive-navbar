import React from 'react';

import './SideDrawer.css';

const sideDrawer = props => {
    let drawerClass = ['side-drawer'];
    if(props.show){
        drawerClass=['side-drawer', 'open']
    }
  return(
  <nav className={drawerClass.join(' ')}>
   <ul>
       <li><a hret="/">Products</a></li>
       <li><a hret="/">Users</a></li>
    </ul>
  </nav>
  );
};

export default sideDrawer;