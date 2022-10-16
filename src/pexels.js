const authEndpoint = "https://api.pexels.com/v1";

const aipKey = "563492ad6f9170000100000125c21e996ae6487abb6d8e349a3f2684";

const condition = "page=1&per_page=15"; // get 15 photos per time.

export const getCuratedPhotos = async () => {
  const url = `${authEndpoint}/curated?${condition}`;
  const dataFetch = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: aipKey,
    },
  });
  return dataFetch.json();
};

export const SearchPhotos = (input) => {
  const url = `${authEndpoint}/search?query=${input}&${condition}`;
};
