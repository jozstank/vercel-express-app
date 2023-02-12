const fetchData = async () => {
  const apiUrl = localStorage.getItem("apiUrl");
  if (apiUrl) {
    const response = await fetch(`${apiUrl}/users`);
    const data = await response.json();
    console.log(await data);
  } else {
    window.location.href = "/api";
  }
};
fetchData();
