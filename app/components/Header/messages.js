/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Header';

export default defineMessages([
  {
    title: 'Home',
    link: '/',
    submenu: [],
  },
  {
    title: 'About',
    link: '/about',
    submenu: [
      // { title: 'Know Bishop Scott', link: '/about/know-bishop-scott' },
      // { title: 'The Founders', link: '/about/founders' },
      // {
      //   title: 'Team',
      //   link: '/about/team',
      // },
      // { title: 'Vision and Mission', link: '/about/vision-and-missions' },
      // {
      //   title: 'Logo',
      //   link: '/about/logo',
      // },
      // {
      //   title: 'Brochure',
      //   link: null,
      //   downloadLink: '',
      // },
    ],
  },
  // {
  //   title: 'Admissions',
  //   submenu: [
  //     { title: 'Overview', link: '/admissions/overview' },
  //     {
  //       title: `Bishop Scott Girls' School`,
  //       link: null,
  //       externalLink: 'http://bishopscottschool.com/admissions.html',
  //     },
  //     {
  //       title: `Bishop Scott Senior Secondary Girls’ School`,
  //       link: null,
  //       externalLink: 'http://www.bishopscottssgs.com/en/',
  //     },
  //     {
  //       title: `Bishop Scott Boys’ School`,
  //       link: null,
  //       externalLink: 'https://bishopscottboysschool.com/web/',
  //     },
  //   ],
  // },
  // {
  //   title: 'Partner with Us',
  //   submenu: [
  //     { title: 'Why Bishop Scott', link: '/why-bishop-scott' },
  //     { title: 'Enquiry', link: 'enquiry' },
  //   ],
  // },
  {
    title: 'Contact',
    link: '/contact',
    submenu: [],
  },
]);
