import { getClient } from '@/apollo/apollo-client';
import { craeteQueryResource } from '@/apollo/createQueryResource';
import { queryFetcher } from '@/apollo/queryFetcher';
import Introduce from '@/components/Introduce/Introduce';
import { GET_INTRODUCES_BY_SECTION_ID } from '@/gql/queries/introduce';
import { getImageByIdQuery } from '@/helper/getImageByIdQuery';
import { getIntroducesBySectionIdQuery } from '@/helper/getIntroducesBySectionIdQuery';
import {
  GetIntroducesBySectionIdQuery,
  GetIntroducesBySectionIdQueryVariables,
} from '@/types/graphql';

interface Props {
  title: string;
  section_id: number;
}

const IntroduceContainer = async ({ title, section_id }: Props) => {
  const introduceResource = craeteQueryResource<
    GetIntroducesBySectionIdQuery,
    GetIntroducesBySectionIdQueryVariables
  >({
    query: GET_INTRODUCES_BY_SECTION_ID,
    variables: {
      section_id,
    },
  });

  const data = await queryFetcher(introduceResource);

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

  if ((visible_status as VisibleStatusToken) === 'NONE') return null;

  return (
    <Introduce id={id}>
      <Introduce.Title>{title}</Introduce.Title>
      <Introduce.BodyWrap>
        <Introduce.Face image={imgData?.data.getImageById} />
        <Introduce.AboutMe slogan={slogan} intro_text={intro_text} />
      </Introduce.BodyWrap>
    </Introduce>
  );
};

export default IntroduceContainer;
