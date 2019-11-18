import React from 'react';
import Toggler from './Toggler';

function Menu () {
  return (
    <Toggler
      defaultOnValue={true}
      render={({on, toggle}) => (
        <div>
          <button onClick={toggle}>
            {on ? 'Hide' : 'Show'} Menu
          </button>
          <nav style={{display: on ? 'block' : 'none'}}>
            <h6>Signed in as Coder123</h6>
            <p>Your Profile</p>
            <p>Your Repositories</p>
            <p>Your Stars</p>
            <p>Your Gists</p>
          </nav>
        </div>
      )}
    />
  );
}

export default Menu;
