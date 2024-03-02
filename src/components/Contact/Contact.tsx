import { PropsWithChildren } from 'react';
import Clipboard from '@/composable/Clipboard/Clipboard';
import LinkedButton from '@/composable/LinkedButton/LinkedButton';
import SectionTitle from '@/composable/SectionTitle/SectionTitle';
import { getStaticContext } from '@/utils/context/StaticContext';
import { ContactSectionProps, StaticContextContact } from './Contact.context';
import {
  contentWrapStyle,
  descriptionStyle,
  emailLinkStyle,
  sendStyle,
  wrapStyle,
} from './Contact.css';

const Contact = ({
  children,
  title,
  data,
}: PropsWithChildren<ContactSectionProps>) => {
  return (
    <StaticContextContact.Provider
      value={{
        title,
        data,
      }}
    >
      <section className={wrapStyle}>{children}</section>
    </StaticContextContact.Provider>
  );
};

const Title = () => {
  const { title } = getStaticContext(StaticContextContact);
  return <SectionTitle>{title}</SectionTitle>;
};

const Content = ({ children }: PropsWithChildren) => {
  return <article className={contentWrapStyle}>{children}</article>;
};

const EmailLink = () => {
  const { data } = getStaticContext(StaticContextContact);
  return (
    <Clipboard as="button" className={emailLinkStyle} targetText={data.email}>
      {data.email}
    </Clipboard>
  );
};

const Description = () => {
  const { data } = getStaticContext(StaticContextContact);
  return <span className={descriptionStyle}>{data.email_description}</span>;
};

const Send = () => {
  const { data } = getStaticContext(StaticContextContact);
  return (
    <LinkedButton className={sendStyle} size="L" href={`mailto:${data.email}`}>
      메일 보내기
    </LinkedButton>
  );
};

Contact.Title = Title;
Contact.Content = Content;
Contact.EmailLink = EmailLink;
Contact.Description = Description;
Contact.Send = Send;

export default Contact;
