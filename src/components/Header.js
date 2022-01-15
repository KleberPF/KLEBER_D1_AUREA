import React from 'react';

const Header = () => {
  return (
    <header>
      <h3>Pinterest</h3>
      <nav>
        <ul>
          <li>
            <a href='https://google.com'>Sobre</a>
          </li>
          <li>
            <a href='https://google.com'>Negócios</a>
          </li>
          <li>
            <a href='https://google.com'>Blog</a>
          </li>
        </ul>

        <div className='buttons'>
          <button className='login'>Login</button>
          <button className='signup'>Sign Up</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
