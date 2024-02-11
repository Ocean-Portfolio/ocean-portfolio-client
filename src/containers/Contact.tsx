import React from 'react';
import { getClient } from '@/apollo/apollo-client';
import Contact from '@/components/Contact/Contact';
import { getContactBySectionIdQuery } from '@/helper/getContactByCategoryIdQuery';

interface ContactSectionProps {
  title: string;
  section_id: number;
}
const ContactContainer = async ({ title, section_id }: ContactSectionProps) => {
  const apolloClient = getClient();
  const contactData = await getContactBySectionIdQuery(
    apolloClient,
    section_id,
  );

  return (
    <Contact title={title} data={contactData.data.getContactBySectionId}>
      <Contact.Title />
      <Contact.Content>
        <Contact.EmailLink />
        <Contact.Description />
      </Contact.Content>
      <Contact.Send />
    </Contact>
  );
};

export default ContactContainer;
