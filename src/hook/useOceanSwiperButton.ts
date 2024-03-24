import { getStaticContext } from '@/utils/context/StaticContext';
import { ContextValueOceanSwiper } from '../components/OceanSwiper/OceanSwiper.context';

const useOceanSwiperButton = (direction: ButtonDirection) => {
  const { buttonRefs } = getStaticContext(ContextValueOceanSwiper);

  const handleClick = () => {
    console.log(buttonRefs, 'buttonRefs');
    if (direction === 'PREV') {
      buttonRefs.prev?.click();
    } else {
      buttonRefs.next?.click();
    }
  };

  return { handleClick };
};

export default useOceanSwiperButton;
