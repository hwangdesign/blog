/**
 * 프로젝트 공통 클래스 상수
 */

export const CONTAINER =
  "mx-auto max-w-7xl xl:max-w-[1440px] 2xl:max-w-[1680px] 3xl:max-w-[1920px] 4xl:max-w-[2200px] px-6 sm:px-8 lg:px-12 2xl:px-12 3xl:px-14 4xl:px-16";

export const CONTAINER_SECTION =
  "mx-auto max-w-7xl xl:max-w-[1440px] 2xl:max-w-[1680px] 3xl:max-w-[1920px] 4xl:max-w-[2200px] px-6 py-8 sm:px-8 sm:py-12 lg:px-12 lg:py-16 2xl:px-12 3xl:px-14 4xl:px-16";

export const CARD_GRID =
  "grid gap-12 sm:gap-16 sm:grid-cols-2 lg:grid-cols-3 2xl:gap-16 3xl:gap-20";

/** Pinterest 스타일 모자이크 배열 (columns 기반) */
export const CARD_MASONRY =
  "columns-1 sm:columns-2 lg:columns-3 gap-x-16 sm:gap-x-20 2xl:gap-x-24 3xl:gap-x-28 [&>*]:break-inside-avoid [&>*]:mb-16 sm:[&>*]:mb-20 2xl:[&>*]:mb-24 3xl:[&>*]:mb-28";

export const SECTION_TITLE =
  "mb-6 text-xl font-bold text-black sm:mb-8 sm:text-2xl";

export const SECTION_TITLE_SM =
  "text-lg font-bold text-black sm:text-xl";

/** 토픽 블럭 + 커서 방사형 채우기 (라이트 배경용) */
export const TOPIC_FILL_HOVER =
  "topic-box topic-box--dark topic-fill-hover";

/** 토픽 블럭 + 커서 방사형 채우기 (다크 배경용, 메뉴 등) */
export const TOPIC_FILL_HOVER_LIGHT =
  "topic-box topic-box--light topic-fill-hover topic-fill-hover--light";

/** 더보기/인기토픽 버튼 스타일 (박스형) + 채우기 효과 */
export const BTN_FILL_HOVER =
  "topic-fill-hover inline-flex items-center justify-center border-2 border-black bg-transparent px-8 py-3 text-sm font-semibold text-black rounded-none cursor-pointer w-fit";
