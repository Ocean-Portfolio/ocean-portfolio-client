import { ASSET_ENDPOINT } from '@/const/endpoint';

const iconAssetEndpoint = (iconName: string, prefix?: string) => {
  const prefixPath = prefix ? `${prefix}` : '';
  return `${ASSET_ENDPOINT}/icons${prefixPath}/${iconName.toLowerCase()}`;
};

export default iconAssetEndpoint;
