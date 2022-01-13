import React from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import HelpIcon from '@mui/icons-material/Help';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import FeedIcon from '@mui/icons-material/Feed';
import DraftsIcon from '@mui/icons-material/Drafts';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import InfoIcon from '@mui/icons-material/Info';
import HomeIcon from '@mui/icons-material/Home';
import GroupsIcon from '@mui/icons-material/Groups';

export const SidebarData = [
  {
    title: 'About Us',
    pathname: {},
    icon: <HomeIcon />,
    iconClosed: <ArrowDropDownIcon />,
    iconOpened: <ArrowDropUpIcon />,

    subNav: [
      {
        title: 'Our Aim',
        pathname: '/about/company',
        icon: <InfoIcon />,
      },
      {
        title: 'Our Team',
        pathname: '/about/team',
        icon: <GroupsIcon />,
      },
    ],
  },
  {
    title: 'Services',
    pathname: {},
    icon: <MedicalServicesIcon />,
    iconClosed: <ArrowDropDownIcon />,
    iconOpened: <ArrowDropUpIcon />,

    subNav: [
      {
        title: 'Service 1',
        pathname: '/services/services1',
        icon: <FeedIcon />,
        cName: 'sub-nav',
      },
      {
        title: 'Service 2',
        pathname: '/services/services2',
        icon: <FeedIcon />,
        cName: 'sub-nav',
      },
      {
        title: 'Service 3',
        pathname: '/services/services3',
        icon: <FeedIcon />,
      },
    ],
  },
  {
    title: 'Contact Us',
    pathname: '/contactus',
    icon: <LocalPhoneIcon />,
  },
  {
    title: 'Events',
    pathname: {},
    icon: <DraftsIcon />,

    iconClosed: <ArrowDropDownIcon />,
    iconOpened: <ArrowDropUpIcon />,

    subNav: [
      {
        title: 'Storage Events',
        pathname: '/events/storage',
        icon: <FeedIcon />,
      },
      {
        title: 'Server Events',
        pathname: '/events/server',
        icon: <FeedIcon />,
      },
      {
        title: 'Backup Events',
        pathname: '/events/backups',
        icon: <FeedIcon />,
      },
    ],
  },
  {
    title: 'Support',
    pathname: '/support',
    icon: <HelpIcon />,
  },
];
