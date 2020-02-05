import React from 'react';

import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
       <div>
          <NavLink to="/"></NavLink>
          <NavLink to="/signup"></NavLink>
       </div>
    );
}

export default Navigation;