import React from 'react';
import Markdown from 'react-markdown';

interface Props {
  className?: string;
  value: string;
}

const MarkdownViewer = ({ className, value }: Props) => {
  return <Markdown className={className}>{value}</Markdown>;
};

export default MarkdownViewer;
