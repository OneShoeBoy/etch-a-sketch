const container = document.querySelector("#container");
const header = document.querySelector("#header");
const setGrid = document.createElement("button");
const resetGrid = document.createElement("button");

setGrid.textContent = "Set grid size";
resetGrid.textContent = "Reset grid";

header.appendChild(setGrid);
header.appendChild(resetGrid);

function generateGrid(grid) {
  for (let i = 0; i < grid.y; i++) {
    const rowItems = document.createElement("div");
    rowItems.classList.add("row");

    for (let i = 0; i < grid.x; i++) {
      const colItems = document.createElement("div");
      colItems.classList.add("column");
      rowItems.appendChild(colItems);
      colItems.addEventListener("mouseover", () => {
        colItems.classList.add("mouseOver");
      })
    }
    container.appendChild(rowItems);
  }


}

const grid = {
  x: 16,
  y: 16
}

generateGrid(grid);

setGrid.addEventListener("click", () => {
  let gridComplete;

  while (!gridComplete) {
    let xPrompt = Number(prompt("Specify X dimensions (max 100)"));
    if (xPrompt > 100) {
      alert("Number must be 100 or less");
      continue;
    }

    let yPrompt = Number(prompt("Specify Y dimensions (max 100)"));
    if (yPrompt > 100) {
      alert("Number must be 100 or less");
      continue;
    }

    if (xPrompt <= 100 && yPrompt <= 100) {
      grid.x = xPrompt;
      grid.y = yPrompt;
      gridComplete = true;
      break;
    }

    grid.x = Number(prompt("Specify X dimensions (max 100)"));
    grid.y = Number(prompt("Specify Y dimensions (max 100)"));

  }
  const rows = document.querySelectorAll(".row");
  rows.forEach((row) => {
    container.removeChild(row)
  })
  generateGrid(grid);

})

resetGrid.addEventListener("click", () => {
  location.reload()
})


// grid.x = 100;
// grid.y = 100;


