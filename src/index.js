const query = async function () {
  try {
    const response = await fetch(
      "https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?age-group=16&api-key=IjOw569tP2k0fNoFgXAAiEG4R2g1C3fm"
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
    alert("hey something went wrong");
  }
};
query();
