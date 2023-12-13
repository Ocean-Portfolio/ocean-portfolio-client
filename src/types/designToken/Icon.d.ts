// Icon

type CommonIconToken =
  | 'HAMBURGER'
  | 'DOWN_ARROW'
  | 'UP_ARROW'
  | 'LEFT_ARROW'
  | 'ROUND_CLOSE'
  | 'NORMAL_CLOSE'
  | 'LARGE_CLOSE';

type CompanyIconToken =
  | 'GOOGLE'
  | 'FACEBOOK'
  | 'TWITTER'
  | 'LINKEDIN'
  | 'INSTAGRAM'
  | 'YOUTUBE'
  | 'PINTEREST'
  | 'MEDIUM'
  | 'GITHUB'
  | 'FIGMA'
  | 'DRIBBBLE'
  | 'TIKTOK'
  | 'WHATSAPP'
  | 'BEHANCE'
  | 'NOTION'
  | 'DISQUITE'
  | 'TELEGRAM';

type ColorIconToken = 'BRAND' | 'GRAY' | 'WHITE';

type BackgroundIconToken = 'NONE' | 'CIRCULAR' | 'RECTANGLAR';

type StateIconToken = 'DEFAULT' | 'HOVER';

interface ODSIconTokenInterface {
  color: ColorIconToken;
  background: BackgroundIconToken;
  state: StateIconToken;
}
