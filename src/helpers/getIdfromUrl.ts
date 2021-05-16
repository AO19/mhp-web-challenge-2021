const getIdfromUrl = (url: string) => {
  const idMatch = url.match(/([^/]+$)/g);
  if (idMatch) {
    return idMatch[0];
  } else {
    return null;
  }
};

export default getIdfromUrl;
