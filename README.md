# next-js-fast-starterkit

## 버전 고정

- pnpm@7.26.3 ( pnpm-lock )
- next@13.4.7 ( App Router )

## 구성

- pnpm
- next.js ( App Router )
- jest
- storybook
- eslint
- husky, lint-staged

## 설명

- next.js 13.4.7 이후 버전에서 storybook 의 필수 플러그인과 충돌 문제가 있어 버전 13.4.7 로 고정
- pnpm 8.x 이후 버전에서 storybook 빌드가 안되는 문제가 있어 7.26.3 으로 고정
- jest 설정이나 관련 패키지가 다소 오버헤드가 있을수 있음 (react-test-renderer, ts-jest)

## BreakPoint

| 반응형 대응

- 599 - 839 - 1023 - 1280 - default
- breakpoint-s - breakpoint-m - breakpoint-l - breakpoint-xl

| 기기별 타겟 px

- 0px ~ 599px Mobile
- 600px ~ 1023px Tablet
- 1024px ~ 1440px Laptop
- 1440px ~ FHD (Desktop)
