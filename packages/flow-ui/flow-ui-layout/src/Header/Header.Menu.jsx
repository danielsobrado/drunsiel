import { Box } from 'theme-ui';
import Navigation from '@components/Navigation';
import Drawer from '@components/Drawer';
import useSiteMetadata from '@helpers-blog/useSiteMetadata';
import React, { useContext } from 'react';
import { LanguageContext } from '@helpers-blog/useLanguageContext';
import { FaGlobe } from 'react-icons/fa';

const styles = {
  desktopMenu: { display: [`none`, null, `block`] },
  mobileMenu: { display: [`block`, null, `none`] },
  desktopMenuWrapper: { justifyContent: 'flex-end' },
  languageToggle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: 'primary',
    color: 'white',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease',
    ':hover': {
      backgroundColor: 'secondary',
    },
  },
};

export const HeaderMenu = ({ mobileMenu = {} }) => {
  const { headerMenu } = useSiteMetadata();
  const { language, setLanguage } = useContext(LanguageContext);

  const toggleLanguage = () => {
    setLanguage(prevLanguage => (prevLanguage === 'en' ? 'es' : 'en'));
  };

  const menuItemsWithLanguageToggle = [
    ...headerMenu.map((item) => ({ ...item, slug: `/${language}${item.slug}` })),
  ];

  const desktopMenuNav = (
    <Navigation
      variant="horizontal"
      items={menuItemsWithLanguageToggle}
      wrapperStyle={styles.desktopMenuWrapper}
    />
  );

  const mobileMenuNav = (
    <Drawer>
      <Navigation variant="vertical" headingProps={{ variant: 'h3' }} items={mobileMenu} />
      <Box sx={styles.languageToggle} onClick={toggleLanguage}>
        <FaGlobe />
        <span>{language === 'en' ? 'N' : 'E'}</span>
      </Box>
    </Drawer>
  );

  return (
    <>
      <Box sx={styles.desktopMenu}>{desktopMenuNav}</Box>
      <Box sx={styles.mobileMenu}>{mobileMenuNav}</Box>
    </>
  );
};