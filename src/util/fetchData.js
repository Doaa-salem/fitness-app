export const exerciseOptions = {
  method: "GET",

  headers: {
    "X-RapidAPI-Key": "59c8380d23mshc93b3ba947130bfp186274jsndd51ab259e91",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const videoOptions = {
  method: "GET",

  headers: {
    "X-RapidAPI-Key": "59c8380d23mshc93b3ba947130bfp186274jsndd51ab259e91",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, option) => {
  const respons = await fetch(url, option);
  const data = await respons.json();
  return data;
};
