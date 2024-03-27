import { Box } from 'theme-ui'
import Navigation from '@components/Navigation'
import Drawer from '@components/Drawer'
import useSiteMetadata from '@helpers-blog/useSiteMetadata'
import React, { useContext } from 'react'
import { LanguageContext } from '@helpers-blog/useLanguageContext';

const styles = {
  desktopMenu: { display: [`none`, null, `block`] },
  mobileMenu: { display: [`block`, null, `none`] },
  desktopMenuWrapper: { justifyContent: 'flex-end' }
}

export const HeaderMenu = ({ mobileMenu = {} }) => {
  const { headerMenu } = useSiteMetadata()
  // Inside the HeaderMenu component, use the context
  const { language, setLanguage } = useContext(LanguageContext);
  console.log("LanguageContext: " + language)

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "es" : "en"));
    // No need to handle the language change logic for your app here
    // as it will just trigger a re-render with the new language context
  };

  // Create a new menu array that includes the language toggle
  const menuItemsWithLanguageToggle = [
    ...headerMenu.map((item) => ({ ...item, slug: `${item.slug}` })),
    {
      name: `Lang: ${language}`,
      slug: '#',
      onClick: toggleLanguage,
    },
  ];

  // Define the title based on the language
  const mainMenuTitle = language === 'en' ? 'Main Menu' : 'Menú Principal';

  const desktopMenuNav = (
    <Navigation variant='horizontal' items={menuItemsWithLanguageToggle} wrapperStyle={styles.desktopMenuWrapper}>
    </Navigation>
  );

  const mobileMenuNav = (
    <Drawer>
      <Navigation
        variant="vertical"
        headingProps={{ variant: 'h3' }}
        items={mobileMenu}
      ></Navigation>
    </Drawer>
  );

  return (
    <>
      <Box sx={styles.desktopMenu}>{desktopMenuNav}</Box>
      <Box sx={styles.mobileMenu}>{mobileMenuNav}</Box>
    </>
  )
}