import classNames from 'classnames';
import React, { PropsWithChildren, useContext } from 'react';
import Button from '@/composable/Button/Button';
import CommonIcon from '@/composable/Icon/CommonIcon';
import useOceanSwiperButton from '@/hook/useOceanSwiperButton';
import { useReactiveLayout } from '@/hook/useReactiveLayout';
import { W100 } from '@/styles/common/layout.css';
import { createNestedArray } from '@/utils/array/createNestedArray';
import { getStaticContext } from '@/utils/context/StaticContext';
import SkillCard from '../Card/Skill/SkillCard';
import OceanSwiper from '../OceanSwiper/OceanSwiper';
import TextTab from '../TextTab/TextTab';
import TextTabGroup from '../TextTabGroup/TextTabGroup';
import {
  DispatcherContextSkill,
  StaticContextSkill,
  ValueContextSkill,
} from './Skill.context';
import {
  buttonGroupStyle,
  iconVariants,
  interactionBarStyle,
  navigationButtonStyle,
  readMoreButtonStyle,
  swiperItemStyle,
  swiperTopStyle,
  swiperWrapStyle,
} from './SkillSlide.css';

const SkillSlide = () => {
  const { data, userAgent } = getStaticContext(StaticContextSkill);
  const { selectedIdx } = useContext(ValueContextSkill);
  const { breakpointL, breakpointM } = useReactiveLayout(userAgent);

  const getSizeToken = () => {
    if (breakpointL) return 'MEDIUM';
    return 'LARGE';
  };

  const getCardLength = () => {
    if (breakpointM) return 6;
    if (breakpointL) return 7;
    return 8;
  };

  // TODO: Remove this after implementing the actual data fetching logic
  const displayData = createNestedArray(
    [
      ...data[selectedIdx].skills,
      ...data[selectedIdx].skills,
      ...data[selectedIdx].skills,
      ...data[selectedIdx].skills,
    ],
    getCardLength(),
  );

  return (
    <OceanSwiper className={swiperWrapStyle}>
      <OceanSwiper.Top className={swiperTopStyle}>
        <SkillSlide.Menu />
        <SkillSlide.InteractionBar>
          <SkillSlide.NavigateButton direction="PREV" />
          <SkillSlide.NavigateButton direction="NEXT" />
        </SkillSlide.InteractionBar>
      </OceanSwiper.Top>
      <OceanSwiper.Main perView={1} hiddenNavigation pagination={false}>
        {displayData.map((item, idx) => {
          return (
            <OceanSwiper.Slide
              key={item[idx] ? item[idx].id : idx}
              className={classNames(W100, swiperItemStyle)}
            >
              {item.map((category) => {
                return (
                  <SkillCard
                    key={category.id}
                    sizeToken={getSizeToken()}
                    src={category.image?.storage_url || ''}
                    alt={category.image?.description || ''}
                    name={category.name}
                  />
                );
              })}
              {displayData[idx + 1] && displayData[idx + 1][0] && (
                <SkillCard
                  sizeToken={getSizeToken()}
                  src={displayData[idx + 1][0].image?.storage_url || ''}
                  alt={displayData[idx + 1][0].image?.description || ''}
                  name={displayData[idx + 1][0].name}
                />
              )}
            </OceanSwiper.Slide>
          );
        })}
      </OceanSwiper.Main>
    </OceanSwiper>
  );
};

const Menu = () => {
  const { data } = getStaticContext(StaticContextSkill);
  const { selectedIdx, isTabOpen } = useContext(ValueContextSkill);
  const { setSelectedIdx, setIsTabOpen } = useContext(DispatcherContextSkill);

  const displayData = isTabOpen ? data : data.slice(0, 4);

  return (
    <>
      <TextTabGroup>
        {displayData.map((category, idx) => {
          return (
            <TextTab
              key={category.id}
              isSelected={selectedIdx === idx}
              onClick={() => {
                setSelectedIdx(idx);
              }}
            >
              {category.name}
            </TextTab>
          );
        })}
        {!isTabOpen && (
          <TextTab
            onClick={() => {
              setIsTabOpen((prev) => !prev);
            }}
          >
            …
          </TextTab>
        )}
      </TextTabGroup>
    </>
  );
};

const InteractionBar = ({ children }: PropsWithChildren) => {
  return (
    <div className={interactionBarStyle}>
      <Button as="button" type="button" className={readMoreButtonStyle}>
        전체 기술 보기
      </Button>
      <div className={buttonGroupStyle}>{children}</div>
    </div>
  );
};

interface NavigateButtonProps {
  direction: 'PREV' | 'NEXT';
}

const NavigateButton = ({ direction }: NavigateButtonProps) => {
  const { handleClick } = useOceanSwiperButton(direction);
  return (
    <Button
      as="button"
      type="button"
      className={navigationButtonStyle}
      onClick={handleClick}
    >
      <CommonIcon
        className={iconVariants[direction]}
        variant="LEFT_ARROW_SECONDARY_VARIANT"
        userToken="sungyeon"
        width={24}
        height={24}
      />
    </Button>
  );
};

SkillSlide.Menu = Menu;
SkillSlide.InteractionBar = InteractionBar;
SkillSlide.NavigateButton = NavigateButton;

export default SkillSlide;
