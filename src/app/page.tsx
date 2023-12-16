import LinkProfileList from '@/components/LinkProfileList/server/LinkProfileList';
import Home from '@/components/pages/Home/Home';

export default async function HomePage() {
  return (
    <Home.Wrap>
      <Home.Title />
      <Home.Caption />
      <Home.Makers>
        <LinkProfileList>
          <LinkProfileList.List />
        </LinkProfileList>
      </Home.Makers>
    </Home.Wrap>
  );
}
