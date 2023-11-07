import capitalizeFirstLetter from './string/capitalizeFirstLetter';

const iconResourceSrcFormat = ({
  company,
  color,
  background,
  state,
}: ODSIconTokenInterface) => {
  return encodeURIComponent(
    `Company=${capitalizeFirstLetter(company)}, Color=${capitalizeFirstLetter(
      color,
    )}, Background=${capitalizeFirstLetter(
      background,
    )}, State=${capitalizeFirstLetter(state)}`,
  );
};

export default iconResourceSrcFormat;
