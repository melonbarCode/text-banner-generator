export const getContrastYIQ = (color: string) => {
  const r = parseInt(color.substring(0, 2), 16);
  const g = parseInt(color.substring(2, 4), 16);
  const b = parseInt(color.substring(4, 6), 16);
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 220 ? '#000000' : '#ffffff';
};

export const getRandomHexColor = () => `#${`0${(~~(Math.random() * 16777215)).toString(16)}`.slice(-6)}`;
