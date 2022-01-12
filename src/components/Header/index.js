import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import capitalizeFirst from '../../helpers/capitalizeFirst';

import config from '../../../config.json';

const Header = () => {
  const title =
    config.titlePrefix.length !== 0 ? config.titlePrefix : 'Create Next App';
  let fullTitle;
  let currentTitle;

  const router = useRouter();
  currentTitle = router.pathname.split(/[\/\/]/)[1];

  fullTitle = title + ' - ' + capitalizeFirst(currentTitle);

  if (currentTitle.length == 0) {
    fullTitle = title;
  }

  return (
    <Head>
      <title>{fullTitle}</title>
    </Head>
  );
};

export default Header;
