import convToPascaleCase from './convToPascaleCase';

const iconResourceSrcFormat = ({
  company,
  color,
  background,
  state,
}: ODSIconTokenInterface) => {
  return encodeURIComponent(
    `Company=${convToPascaleCase(company)}, Color=${convToPascaleCase(
      color,
    )}, Background=${convToPascaleCase(background)}, State=${convToPascaleCase(
      state,
    )}`,
  );
};

export default iconResourceSrcFormat;
