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
  const { language, setLanguage } = useContext(LanguageContext);
 
  // Define the title based on the language
  const mainMenuTitle = language === 'en' ? 'Main Menu' : 'Menú Principal';

  const desktopMenuNav = (
    <Navigation variant='horizontal' items={headerMenu} wrapperStyle={styles.desktopMenuWrapper}>
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