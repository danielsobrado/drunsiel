module.exports = async ({ data, language, setLanguage }) => {
  if (!data) return;

  const items = data.allArticleCategory.nodes;

  const texts = {
    en: {
      title: 'Regions',
      languageToggle: 'Español',
    },
    es: {
      title: 'Regiones',
      languageToggle: 'English',
    },
  };

  const { title, languageToggle } = texts[language];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  const menuItems = [
    {
      name: 'Languages',
      items: [
        {
          name: language === 'en' ? 'Español' : 'English',
          slug: '#',
          onClick: toggleLanguage,
        },
      ],
    },
    {
      name: title,
      items: items.map((item) => ({
        name: item.name,
        slug: `/${language}${item.slug}`,
      })),
    },
  ];

  return menuItems;
};