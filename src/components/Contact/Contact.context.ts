import { GetContactBySectionIdQuery } from '@/types/graphql';
import { createStaticContext } from '@/utils/context/StaticContext';

export interface ContactSectionProps {
  title: string;
  data: GetContactBySectionIdQuery['getContactBySectionId'];
}

export const StaticContextContact = createStaticContext<ContactSectionProps>({
  title: '',
  data: {
    id: '0',
    email: '',
    email_description: '',
    visible_status: 'VISIBLE' as VisibleStatusToken,
    section_id: 0,
  },
});
