const query = async function () {
  try {
    const response = await fetch(
      "cors-anywhere.herokuapp.com/https://api.fbi.gov/wanted/v1/list"
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {}
};
query();
