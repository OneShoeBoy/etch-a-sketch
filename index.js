const container = document.querySelector("#container")

const grid = {
  x: 16,
  y: 16
}

// grid.x = 100;
// grid.y = 100;

const numberItems = (grid.x * grid.y) - 1;

for (let i = 0; i < grid.y; i++) {
  const rowItems = document.createElement("div");
  rowItems.classList.add("row");

  for (let i = 0; i < grid.x; i++) {
    const colItems = document.createElement("div");
    colItems.classList.add("column");
    rowItems.appendChild(colItems);
    colItems.addEventListener("mouseover", () => {
      colItems.setAttribute("style", "background-color: grey");
    })
  }

  container.appendChild(rowItems);
}

