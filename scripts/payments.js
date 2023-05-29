let data = [
  {
    id: "2023.13.04, 12:01",
    value1: "$ 210",
    value2: "MasterCard/Visa",
    value3: "-",
  },
  {
    id: "2023.13.04, 12:01",
    value1: "$ 210",
    value2: "MasterCard/Visa",
    value3: "-",
  },
  {
    id: "2023.13.04, 12:01",
    value1: "$ 210",
    value2: "MasterCard/Visa",
    value3: "-",
  },
  {
    id: "2023.13.04, 12:01",
    value1: "$ 210",
    value2: "MasterCard/Visa",
    value3: "-",
  },
  {
    id: "2023.13.04, 12:01",
    value1: "$ 210",
    value2: "MasterCard/Visa",
    value3: "-",
  },
  {
    id: "2023.13.04, 12:01",
    value1: "$ 210",
    value2: "MasterCard/Visa",
    value3: "-",
  },
  {
    id: "2023.13.04, 12:01",
    value1: "$ 210",
    value2: "MasterCard/Visa",
    value3: "-",
  },
  {
    id: "2023.13.04, 12:01",
    value1: "$ 210",
    value2: "MasterCard/Visa",
    value3: "-",
  },
  {
    id: "2023.13.04, 12:01",
    value1: "$ 210",
    value2: "MasterCard/Visa",
    value3: "-",
  },
  {
    id: "2023.13.04, 12:01",
    value1: "$ 210",
    value2: "MasterCard/Visa",
    value3: "-",
  },
  {
    id: "2023.13.04, 12:01",
    value1: "$ 210",
    value2: "MasterCard/Visa",
    value3: "-",
  },
  {
    id: "2023.13.04, 12:01",
    value1: "$ 210",
    value2: "MasterCard/Visa",
    value3: "-",
  },
  {
    id: "2023.13.04, 12:01",
    value1: "$ 210",
    value2: "MasterCard/Visa",
    value3: "-",
  },

  {
    id: "2023.13.04, 12:01",
    value1: "$ 210",
    value2: "MasterCard/Visa",
    value3: "-",
  },
  {
    id: "2023.13.04, 12:01",
    value1: "$ 210",
    value2: "MasterCard/Visa",
    value3: "-",
  },
  {
    id: "2023.13.04, 12:01",
    value1: "$ 210",
    value2: "MasterCard/Visa",
    value3: "-",
  },
  {
    id: "2023.13.04, 12:01",
    value1: "$ 210",
    value2: "MasterCard/Visa",
    value3: "-",
  },
  {
    id: "2023.13.04, 12:01",
    value1: "$ 210",
    value2: "MasterCard/Visa",
    value3: "-",
  },
  {
    id: "2023.13.04, 12:01",
    value1: "$ 210",
    value2: "MasterCard/Visa",
    value3: "-",
  },
  {
    id: "2023.13.04, 12:01",
    value1: "$ 210",
    value2: "MasterCard/Visa",
    value3: "-",
  },
  {
    id: "2023.13.04, 12:01",
    value1: "$ 210",
    value2: "MasterCard/Visa",
    value3: "-",
  },
  {
    id: "2023.13.04, 12:01",
    value1: "$ 210",
    value2: "MasterCard/Visa",
    value3: "-",
  },
];
let currentPage = 1;
let rowsPerPage = 5;

function paginateData() {
  let pages = Math.ceil(data.length / rowsPerPage);
  let paginationHTML = "";

  paginationHTML += `<button class="pagination__arrow pagination__arrow--left br-1" ${
    currentPage === 1 ? "disabled" : ""
  }> <svg
    width="4"
    height="8"
    viewBox="0 0 4 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.14803 7.68854C3.34416 7.88293 3.66074 7.88152 3.85513 7.68539C4.04952 7.48926 4.0481 7.17268 3.85197 6.97829L2.67666 5.81341C2.19966 5.34066 1.87246 5.0153 1.65106 4.73961C1.436 4.47181 1.36222 4.2998 1.34258 4.14575C1.33025 4.04902 1.33025 3.95114 1.34258 3.85441C1.36222 3.70036 1.436 3.52835 1.65106 3.26055C1.87246 2.98487 2.19966 2.65951 2.67666 2.18675L3.85197 1.02188C4.0481 0.827486 4.04952 0.510907 3.85513 0.314776C3.66074 0.118644 3.34416 0.117232 3.14803 0.311621L1.95154 1.49748C1.50089 1.94411 1.13257 2.30914 0.87137 2.63439C0.599751 2.9726 0.403129 3.3159 0.350605 3.72797C0.327575 3.90866 0.327576 4.09151 0.350605 4.27219C0.403129 4.68426 0.599751 5.02756 0.871371 5.36578C1.13257 5.69102 1.50089 6.05605 1.95154 6.50268L3.14803 7.68854Z"
      fill="#1D1D1B"
    />
  </svg></button>`;
  const MAX_VISIBLE_PAGES = 3;
  let startPage = Math.max(currentPage - Math.floor(MAX_VISIBLE_PAGES / 2), 1);
  let endPage = Math.min(startPage + MAX_VISIBLE_PAGES - 1, pages);
  
  if (endPage - startPage < MAX_VISIBLE_PAGES - 1) {
    startPage = Math.max(endPage - MAX_VISIBLE_PAGES + 1, 1);
  }
  
  if (startPage !== 1) {
    paginationHTML += `<button class="pagination__item pagination__item_1 color-black br-1">${1}</button>`;
    paginationHTML += `<span class="pagination__dots" aria-hidden="true">...</span>`;
  }
  
  for (let i = startPage; i <= endPage; i++) {
    paginationHTML += `<button class="pagination__item pagination__item_1 color-black br-1" ${
      i === currentPage ? "disabled" : ""
    }>${i}</button>`;
  }
  
  if (endPage !== pages) {
    paginationHTML += `<span class="pagination__dots" aria-hidden="true">...</span>`;
    paginationHTML += `<button class="pagination__item pagination__item_1 color-black br-1">${pages}</button>`;
  }
  
  paginationHTML += `<button class="pagination__arrow pagination__arrow--right br-1" ${
    currentPage === pages ? "disabled" : ""
  }> <svg
  width="4"
  height="8"
  viewBox="0 0 4 8"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  >
  <path
    d="M0.851973 0.311459C0.655841 0.11707 0.339262 0.118482 0.144873 0.314613C-0.0495163 0.510745 -0.0481038 0.827324 0.148028 1.02171L1.32334 2.18658C1.80034 2.65934 2.12754 2.9847 2.34894 3.26039C2.564 3.52819 2.63778 3.7002 2.65742 3.85425C2.66975 3.95098 2.66975 4.04886 2.65742 4.14559C2.63778 4.29964 2.564 4.47165 2.34894 4.73945C2.12754 5.01513 1.80034 5.34049 1.32334 5.81325L0.148028 6.97812C-0.0481033 7.17251 -0.0495157 7.48909 0.144873 7.68522C0.339262 7.88136 0.655842 7.88277 0.851973 7.68838L2.04846 6.50252C2.49911 6.05589 2.86743 5.69086 3.12863 5.36561C3.40025 5.0274 3.59687 4.6841 3.64939 4.27203C3.67242 4.09134 3.67242 3.90849 3.64939 3.72781C3.59687 3.31574 3.40025 2.97244 3.12863 2.63422C2.86742 2.30898 2.49911 1.94395 2.04846 1.49732L0.851973 0.311459Z"
    fill="#1D1D1B"
  /></button>`;
  
  document.querySelector(".pagination").innerHTML = paginationHTML;
  
  Array.from(document.querySelectorAll(".pagination__item_1")).forEach(
    (item, index) => {
      item.addEventListener("click", () => {
        currentPage = parseInt(item.textContent);
        updateTable();
        paginateData();
      });
    }
  );
  
  document.querySelector(".pagination__arrow--right").addEventListener("click", () => {
    currentPage++;
    updateTable();
    paginateData();
  });
  
  if (currentPage > 1) {
    document.querySelector(".pagination__arrow--left").addEventListener("click", () => {
      currentPage--;
      updateTable();
      paginateData();
    });
  }
  
}

function updateTable() {
  let start = (currentPage - 1) * rowsPerPage;
  let end = start + rowsPerPage;
  let pageData = data.slice(start, end);

  let tableBody = document.querySelector("tbody");
  tableBody.innerHTML = "";

  pageData.forEach((item) => {
    tableBody.innerHTML += `
      <tr>
        <td class="fs-16 fw-400" scope="row">${item.id}</td>
        <td class="fs-16 fw-400">${item.value1}</td>
        <td class="fs-16 fw-400">${item.value2}</td>
        <td class="fs-16 fw-400">${item.value3}</td>
    
      </tr>
    `;
  });
}

window.onload = function () {
  document.getElementById("selectvalue").onchange = function (event) {
    rowsPerPage = parseInt(event.target.value, 10);

    paginateData();
    updateTable();
  };
};

paginateData();
updateTable();
