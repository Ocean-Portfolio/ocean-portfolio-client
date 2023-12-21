import { getClient } from '@/apollo/apollo-client';
import Introduce from '@/components/Introduce/Introduce';
import { getImageByIdQuery } from '@/helper/getImageByIdQuery';
import { getIntroducesBySectionIdQuery } from '@/helper/getIntroducesBySectionIdQuery';

interface Props {
  title: string;
  section_id: number;
}

const IntroduceContainer = async ({ title, section_id }: Props) => {
  const apolloClient = getClient();

  const introduceData = await getIntroducesBySectionIdQuery(
    apolloClient,
    Number(section_id),
  );

  const imgData = await getImageByIdQuery(
    apolloClient,
    introduceData.data.getIntroducesBySectionId.image_id,
  );

  const { slogan, intro_text } = introduceData.data.getIntroducesBySectionId;

  return (
    <Introduce>
      <Introduce.Title text={title} />
      <Introduce.BodyWrap>
        <Introduce.Face
          src={imgData?.data.getImageById.storage_url || ''}
          alt={imgData?.data.getImageById.description || ''}
        />
        <Introduce.AboutMe
          slogan={slogan || ''}
          intro_text={intro_text || ''}
        />
      </Introduce.BodyWrap>
    </Introduce>
  );
};

export default IntroduceContainer;
