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
    JaeyoonMainColorTokenInterface {}

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
  | 'sungyeon-05';

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
  | JaeyoonMainColorToken;

type DisplayTypoToken =
  | 'display-xl-bold'
  | 'display-l-bold'
  | 'display-m-bold'
  | 'display-s-medium';

type GNBTypoToken =
  | 'GNB-l-bold'
  | 'GNB-l-medium'
  | 'GNB-m-bold'
  | 'GNB-m-medium';

type TitleTypoToken =
  | 'title-xl-bold'
  | 'title-l-bold'
  | 'title-m-bold'
  | 'title-s-medium'
  | 'title-s-semibold';

type ParagraphLTypoToken =
  | 'paragraph-l-bold'
  | 'paragraph-l-medium'
  | 'paragraph-l-semibold';

type ParagraphMTypoToken =
  | 'paragraph-m-bold'
  | 'paragraph-m-medium'
  | 'paragraph-m-semibold';

type ParagraphSTypoToken = 'paragraph-s-medium' | 'paragraph-s-regular';

type CaptionTypoToken = 'caption-m-semibold' | 'caption-m-medium';

type ODSTypoToken =
  | DisplayTypoToken
  | GNBTypoToken
  | TitleTypoToken
  | ParagraphLTypoToken
  | ParagraphMTypoToken
  | ParagraphSTypoToken
  | CaptionTypoToken;
