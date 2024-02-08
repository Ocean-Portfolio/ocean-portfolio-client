import { PropsWithChildren } from 'react';
import { getStaticContext } from '@/utils/context/StaticContext';
import { ContactSectionProps, StaticContextContact } from './Contact.context';
import {
  contentWrapStyle,
  descriptionStyle,
  dummyStyle,
  emailLinkStyle,
  titleStyle,
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
  return <h1 className={titleStyle}>{title}</h1>;
};

const Content = ({ children }: PropsWithChildren) => {
  return <article className={contentWrapStyle}>{children}</article>;
};

const EmailLink = ({ children }: PropsWithChildren) => {
  const { data } = getStaticContext(StaticContextContact);
  return (
    <a className={emailLinkStyle} href={`mailto:${data.email}`}>
      {data.email}
      {children}
    </a>
  );
};

const Description = () => {
  const { data } = getStaticContext(StaticContextContact);
  return <span className={descriptionStyle}>{data.email_description}</span>;
};

const Dummy = () => {
  const { data } = getStaticContext(StaticContextContact);
  return <span className={dummyStyle}>{data.email_description}</span>;
};

Contact.Title = Title;
Contact.Content = Content;
Contact.EmailLink = EmailLink;
Contact.Description = Description;
Contact.Dummy = Dummy;

export default Contact;
