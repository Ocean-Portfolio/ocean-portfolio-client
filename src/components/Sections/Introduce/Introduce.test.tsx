import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Introduce from './Introduce';

describe('Introduce Component', () => {
  const mockProps = {
    src: 'https://cdn.brand-ing.me/profiles/2023-12-11_my_profile_img.png',
    alt: 'test-image-alt',
    slogan: 'test-slogan',
    intro_text: 'test-intro-text',
    text: 'test-title-text',
  };

  it('renders Introduce and subcomponents with correct properties', () => {
    render(
      <Introduce>
        <Introduce.Title text={mockProps.text} />
        <Introduce.BodyWrap>
          <Introduce.Face src={mockProps.src} alt={mockProps.alt} />
          <Introduce.AboutMe
            slogan={mockProps.slogan}
            intro_text={mockProps.intro_text}
          />
        </Introduce.BodyWrap>
      </Introduce>,
    );

    // Check Title
    expect(
      screen.getByRole('heading', { name: mockProps.text }),
    ).toBeInTheDocument();

    // Check AboutMe
    expect(screen.getByText(mockProps.slogan)).toBeInTheDocument();
    expect(screen.getByText(mockProps.intro_text)).toBeInTheDocument();
  });
});
