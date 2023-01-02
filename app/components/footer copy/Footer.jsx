import * as React from 'react';
import './footer-style.scss';

const Footer = props => {
  const socialsArray = [
    // {
    //   id: '1',
    //   name: 'facebook',
    //   url: 'https://www.facebook.com',
    //   img: 'facebook_icon.png',
    // },
    // {
    //   id: '2',
    //   name: 'instagram',
    //   url: 'https://www.instagram.com',
    //   img: 'insta_icon.png',
    // },
    // {
    //   id: '3',
    //   name: 'linkedIn',
    //   url: 'https://www.linkedin.com',
    //   img: 'linkedin_icon.png',
    // },
  ];
  const arr = [
    // {
    //   title: 'BISHOP SCOTT GIRLS’ SCHOOL',
    //   facebook:
    //     'https://www.facebook.com/112535947889712/posts/118351167308190/?sfnsn=wiwspmo',
    //   instagram:
    //     'https://www.instagram.com/invites/contact/?i=1fefmxdtytxuo&utm_content=n3boe7r',
    //   linkedIn:
    //     'https://www.linkedin.com/in/bishop-scott-girls-school-72bb39226',
    // },
    // {
    //   title: 'BISHOP SCOTT SENIOR SECONDARY GIRLS’ SCHOOL',
    //   facebook: 'https://www.facebook.com/bsssgs',
    //   instagram: 'https://www.instagram.com/bishopscottsenior/',
    //   linkedIn: `//www.linkedin.com/mynetwork/`,
    // },
    // {
    //   title: 'BISHOP SCOTT BOYS’ SCHOOL',
    //   facebook: `https://www.facebook.com/bishopscottboyspatna`,
    //   instagram: `https://www.instagram.com/bishopscottboysschool/`,
    //   linkedIn: `https://www.linkedin.com/in/bishop-scott-boys-bsbs-13609a236/]`,
    // },
  ];
  const handleClick = React.useCallback(url => {
    window.open(url, '_blank');
  }, []);
  return (
    <div className="footerWrapper">
      <div className="footer">
        {/* <img
          src="https://bishopscottboysschool.com/web/wp-content/uploads/2015/12/logo.png"
          alt="source"
        /> */}
        <div className="socialsWrapper">
          {arr.map(i => (
            <div className="menuTile">
              <div className="school-title">{i.title}</div>
              <div className="social-array">
                {socialsArray.map(j => (
                  <img
                    onClick={() => handleClick(i[j.name])}
                    className="socImg"
                    alt=""
                    src={require(`./../../assets/${j.img}`)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
