import { Menu, MenuItem } from '@material-ui/core';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.jpeg';
import './header-style.scss';
import {
  HeaderComp,
  HeaderImg,
  HeaderWrapper,
  LinkTile,
  MenuTile,
  MenuWrapper,
  MenuLink,
} from './internal';
import menuArray from './messages';

function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [currentMenu, SetCurrentMenu] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event, i) => {
    if (i.link) return;
    SetCurrentMenu(i.title);
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    SetCurrentMenu(null);
  };
  return (
    <HeaderWrapper>
      <HeaderComp>
        <Link to="/">
          <HeaderImg src={Logo} alt=" Logo loading..." />
        </Link>
        <div className="seven">
          <h1>Laima HR Solutions</h1>
        </div>
      </HeaderComp>
      <MenuWrapper>
        {menuArray.map(i => (
          <div key={i.title} onMouseLeave={handleClose}>
            <MenuTile
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onMouseEnter={e => handleClick(e, i)}
              onClick={e => handleClick(e, i)}
              // onMouseLeave={handleClose}
              autoFocus={false}
            >
              {i.link ? (
                <MenuLink to={i.link}>{i.title}</MenuLink>
              ) : (
                <>{i.title}</>
              )}
              {/* {i.title} */}
            </MenuTile>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open && i.title === currentMenu}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
              transformOrigin={{ vertical: 'top', horizontal: 'center' }}
              getContentAnchorEl={null}
              autoFocus={false}
            >
              {i.submenu.map(sub => (
                <LinkTile
                  onClick={() => {
                    if (sub.externalLink)
                      window.location.href = sub.externalLink;
                  }}
                  to={sub.link || ''}
                  key={sub.title}
                >
                  <MenuItem onClick={handleClose}>{sub.title}</MenuItem>
                </LinkTile>
              ))}
            </Menu>
          </div>
        ))}
      </MenuWrapper>
    </HeaderWrapper>
  );
}

export default Header;
