export const getContrastYIQ = (color) => {
  const r = parseInt(color.substr(0, 2), 16);
  const g = parseInt(color.substr(2, 2), 16);
  const b = parseInt(color.substr(4, 2), 16);
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 220 ? '#000000' : '#ffffff';
};

export const getRandomHexColor = () => `#${`0${(~~(Math.random() * 16777215)).toString(16)}`.slice(-6)}`;
