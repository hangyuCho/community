export const breakpoints = {
  ph: 576, // phone
  pd: 768, // pad
  lt: 992, // laptop
  dt: 1200, // desktop
};

export const mediaQueries = (key) => (style) =>
  `@media (min-width: ${breakpoints[key]}px) { ${style} }`;
