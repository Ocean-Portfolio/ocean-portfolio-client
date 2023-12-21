import React, { PropsWithChildren } from 'react';
import Keyword from '../Keyword/Keyword';
import { articleWrapStyle, titleStyle, wrapStyle } from './KeywordList.css';

const KeywordList = ({ children }: PropsWithChildren) => {
  return <section className={wrapStyle}>{children}</section>;
};

const Title = ({ children }: PropsWithChildren) => {
  return <h1 className={titleStyle}>{children}</h1>;
};

const Article = ({ children }: PropsWithChildren) => {
  return <article className={articleWrapStyle}>{children}</article>;
};

KeywordList.Title = Title;
KeywordList.Article = Article;
KeywordList.Item = Keyword;

export default KeywordList;
