const getData = (APIURL) => {
  const myData = fetch(APIURL)
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.error(error));
  return myData;
};

export default getData;
