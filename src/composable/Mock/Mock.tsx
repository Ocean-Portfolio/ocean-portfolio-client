import React from 'react';

const origin = {
  desktop: {
    width: 2010,
    height: 1171,
  },
  mobile: {
    width: 240,
    height: 426,
  },
};

interface MockProps {
  src?: string;
  width?: string;
  height?: string;
  layoutRatio?: 1 | 0.75 | 0.5 | 0.25;
}

interface WrapProps extends MockProps {
  device: 'DESKTOP' | 'MOBILE';
}

const Mock = ({ device, ...rest }: WrapProps) => {
  return (
    <>
      {device === 'DESKTOP' && <Mock.Desktop {...rest} />}
      {device === 'MOBILE' && <Mock.Mobile {...rest} />}
    </>
  );
};

const Desktop = ({ src, width, height, layoutRatio }: MockProps) => {
  const originWidthWithRatio = layoutRatio
    ? origin.desktop.width * layoutRatio
    : origin.desktop.width;
  const originHeightWithRatio = layoutRatio
    ? origin.desktop.height * layoutRatio
    : origin.desktop.height;

  return (
    <svg
      data-testid="desktop-svg"
      width={width ? width : originWidthWithRatio}
      height={height ? height : originHeightWithRatio}
      viewBox="0 0 2010 1171"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g filter="url(#filter0_f_1118_4709)">
        <path
          d="M213.755 1136H1797.24C1814.33 1136 1855.68 1140.48 1889.61 1146C1923.53 1151.52 1935.12 1156 1915.48 1156H95.5164C75.8799 1156 87.4642 1151.52 121.391 1146C155.317 1140.48 196.67 1136 213.755 1136Z"
          fill="black"
          fillOpacity="0.4"
        />
      </g>
      <g filter="url(#filter1_dd_1118_4709)">
        <path
          d="M190.905 78.8C190.905 51.9175 190.905 38.4762 196.134 28.2085C200.734 19.1767 208.073 11.8336 217.101 7.23169C227.363 2 240.798 2 267.667 2H1742.33C1769.2 2 1782.64 2 1792.9 7.23169C1801.93 11.8336 1809.27 19.1767 1813.87 28.2085C1819.1 38.4762 1819.1 51.9175 1819.1 78.8V1043.2C1819.1 1070.08 1819.1 1083.52 1813.87 1093.79C1809.27 1102.82 1801.93 1110.17 1792.9 1114.77C1782.64 1120 1769.2 1120 1742.33 1120H267.667C240.798 1120 227.363 1120 217.101 1114.77C208.073 1110.17 200.734 1102.82 196.134 1093.79C190.905 1083.52 190.905 1070.08 190.905 1043.2V78.8Z"
          fill="#3A4245"
        />
      </g>
      <path
        d="M194.903 76.4C194.903 51.7577 194.903 39.4365 199.697 30.0244C203.913 21.7453 210.641 15.0141 218.916 10.7957C228.323 6 240.638 6 265.268 6H1744.73C1769.36 6 1781.68 6 1791.08 10.7957C1799.36 15.0141 1806.09 21.7453 1810.3 30.0244C1815.1 39.4365 1815.1 51.7577 1815.1 76.4V1045.6C1815.1 1070.24 1815.1 1082.56 1810.3 1091.98C1806.09 1100.25 1799.36 1106.99 1791.08 1111.2C1781.68 1116 1769.36 1116 1744.73 1116H265.268C240.638 1116 228.323 1116 218.916 1111.2C210.641 1106.99 203.913 1100.25 199.697 1091.98C194.903 1082.56 194.903 1070.24 194.903 1045.6V76.4Z"
        fill="#262C2D"
      />
      <path
        d="M198.901 74C198.901 51.5979 198.901 40.3969 203.259 31.8404C207.092 24.3139 213.208 18.1947 220.731 14.3597C229.283 10 240.479 10 262.87 10H1747.13C1769.52 10 1780.72 10 1789.27 14.3597C1796.79 18.1947 1802.91 24.3139 1806.74 31.8404C1811.1 40.3969 1811.1 51.5979 1811.1 74V1048C1811.1 1070.4 1811.1 1081.6 1806.74 1090.16C1802.91 1097.69 1796.79 1103.81 1789.27 1107.64C1780.72 1112 1769.52 1112 1747.13 1112H262.87C240.479 1112 229.283 1112 220.731 1107.64C213.208 1103.81 207.092 1097.69 203.259 1090.16C198.901 1081.6 198.901 1070.4 198.901 1048V74Z"
        fill="#121515"
      />
      <rect x="198.901" y="1059" width="1612.2" height="30" fill="#262C2D" />
      <mask
        id="mask0_1118_4709"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="232"
        y="68"
        width="1546"
        height="966"
      >
        <rect x="232.884" y="68" width="1544.23" height="966" fill="white" />
      </mask>
      <g mask="url(#mask0_1118_4709)">
        <rect
          x="232.884"
          y="68"
          width="1544.23"
          height="966"
          fill="url(#pattern0)"
        />
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1005 47C1008.04 47 1010.5 44.5376 1010.5 41.5C1010.5 38.4624 1008.04 36 1005 36C1001.96 36 999.503 38.4624 999.503 41.5C999.503 44.5376 1001.96 47 1005 47Z"
        fill="#262C2D"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1005 44.9375C1006.9 44.9375 1008.44 43.3985 1008.44 41.5C1008.44 39.6015 1006.9 38.0625 1005 38.0625C1003.1 38.0625 1001.56 39.6015 1001.56 41.5C1001.56 43.3985 1003.1 44.9375 1005 44.9375Z"
        fill="#121515"
      />
      <path
        opacity="0.4"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1005 40.8125C1005.38 40.8125 1005.69 40.5047 1005.69 40.125C1005.69 39.7453 1005.38 39.4375 1005 39.4375C1004.62 39.4375 1004.31 39.7453 1004.31 40.125C1004.31 40.5047 1004.62 40.8125 1005 40.8125Z"
        fill="#636F73"
      />
      <path
        d="M0 1091C0 1089.9 0.894985 1089 1.99901 1089H1003C1004.1 1089 1005 1089.9 1005 1091V1120H0V1091Z"
        fill="url(#paint0_linear_1118_4709)"
      />
      <path
        d="M2009.5 1091C2009.5 1089.9 2008.61 1089 2007.5 1089H1006.5C1005.4 1089 1004.5 1089.9 1004.5 1091V1120H2009.5V1091Z"
        fill="url(#paint1_linear_1118_4709)"
      />
      <path
        d="M884.56 1111H1125.44C1138.14 1111 1148.43 1101.15 1148.43 1089H861.571C861.571 1101.15 871.864 1111 884.56 1111Z"
        fill="#4E4F53"
      />
      <path
        d="M884.56 1111H1125.44C1138.14 1111 1148.43 1101.15 1148.43 1089H861.571C861.571 1101.15 871.864 1111 884.56 1111Z"
        fill="url(#paint2_linear_1118_4709)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1003.5 1120H0C0 1120 43.9781 1148 188.406 1148H1003.5H1005.5H1821.59C1966.02 1148 2010 1120 2010 1120H1005.5H1003.5Z"
        fill="url(#paint3_linear_1118_4709)"
      />
      <defs>
        <filter
          id="filter0_f_1118_4709"
          x="70.957"
          y="1121"
          width="1869.08"
          height="50"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="7.5"
            result="effect1_foregroundBlur_1118_4709"
          />
        </filter>
        <filter
          id="filter1_dd_1118_4709"
          x="186.905"
          y="0"
          width="1636.19"
          height="1126"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0.0823529 0 0 0 0 0.25098 0 0 0 0.14 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1118_4709"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0.0823529 0 0 0 0 0.25098 0 0 0 0.05 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_1118_4709"
            result="effect2_dropShadow_1118_4709"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_1118_4709"
            result="shape"
          />
        </filter>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_1118_4709"
            transform="matrix(0.000244141 0 0 0.000390279 0 -0.299292)"
          />
        </pattern>
        <linearGradient
          id="paint0_linear_1118_4709"
          x1="-1.72943e-06"
          y1="1105"
          x2="1005"
          y2="1105"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#303135" />
          <stop offset="0.0218797" stopColor="#535458" />
          <stop offset="0.0363004" stopColor="#4D4E52" />
          <stop offset="0.05818" stopColor="#333438" />
          <stop offset="0.0865241" stopColor="#35363A" />
          <stop offset="0.135753" stopColor="#4E4F53" />
          <stop offset="0.756906" stopColor="#818286" />
          <stop offset="1" stopColor="#818286" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1118_4709"
          x1="2009.5"
          y1="1105"
          x2="1004.5"
          y2="1105"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#303135" />
          <stop offset="0.0218797" stopColor="#535458" />
          <stop offset="0.0363004" stopColor="#4D4E52" />
          <stop offset="0.05818" stopColor="#333438" />
          <stop offset="0.0865241" stopColor="#35363A" />
          <stop offset="0.135753" stopColor="#4E4F53" />
          <stop offset="0.756906" stopColor="#818286" />
          <stop offset="1" stopColor="#818286" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_1118_4709"
          x1="861.571"
          y1="1100"
          x2="1148.43"
          y2="1100"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopOpacity="0.5" />
          <stop offset="0.139373" stopColor="#818487" stopOpacity="0" />
          <stop offset="0.860627" stopColor="#818487" stopOpacity="0" />
          <stop offset="1" stopOpacity="0.5" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_1118_4709"
          x1="1005"
          y1="1120"
          x2="1005"
          y2="1148"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#303135" />
          <stop offset="1" stopColor="#08090D" />
        </linearGradient>
        <image
          id="image0_1118_4709"
          width="4096"
          height="4096"
          xlinkHref={src || '/Screen.svg'}
        />
      </defs>
    </svg>
  );
};

const Mobile = ({ src, width, height, layoutRatio }: MockProps) => {
  const originWidthWithRatio = layoutRatio
    ? origin.mobile.width * layoutRatio
    : origin.mobile.width;
  const originHeightWithRatio = layoutRatio
    ? origin.mobile.height * layoutRatio
    : origin.mobile.height;

  return (
    <svg
      data-testid="mobile-svg"
      width={width ? width : originWidthWithRatio}
      height={height ? height : originHeightWithRatio}
      viewBox="0 0 240 426"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g clipPath="url(#clip0_1383_5957)">
        <g filter="url(#filter0_d_1383_5957)">
          <path
            d="M0.856934 115.725C0.856934 115.156 1.3176 114.696 1.88586 114.696H2.40033V151.566H1.88586C1.3176 151.566 0.856934 151.105 0.856934 150.537V115.725Z"
            fill="#7D62A6"
          />
          <path
            d="M0.856934 68.9093C0.856934 68.341 1.3176 67.8804 1.88586 67.8804H2.40033V104.75H1.88586C1.3176 104.75 0.856934 104.29 0.856934 103.721V68.9093Z"
            fill="#7D62A6"
          />
          <path
            d="M237.682 93.4321H238.197C238.765 93.4321 239.226 93.8928 239.226 94.4611V150.538C239.226 151.106 238.765 151.567 238.197 151.567H237.682V93.4321Z"
            fill="#7D62A6"
          />
          <g
            style={{
              mixBlendMode: 'multiply',
            }}
            filter="url(#filter1_f_1383_5957)"
          >
            <path
              d="M2.40039 33.0684V51.1603"
              stroke="black"
              strokeWidth="0.171488"
            />
          </g>
          <g
            style={{
              mixBlendMode: 'multiply',
            }}
            filter="url(#filter2_f_1383_5957)"
          >
            <path
              d="M2.40039 68.0522V104.665"
              stroke="black"
              strokeWidth="0.171488"
            />
          </g>
          <g clipPath="url(#clip1_1383_5957)">
            <rect
              x="2.40039"
              y="-0.000488281"
              width="235.282"
              height="485.997"
              rx="43.0435"
              fill="#7D62A6"
            />
            <rect
              x="8.23103"
              y="5.82967"
              width="223.621"
              height="474.336"
              rx="39.6138"
              fill="#F5F5F5"
              stroke="black"
              strokeWidth="6.85953"
            />
            <path
              d="M235.11 51.1016H237.683V54.5313H235.11V51.1016Z"
              fill="black"
              fillOpacity="0.35"
            />
            <path
              d="M145.587 2.56993C145.5 3.72103 144.538 4.62778 143.365 4.62778H96.7197C95.5461 4.62778 94.5844 3.72103 94.4968 2.56993H120.042H145.587Z"
              fill="black"
              stroke="#222222"
              strokeWidth="0.342977"
            />
            <rect
              x="11.6606"
              y="9.2583"
              width="216.761"
              height="467.477"
              rx="36.0125"
              fill="url(#pattern1)"
            />
            <ellipse
              cx="144.135"
              cy="25.9791"
              rx="6.43082"
              ry="6.43081"
              fill="#D9D9D9"
            />
            <path
              d="M185.207 -0.000976562H188.637V2.65709L185.207 2.4856V-0.000976562Z"
              fill="black"
              fillOpacity="0.35"
            />
            <path
              d="M2.3999 51.7881H4.97223L4.88648 55.1321L2.3999 55.2178V51.7881Z"
              fill="black"
              fillOpacity="0.35"
            />
          </g>
          <rect
            x="85.5728"
            y="16.1191"
            width="68.0809"
            height="19.7211"
            rx="9.86056"
            fill="black"
          />
          <path
            d="M141.135 29.7525C143.225 29.7525 144.994 28.1041 144.994 25.9797C144.994 23.8554 143.225 22.207 141.135 22.207C139.046 22.207 137.277 23.8554 137.277 25.9797C137.277 28.1041 139.046 29.7525 141.135 29.7525Z"
            fill="url(#paint0_linear_1383_5957)"
            fillOpacity="0.38"
            stroke="#0B0C0F"
            strokeWidth="2.57232"
          />
          <g filter="url(#filter3_f_1383_5957)">
            <path
              d="M141.834 24.0346C141.993 24.0012 142.201 23.9614 142.521 24.0227C142.752 24.0671 142.95 24.2089 143.109 24.3837C143.209 24.4942 143.291 24.62 143.351 24.7563L143.464 25.0113C143.552 25.2087 143.612 25.4171 143.644 25.6307C143.686 25.9192 143.676 26.213 143.613 26.4976L143.54 26.8253L143.529 26.8574C143.43 27.1437 143.201 27.3661 142.912 27.4566L142.784 27.4995C142.52 27.5883 142.231 27.5729 141.978 27.4566L141.495 27.1502C141.258 26.9992 141.095 26.7551 141.046 26.4777C141.029 26.3775 140.996 26.2795 140.949 26.1891C140.848 25.9944 140.812 25.7703 140.847 25.554L140.923 25.0774C140.937 24.9895 140.96 24.9032 140.99 24.8195L141.067 24.6067C141.134 24.4203 141.267 24.2646 141.441 24.1686C141.562 24.1016 141.698 24.0632 141.834 24.0346Z"
              fill="url(#paint1_radial_1383_5957)"
            />
          </g>
          <g filter="url(#filter4_f_1383_5957)">
            <path
              d="M139.49 24.1856L139.235 24.4175C139.183 24.4644 139.137 24.5166 139.096 24.5733L139.086 24.5879C139.054 24.6317 139.018 24.6723 138.979 24.7091C138.94 24.7454 138.91 24.7905 138.892 24.8407L138.873 24.8951C138.865 24.9181 138.851 24.9388 138.833 24.9555C138.812 24.975 138.797 25 138.79 25.0277L138.758 25.1458C138.747 25.1861 138.732 25.2249 138.712 25.2616C138.692 25.2984 138.677 25.3372 138.666 25.3775L138.623 25.5379L138.609 25.611C138.579 25.7691 138.563 25.9296 138.563 26.0905V26.2488C138.563 26.29 138.574 26.3305 138.593 26.3668C138.613 26.4031 138.623 26.4436 138.623 26.4848V26.5308C138.623 26.5686 138.628 26.6063 138.638 26.6429L138.654 26.7055C138.673 26.7742 138.699 26.8405 138.733 26.9031L138.801 27.0299L138.849 27.1377C138.896 27.2409 138.96 27.3353 139.038 27.4167L139.07 27.442C139.203 27.5478 139.398 27.5184 139.494 27.3788C139.532 27.3239 139.588 27.2835 139.652 27.2649C139.739 27.2397 139.809 27.1751 139.842 27.0904L139.906 26.924C139.934 26.8499 139.949 26.7713 139.949 26.692V26.3303V25.8486V25.6939C139.949 25.5692 139.976 25.4459 140.028 25.3325C140.08 25.2192 140.107 25.0959 140.107 24.9711V24.6788V24.4036V24.2746C140.107 24.1841 140.059 24.1004 139.98 24.055C139.911 24.0146 139.826 24.0097 139.752 24.0418L139.631 24.0944C139.579 24.1169 139.532 24.1477 139.49 24.1856Z"
              fill="url(#paint2_radial_1383_5957)"
            />
          </g>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d_1383_5957"
          x="0.856934"
          y="-2.57281"
          width="258.776"
          height="505.204"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="10.8038" dy="7.03102" />
          <feGaussianBlur stdDeviation="4.80167" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1383_5957"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1383_5957"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_f_1383_5957"
          x="1.6285"
          y="32.3824"
          width="1.54378"
          height="19.4637"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="0.342977"
            result="effect1_foregroundBlur_1383_5957"
          />
        </filter>
        <filter
          id="filter2_f_1383_5957"
          x="1.6285"
          y="67.3663"
          width="1.54378"
          height="37.9847"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="0.342977"
            result="effect1_foregroundBlur_1383_5957"
          />
        </filter>
        <pattern
          id="pattern1"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_1383_5957"
            transform="matrix(0.000877193 0 0 0.00040674 0 -0.00395027)"
          />
        </pattern>
        <filter
          id="filter3_f_1383_5957"
          x="139.805"
          y="22.9618"
          width="4.8938"
          height="5.62378"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="0.514465"
            result="effect1_foregroundBlur_1383_5957"
          />
        </filter>
        <filter
          id="filter4_f_1383_5957"
          x="137.535"
          y="22.9921"
          width="3.60132"
          height="5.54272"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="0.514465"
            result="effect1_foregroundBlur_1383_5957"
          />
        </filter>
        <linearGradient
          id="paint0_linear_1383_5957"
          x1="140.907"
          y1="27.8032"
          x2="140.853"
          y2="24.5982"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.0381927" stopColor="#112D71" />
          <stop offset="1" stopColor="#1D2D4B" />
        </linearGradient>
        <radialGradient
          id="paint1_radial_1383_5957"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(141.97 25.3629) rotate(81.5883) scale(1.91625 1.16554)"
        >
          <stop stopColor="#1D7EFF" />
          <stop offset="0.728416" stopColor="#153864" />
        </radialGradient>
        <radialGradient
          id="paint2_radial_1383_5957"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(139.573 24.8748) rotate(103.297) scale(2.83898 0.909023)"
        >
          <stop stopColor="#1D7EFF" />
          <stop offset="1" stopColor="#153864" />
        </radialGradient>
        <clipPath id="clip0_1383_5957">
          <rect width="240" height="426" fill="white" />
        </clipPath>
        <clipPath id="clip1_1383_5957">
          <rect
            x="2.40039"
            y="-0.000488281"
            width="235.282"
            height="485.997"
            rx="43.0435"
            fill="white"
          />
        </clipPath>
        <image
          id="image0_1383_5957"
          width="1140"
          height="2478"
          xlinkHref={src || '/MobileApp.svg'}
        />
      </defs>
    </svg>
  );
};

Mock.Desktop = Desktop;
Mock.Mobile = Mobile;

export default Mock;
