import NextLink from 'next/link';

import { Image } from '@chakra-ui/react';

const Logo = () => {
  return (
    <NextLink href='/' passHref>
      <Image scrollMargin={'../../public/images/logo.png'} width={70} height='auto' />
    </NextLink>
  );
};

export default Logo;
