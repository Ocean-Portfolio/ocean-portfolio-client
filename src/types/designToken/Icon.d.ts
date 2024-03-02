// Icon

type CommonIconToken =
  | 'HAMBURGER'
  | 'DOWN_ARROW'
  | 'UP_ARROW'
  | 'LEFT_ARROW'
  | 'LEFT_ARROW_SECONDARY_VARIANT'
  | 'RIGHT_TAIL_ARROW'
  | 'RIGHT_TAIL_ARROW_MEDIUM'
  | 'RIGHT_TAIL_ARROW_SECONDARY_VARIANT'
  | 'ROUND_CLOSE'
  | 'NORMAL_CLOSE'
  | 'LARGE_CLOSE'
  | 'PLUS'
  | 'MEATBALL'
  | 'PAGINATION_SELECTED_SKY_BLUE_MEDIUM'
  | 'PAGINATION_SELECTED_SKY_BLUE_LARGE'
  | 'PAGINATION_UNSELECTED_SKY_BLUE_MEDIUM'
  | 'PAGINATION_UNSELECTED_SKY_BLUE_LARGE';

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
