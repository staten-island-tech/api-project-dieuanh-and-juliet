const query = async function () {
  try {
    const response = await fetch(
      "https://cors-anywhere.herokuapp.com/api.fbi.gov/wanted/v1/list"
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
query();
