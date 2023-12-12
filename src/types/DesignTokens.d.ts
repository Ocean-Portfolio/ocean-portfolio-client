interface GrayScaleTokenInterface {
  'gray-scale-00': string;
  'gray-scale-01': string;
  'gray-scale-02': string;
  'gray-scale-03': string;
  'gray-scale-04': string;
  'gray-scale-05': string;
  'gray-scale-06': string;
}

interface JaeyoonMainColorTokenInterface {
  'jaeyoon-01': string;
  'jaeyoon-02': string;
  'jaeyoon-03': string;
  'jaeyoon-04': string;
  'jaeyoon-05': string;
}

interface SungyeonMainColorTokenInterface {
  'sungyeon-01': string;
  'sungyeon-02': string;
  'sungyeon-03': string;
  'sungyeon-04': string;
  'sungyeon-05': string;
  'sungyeon-primary-200': string;
  'sungyeon-tertiary-100': string;
  'sungyeon-tertiary-200': string;
}

interface YejiMainColorTokenInterface {
  'yeji-01': string;
  'yeji-02': string;
  'yeji-03': string;
  'yeji-04': string;
  'yeji-05': string;
}

interface ODSColorTokenInterface
  extends GrayScaleTokenInterface,
    SungyeonMainColorTokenInterface,
    YejiMainColorTokenInterface,
    JaeyoonMainColorTokenInterface {
  transparent: string;
}

type GrayScaleToken =
  | 'gray-scale-00'
  | 'gray-scale-01'
  | 'gray-scale-02'
  | 'gray-scale-03'
  | 'gray-scale-04'
  | 'gray-scale-05'
  | 'gray-scale-06';

type SungyeonMainColorToken =
  | 'sungyeon-01'
  | 'sungyeon-02'
  | 'sungyeon-03'
  | 'sungyeon-04'
  | 'sungyeon-05'
  | 'sungyeon-primary-200'
  | 'sungyeon-tertiary-100'
  | 'sungyeon-tertiary-200';

type YejiMainColorToken =
  | 'yeji-01'
  | 'yeji-02'
  | 'yeji-03'
  | 'yeji-04'
  | 'yeji-05';

type JaeyoonMainColorToken =
  | 'jaeyoon-01'
  | 'jaeyoon-02'
  | 'jaeyoon-03'
  | 'jaeyoon-04'
  | 'jaeyoon-05';

type ODSColorToken =
  | GrayScaleToken
  | SungyeonMainColorToken
  | YejiMainColorToken
  | JaeyoonMainColorToken
  | 'transparent';

type ColorThemeToken = 'sungyeon' | 'yeji' | 'jaeyoon';

type DisplayTextToken =
  | 'display-xl-bold'
  | 'display-l-bold'
  | 'display-m-bold'
  | 'display-s-medium';

type GNBTextToken =
  | 'GNB-l-bold'
  | 'GNB-l-medium'
  | 'GNB-m-bold'
  | 'GNB-m-medium';

type TitleTextToken =
  | 'title-xl-bold'
  | 'title-l-bold'
  | 'title-m-bold'
  | 'title-s-medium'
  | 'title-s-semibold';

type ParagraphLTextToken =
  | 'paragraph-l-bold'
  | 'paragraph-l-medium'
  | 'paragraph-l-semibold';

type ParagraphMTextToken =
  | 'paragraph-m-bold'
  | 'paragraph-m-medium'
  | 'paragraph-m-semibold';

type ParagraphSTextToken = 'paragraph-s-medium' | 'paragraph-s-regular';

type CaptionTextToken = 'caption-m-semibold' | 'caption-m-medium';

type ODSTextToken =
  | DisplayTextToken
  | GNBTextToken
  | TitleTextToken
  | ParagraphLTextToken
  | ParagraphMTextToken
  | ParagraphSTextToken
  | CaptionTextToken;

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

type SpacingToken =
  | 'spacer-0'
  | 'spacer-025'
  | 'spacer-10'
  | 'spacer-15'
  | 'spacer-20'
  | 'spacer-30'
  | 'spacer-40'
  | 'spacer-50'
  | 'spacer-60'
  | 'spacer-80'
  | 'spacer-100';

type ImageSizeToken =
  | 'image-50'
  | 'image-65'
  | 'image-75'
  | 'image-100'
  | 'image-115'
  | 'image-150'
  | 'image-200';