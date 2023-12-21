import { ApolloQueryResult } from '@apollo/client';
import React, { PropsWithChildren } from 'react';
import {
  GetImageByIdQuery,
  GetKeywordsByCategoryIdQuery,
} from '@/types/graphql';
import Keyword from '../Keyword/Keyword';
import { articleWrapStyle, titleStyle, wrapStyle } from './KeywordList.css';

const KeywordList = ({ children }: PropsWithChildren) => {
  return <section className={wrapStyle}>{children}</section>;
};

const Title = ({ children }: PropsWithChildren) => {
  return <h1 className={titleStyle}>{children}</h1>;
};

interface ArticleProps {
  keywordList: ApolloQueryResult<GetKeywordsByCategoryIdQuery>[];
  imageList: Array<ApolloQueryResult<GetImageByIdQuery> | undefined>;
}

const Article = ({ keywordList, imageList }: ArticleProps) => {
  return (
    <article className={articleWrapStyle}>
      {keywordList.map((keyword, idx) => {
        return (
          <Keyword
            key={keyword.data.getKeywordsByCategoryId.id}
            direction={idx % 2 ? 'RIGHT' : 'LEFT'}
            src={imageList[idx]?.data.getImageById.storage_url || ''}
            alt={imageList[idx]?.data.getImageById.description || ''}
            main_text={keyword.data.getKeywordsByCategoryId.main_text || ''}
            description={keyword.data.getKeywordsByCategoryId.description || ''}
          />
        );
      })}
    </article>
  );
};

KeywordList.Title = Title;
KeywordList.Article = Article;

export default KeywordList;
