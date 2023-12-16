import classNames from 'classnames';
import LinkProfileList from '@/components/LinkProfileList/server/LinkProfileList';
import Container from '@/composable/Container/Container';
import {
  backgroundColorVariants,
  colorVariants,
} from '@/styles/common/color.css';
import { defaultColorTheme } from '@/styles/theme/default.css';
import {
  captionStyle,
  profileListStyle,
  titleStyle,
  wrapStyle,
} from './page.css';

export default async function Home() {
  return (
    <Container
      as="main"
      className={classNames(
        defaultColorTheme,
        wrapStyle,
        backgroundColorVariants['tertiary'],
      )}
    >
      <h1 className={classNames(titleStyle, colorVariants['gray-scale-00'])}>
        Brand-ing Me
        <br />
        Ocean Portfolio
      </h1>

      <p
        className={classNames(captionStyle, colorVariants['secondary-variant'])}
      >
        Makers
      </p>
      <div
        className={classNames(
          profileListStyle,
          backgroundColorVariants['secondary-variant'],
        )}
      >
        <LinkProfileList />
      </div>
    </Container>
  );
}
