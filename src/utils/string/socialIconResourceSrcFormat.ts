import capitalizeFirstLetter from './capitalizeFirstLetter';

const socialIconResourceSrcFormat = ({
  company,
  color,
  background,
  state,
}: SocialIconProps) => {
  return encodeURIComponent(
    `Company=${capitalizeFirstLetter(company)}, Color=${capitalizeFirstLetter(
      color,
    )}, Background=${capitalizeFirstLetter(
      background,
    )}, State=${capitalizeFirstLetter(state)}`,
  );
};

export default socialIconResourceSrcFormat;
