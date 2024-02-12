import React, { PropsWithChildren } from 'react';
import SectionTitle from '@/composable/SectionTitle/SectionTitle';
import { getStaticContext } from '@/utils/context/StaticContext';
import Keyword from '../Keyword/Keyword';
import {
  KeywordListProps,
  StaticContextKeywordList,
} from './KeywordList.context';
import { articleWrapStyle, wrapStyle } from './KeywordList.css';

const KeywordList = ({
  children,
  title,
  data,
}: PropsWithChildren<KeywordListProps>) => {
  return (
    <StaticContextKeywordList.Provider value={{ title, data }}>
      <section className={wrapStyle}>{children}</section>
    </StaticContextKeywordList.Provider>
  );
};

const Title = () => {
  const { title } = getStaticContext(StaticContextKeywordList);
  return <SectionTitle>{title}</SectionTitle>;
};

const Article = () => {
  const { data } = getStaticContext(StaticContextKeywordList);
  return (
    <article className={articleWrapStyle}>
      {data.map((keyword, idx) => (
        <Keyword
          key={keyword.id}
          direction={idx % 2 ? 'RIGHT' : 'LEFT'}
          src={keyword.image?.storage_url || ''}
          alt={keyword.image?.description || ''}
          main_text={keyword.main_text || ''}
          description={keyword.description || ''}
        />
      ))}
    </article>
  );
};

KeywordList.Title = Title;
KeywordList.Article = Article;

export default KeywordList;
