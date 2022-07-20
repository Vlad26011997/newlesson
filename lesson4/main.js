let modal = document.querySelector("#modal");
let closeButton = document.querySelector("#close-button");

(async () => {
  async function getUsers() {
    const response = await axios.get("https://dummyjson.com/users/");
    return response.data.users;
  }

  document.addEventListener("DOMContentLoaded", () => {
    const getSort = ({ target }) => {
      const order = (target.dataset.order = -(target.dataset.order || -1));
      const index = [...target.parentNode.cells].indexOf(target);
      const collator = new Intl.Collator(["en", "ru"], { numeric: true });
      const comparator = (index, order) => (a, b) =>
        order *
        collator.compare(
          a.children[index].innerHTML,
          b.children[index].innerHTML
        );

      for (const tBody of target.closest("table").tBodies)
        tBody.append(...[...tBody.rows].sort(comparator(index, order)));

      for (const cell of target.parentNode.cells)
        cell.classList.toggle("sorted", cell === target);
    };

    document
      .querySelectorAll(".table_sort thead")
      .forEach((tableTH) =>
        tableTH.addEventListener("click", () => getSort(event))
      );
  });

  function render(users) {
    const tableBody = document.getElementById("users-table-body");
    tableBody.innerHTML = users.reduce(
      (html, user) =>
        html +
        `
        <tr>
            <td>${user.firstName}</td>
            <td>${user.age}</td>
            <td>${user.birthDate}</td>
        </tr>`,
      ""
    );
  }

  let users = await getUsers();
  render(users);

  closeButton.addEventListener("click", () => {
    modal.style.display = "none";
  });

  let userRow = document.querySelectorAll("table tr");
  userRow.forEach(function (row, userId) {
    row.addEventListener("click", (e) => {
      let user = users[users.findIndex((item) => item.id === userId)];
      console.log(user);
      document.getElementById("modal_body").innerHTML = user.firstName;
      document.getElementById("modal").style.display = "initial";
    });
  });
})();
