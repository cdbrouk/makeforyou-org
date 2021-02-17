export const mediaQuery = (maxWidth: number): string => `
  @media (max-width: ${maxWidth}px)
`;

const media = {
  mobile: mediaQuery(1024),
};

export default media;
