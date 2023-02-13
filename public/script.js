let apiUrl;
const fetchData = async () => {
  apiUrl = localStorage.getItem("apiUrl");
  if (apiUrl) {
    const response = await fetch(`${apiUrl}/users`);
    const data = await response.json();
    console.log(await data);
  } else {
    window.location.href = "/api";
  }
};
fetchData();

const fetchForPost = async () => {
  const file = document.querySelector("#file");
  const realArrayFile = [...file.files];
  const formData = new FormData();
  realArrayFile.forEach((fi) => formData.append("file", fi));
  const response = await fetch(`${apiUrl}/fileUpload`, {
    method: "POST",
    body: formData,
  });
};
