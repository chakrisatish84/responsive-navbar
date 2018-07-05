import React from 'react';

import "./BackDrop.css";

const backDrop = props => (
 <div className='backdrop' onClick={props.backdropClickHandler}>
 </div>
)

export default backDrop;