import { ASSET_ENDPOINT } from '@/const/endpoint';

const iconAssetEndpoint = ({
  iconName,
  userName,
  prefix,
}: {
  iconName: string;
  userName?: string;
  prefix?: string;
}) => {
  const prefixPath = prefix ? `${prefix}` : '';
  return `${ASSET_ENDPOINT}/icons${prefixPath}/${iconName.toLowerCase()}${
    userName ? `_${userName.toLowerCase()}` : ''
  }`;
};

export default iconAssetEndpoint;
