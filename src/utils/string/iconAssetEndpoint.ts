import { ASSET_ENDPOINT } from '@/const/endpoint';

const iconAssetEndpoint = (iconName: string) => {
  return `${ASSET_ENDPOINT}/icons/${iconName.toLowerCase()}`;
};

export default iconAssetEndpoint;
