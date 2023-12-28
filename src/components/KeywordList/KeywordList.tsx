import React, { PropsWithChildren } from 'react';
import Keyword from '../Keyword/Keyword';
import { articleWrapStyle, titleStyle, wrapStyle } from './KeywordList.css';

const KeywordList = ({ children }: PropsWithChildren) => {
  return <section className={wrapStyle}>{children}</section>;
};

const Title = ({ children }: PropsWithChildren) => {
  return <h1 className={titleStyle}>{children}</h1>;
};

interface ArticleProps {
  data: KeywordListContextData[];
}

const Article = ({ data }: ArticleProps) => {
  return (
    <article className={articleWrapStyle}>
      {data.map((keyword, idx) => {
        if (keyword.visible_status === 'NONE') return null;
        return (
          <Keyword
            key={keyword.id}
            direction={idx % 2 ? 'RIGHT' : 'LEFT'}
            src={keyword.image?.storage_url || ''}
            alt={keyword.image?.description || ''}
            main_text={keyword.main_text || ''}
            description={keyword.description || ''}
          />
        );
      })}
    </article>
  );
};

KeywordList.Title = Title;
KeywordList.Article = Article;

export default KeywordList;
