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
