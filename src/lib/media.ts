export const mediaQuery = (maxWidth: number): string => `
  @media (max-width: ${maxWidth}px)
`;

const media = {
  mobile: mediaQuery(450),
};

export default media;
