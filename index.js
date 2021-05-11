const query = async function () {
  try {
    const response = await fetch("https://api.fbi.gov/wanted/v1/list");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
    alert("something went wrong");
  }
};
