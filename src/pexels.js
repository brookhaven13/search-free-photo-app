const authEndpoint = "https://api.pexels.com/v1";

const aipKey = "563492ad6f9170000100000125c21e996ae6487abb6d8e349a3f2684";

const headers = {
  Accept: "application/json",
  Authorization: aipKey,
};

export const getCuratedPhotos = async () => {
  const condition = "page=1&per_page=10"; // Initial condition get 5 photos
  const url = `${authEndpoint}/curated?${condition}`;
  const dataFetch = await fetch(url, {
    method: "GET",
    headers: headers,
  });
  return dataFetch.json();
};

export const SearchPhotos = async (input) => {
  const condition = "page=1&per_page=10"; // Initial condition get 5 photos
  const url = `${authEndpoint}/search?query=${input}&${condition}`;
  const dataFetch = await fetch(url, {
    method: "GET",
    headers: headers,
  });
  return dataFetch.json();
};

export const loadMorePhotos = async (nextPageUrl) => {
  let url = "";
  let authEndpoint = nextPageUrl.split("?")[0];
  let pageSize = nextPageUrl.split("?")[1].split("&")[1];
  console.log(pageSize);
  let page = parseInt(nextPageUrl.split("?")[1].split("&")[0].split("=")[1]);
  if (nextPageUrl.includes("curated")) {
    url = `${authEndpoint}?page=${page}&${pageSize}`;
  }

  if (nextPageUrl.includes("search")) {
    let query = nextPageUrl.split("?")[1].split("&")[2];
    url = `${authEndpoint}?page=${page}&${pageSize}&${query}`;
  }

  const dataFetch = await fetch(url, {
    method: "GET",
    headers: headers,
  });
  return dataFetch.json();
};
