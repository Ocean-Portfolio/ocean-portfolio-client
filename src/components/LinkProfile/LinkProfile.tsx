import classNames from 'classnames';
import Link from 'next/link';
import { backgroundColorVariants } from '@/styles/common/color.css';
import Profile from '../Profile/Profile';
import { userPageWithId } from './helper/userPageWithId';
import { linkStyle, wrapStyle } from './LinkProfile.css';

interface Props {
  user_id: string;
  name: string;
  job?: string | null;
  src: string;
  alt: string;
  social: {
    company: CompanyIconToken;
    color: 'GRAY';
    background: 'NONE';
    state: 'DEFAULT';
    url: string;
  }[];
}

const LinkProfile = async ({ user_id, name, job, src, alt, social }: Props) => {
  return (
    <div
      className={classNames(
        wrapStyle,
        backgroundColorVariants['gray-scale-00'],
      )}
    >
      <Profile
        layout="VERTICAL"
        src={src}
        alt={alt}
        name={name}
        job={job || ''}
        social={social}
      />
      <Link className={linkStyle} href={userPageWithId(Number(user_id))} />
    </div>
  );
};

export default LinkProfile;
