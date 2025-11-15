const name = document.getElementById("name");
const age = document.getElementById("age");
const contact = document.getElementById("contact");
const tBody = document.querySelector("#Table tbody");

function handleSubmit(e) {
  e.preventDefault();

  const UserData = {
    Name: name.value,
    Age: age.value,
    contact: contact.value,
  };

  const getData = JSON.parse(localStorage.getItem("UserData")) || [];
  getData.push(UserData);
  localStorage.setItem("UserData", JSON.stringify(getData));

  displayData();
}

function displayData() {
  const data = JSON.parse(localStorage.getItem("UserData")) || [];
  tBody.innerHTML = "";

  data.forEach((item, index) => {
    console.log(index);
    const row = document.createElement("tr");
    row.innerHTML = `
          <td>${item.Name}</td>
          <td>${item.Age}</td>
          <td>${item.contact}</td>`;

    tBody.appendChild(row);
  });
}
displayData();

function searchTable() {
  let input = document.getElementById("searchInput").value.toLowerCase();
  let rows = document.querySelectorAll("#Table tbody tr");

  rows.forEach((row) => {
    let text = row.textContent.toLowerCase();
    row.style.display = text.includes(input) ? "" : "none";
  });
}
