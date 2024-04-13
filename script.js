
function getInfo(){
    const loader = document.getElementById("loader");
const userList = document.getElementById("user-list");


loader.style.display = "block";


fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(data => {
  
    loader.style.display = "none";

    
    data.forEach(user => {
      const userElement = document.createElement("div");
      userElement.classList.add("user");

      const nameElement = document.createElement("p");
      nameElement.textContent = "Name: " + user.name;

      const emailElement = document.createElement("p");
      emailElement.textContent = "Email: " + user.email;

      const websiteElement = document.createElement("p");
      websiteElement.textContent = "Website: " + user.website;

      const idElement = document.createElement("p");
      idElement.textContent = "ID: " + user.id;

      userElement.appendChild(nameElement);
      userElement.appendChild(emailElement);
      userElement.appendChild(websiteElement);
      userElement.appendChild(idElement);

      userList.appendChild(userElement);
    });
  })
  .catch(error => {
    console.error("Error fetching data:", error);
    loader.style.display = "none";
  });

}

getInfo();