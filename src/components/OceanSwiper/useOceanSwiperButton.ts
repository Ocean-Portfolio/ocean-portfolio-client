import { useSwiper } from 'swiper/react';

const useOceanSwiperButton = (direction: ButtonDirection) => {
  const swiper = useSwiper();

  const handleClick = () => {
    if (direction === 'PREV') {
      swiper.slidePrev();
    } else {
      swiper.slideNext();
    }
  };

  return { handleClick };
};

export default useOceanSwiperButton;
