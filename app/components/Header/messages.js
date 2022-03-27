/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Header';

export default defineMessages([
  {
    title: 'About',
    submenu: [
      { title: 'Know Bishop Scott', link: '/about/know-bishop-scott' },
      { title: 'The Founders', link: '/about/founders' },
      { title: 'Vision and Mission', link: '/about/vision-and-missions' },
      {
        title: 'Logo',
        link: '/about/logo',
      },
      {
        title: 'Team',
        link: '/team',
      },
      {
        title: 'Brochure',
        link: null,
        downloadLink: '',
      },
    ],
  },
  {
    title: 'Admissions',
    submenu: [
      { title: 'Overview', link: '/admissions/overview' },
      {
        title: 'Bishop Scott Girls’ School',
        link: null,
        externalLink: 'http://bishopscottschool.com/admissions.html',
      },
      {
        title: `Bishop Scott Senior Secondary Girls’ School`,
        link: null,
        externalLink: 'http://bishopscottschool.com/admissions.html',
      },
      {
        title: `Bishop Scott Boys’ School`,
        link: null,
        externalLink: 'https://bishopscottboysschool.com/web/',
      },
    ],
  },
  {
    title: 'Partner with Us',
    submenu: [
      { title: 'Why Bishop Scott', link: '/why-bishop-scott' },
      { title: 'Enquiry', link: null },
    ],
  },
  {
    title: 'Contact',
    link: '/contact',
    submenu: [],
  },
]);
