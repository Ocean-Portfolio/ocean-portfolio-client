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

  const { id, slogan, intro_text, visible_status } =
    introduceData.data.getIntroducesBySectionId;

  return (
    <Introduce
      id={id}
      title={title}
      slogan={slogan}
      intro_text={intro_text}
      visible_status={visible_status as VisibleStatusToken}
      image={imgData?.data.getImageById}
    >
      <Introduce.BodyWrap>
        <Introduce.Face />
        <Introduce.AboutMe />
      </Introduce.BodyWrap>
    </Introduce>
  );
};

export default IntroduceContainer;
