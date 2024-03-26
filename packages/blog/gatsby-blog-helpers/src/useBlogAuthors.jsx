import { useStaticQuery, graphql } from 'gatsby';
import dedupe from 'dedupe';
import { useContext } from 'react';
import { LanguageContext } from './useLanguageContext';

export const useBlogAuthors = () => {
  const { language } = useContext(LanguageContext);
  const { allArticleAuthor } = useStaticQuery(graphql`
    query allArticleAuthorQuery {
      allArticleAuthor {
        nodes {
          ...ArticleAuthor
          name
          namees: name
          description
          descriptiones: description
        }
      }
    }
  `);

  const authors = allArticleAuthor.nodes
    ? dedupe(allArticleAuthor.nodes, node => node.slug)
    : [];

  // Filter authors based on the current language, adjust the logic here
  const filteredAuthors = authors.map(author => ({
    ...author,
    name: language === 'es' ? author.namees : author.name,
    description: language === 'es' ? author.descriptiones : author.description,
  }));

  return filteredAuthors;
};
