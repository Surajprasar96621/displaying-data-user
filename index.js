const fetchUsersButton = document.getElementById("fetch-users");
const usersContainer = document.getElementById("users-container");

fetchUsersButton.addEventListener("click", () => {
  fetch("https://reqres.in/api/users")
    .then(response => response.json())
    .then(data => {
      const usersList = data.data;
      usersContainer.innerHTML = "";
      usersList.forEach(user => {
        const userCard = createUserCard(user);
        usersContainer.appendChild(userCard);
      });
    })
    .catch(error => {
      console.error("Error fetching users:", error);
      usersContainer.textContent = "Error fetching users.";
    });
});

function createUserCard(user) {
  const card = document.createElement("div");
  card.classList.add("user-card");
  card.innerHTML = `
    <img src="${user.avatar}" alt="User avatar">
    <h2>${user.first_name} ${user.last_name}</h2>
    <p>${user.email}</p>
  `;
  return card;
}
