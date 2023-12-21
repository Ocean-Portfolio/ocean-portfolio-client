import { getClient } from '@/apollo/apollo-client';
import Introduce from '@/components/Introduce/Introduce';
import { getImageByIdQuery } from '@/helper/getImageByIdQuery';

interface Props {
  title: string;
  slogan: string;
  intro_text: string;
  image_id: number;
}

const IntroduceContainer = async ({
  title,
  slogan,
  intro_text,
  image_id,
}: Props) => {
  const apolloClient = getClient();
  const imgData = await getImageByIdQuery(apolloClient, image_id);

  return (
    <Introduce>
      <Introduce.Title text={title} />
      <Introduce.BodyWrap>
        <Introduce.Face
          src={imgData?.data.getImageById.storage_url || ''}
          alt={imgData?.data.getImageById.description || ''}
        />
        <Introduce.AboutMe slogan={slogan} intro_text={intro_text} />
      </Introduce.BodyWrap>
    </Introduce>
  );
};

export default IntroduceContainer;
