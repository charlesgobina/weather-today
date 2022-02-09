function importAll(r) {
  const images = {};
  r.keys().map((item) => {
    images[item.replace('./', '')] = r(item);
    return null;
  });
  return images;
}

export const dayImages = importAll(require.context('../images/day', false, /\.(png|jpe?g|svg)$/));
export const nightImages = importAll(require.context('../images/night', false, /\.(png|jpe?g|svg)$/));
