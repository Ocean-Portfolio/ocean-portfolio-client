type HTMLTextElements =
  | HTMLSpanElement
  | HTMLParagraphElement
  | HTMLHeadingElement
  | HTMLDivElement
  | HTMLQuoteElement
  | HTMLPreElement
  | HTMLLabelElement
  | HTMLLIElement
  | HTMLTableCaptionElement
  | HTMLTableColElement
  | HTMLTableDataCellElement
  | HTMLTableHeaderCellElement
  | HTMLTableRowElement
  | HTMLTableSectionElement;

type HTMLTextTags =
  | 'span'
  | 'p'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'div'
  | 'q'
  | 'pre'
  | 'label'
  | 'li'
  | 'caption'
  | 'col'
  | 'td'
  | 'th'
  | 'tr'
  | 'thead'
  | 'tbody'
  | 'tfoot';

type HTMLAllTagNames = keyof HTMLElementTagNameMap;

type AutoFlowProp = string | boolean;
