// Typography

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
