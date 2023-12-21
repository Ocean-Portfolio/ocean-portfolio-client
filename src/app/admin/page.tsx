'use client';
import MDEditor, { ContextStore } from '@uiw/react-md-editor';
import classNames from 'classnames';
import React, { useCallback, useState } from 'react';
import Markdown from 'react-markdown';
import { textPreStyle } from '@/styles/common/text.css';
import { defaultColorTheme } from '@/styles/theme/default.css';

const Admin = () => {
  const [value, setValue] = useState('**Hello world!!!**');
  const onChange = useCallback(
    (
      value: string | undefined,
      event: React.ChangeEvent<HTMLTextAreaElement> | undefined,
      state: ContextStore | undefined,
    ) => {
      setValue(value || '');
    },
    [],
  );

  console.log(value);

  return (
    <div className={classNames(defaultColorTheme)}>
      <p>계속해서 줄바꿈을 하고 싶다면 \ 을 사용하세용</p>
      <p>\ 문자 다음에 다른 텍스트가 있어야 \ 문자가 나타나지 않습니다</p>
      <div className="container">
        <MDEditor value={value} onChange={onChange} />
      </div>
      <Markdown className={classNames(textPreStyle)}>{value}</Markdown>
    </div>
  );
};

export default Admin;
