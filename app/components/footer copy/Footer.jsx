import * as React from 'react';
import './footer-style.scss';

const Footer = props => {
  const socialsArray = [
    {
      id: '1',
      name: 'facebook',
      url: 'https://www.facebook.com',
      img: 'facebook_icon.png',
    },
    {
      id: '2',
      name: 'instagram',
      url: 'https://www.instagram.com',
      img: 'insta_icon.png',
    },
    {
      id: '3',
      name: 'linkedin',
      url: 'https://www.linkedin.com',
      img: 'linkedin_icon.png',
    },
  ];
  return (
    <div className="footerWrapper">
      <div className="footer">
        {/* <img
          src="https://bishopscottboysschool.com/web/wp-content/uploads/2015/12/logo.png"
          alt="source"
        /> */}
        <div className="socialsWrapper">
          {socialsArray.map(i => (
            <div
              className="menuTile"
              onClick={() => {
                window.open(i.url, '_blank');
              }}
            >
              <img
                className="socImg"
                alt=""
                src={require(`./../../assets/${i.img}`)}
              />
              {i.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
