import Home from '@/components/Pages/Home/Home';
import LinkProfileList from '@/components/Sections/LinkProfileList/server/LinkProfileList';

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
