import { render, screen } from '@testing-library/react';
import React from 'react';
import KeywordList from '@/components/KeywordList/KeywordList';
import { StaticContextKeywordList } from './KeywordList.context';

describe('KeywordList Component', () => {
  const mockData = [
    {
      id: '1',
      main_text: 'Test Text 1',
      description: 'Test Description 1',
      visible_status: 'VISIBLE' as const,
      image: {
        id: '1',
        name: '',
        storage_url: 'https://picsum.photos/200/300',
        description: 'alt',
      },
    },
  ];

  it('renders KeywordList and its children correctly', () => {
    render(
      <StaticContextKeywordList.Provider
        value={{ title: 'Test Title', data: mockData }}
      >
        <KeywordList title="Test Title" data={mockData}>
          <KeywordList.Title />
          <KeywordList.Article />
        </KeywordList>
      </StaticContextKeywordList.Provider>,
    );

    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Text 1')).toBeInTheDocument();
    expect(screen.getByText('Test Description 1')).toBeInTheDocument();
    // Add more assertions as necessary
  });

  // Additional tests for checking context data usage, prop passing, etc.
});
