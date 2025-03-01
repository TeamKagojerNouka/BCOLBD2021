const BUTTON = "<a href=\"<url>\" class=\"btn btn-primary btn-sm active\" role=\"button\" aria-pressed=\"true\">Sign Document</a>";
const IMG_PREVIEW = "<img src=\"<url>\" height=\"100\" width=\"80\" class=\"img-thumbnail\">"

function loadDocuments() {
    const request = new XMLHttpRequest();

    request.open("get", "../data/docs.json");
    request.onload = () => {
        try {
            const json = JSON.parse(request.responseText);
            populateTable(json);
        } catch (e) {
            console.warn("Could not fetch data !!");
        }
    };

    request.send();

}

function populateTable(json) {

    const tableBody = document.querySelector("#docs-table > tbody");

    while (tableBody.firstChild) {
        tableBody.removeChild(tableBody.firstChild);
    }

    json.forEach(element => {
        const tr = document.createElement("tr");

        const tdId = document.createElement("td");
        tdId.textContent = element.id;
        tdId.classList.add("align-middle");

        const tdName = document.createElement("td");
        tdName.textContent = element.name;
        tdName.classList.add("align-middle");

        const tdButton = document.createElement("td");
        if (element.signed) {
            tdButton.innerHTML = "<b>Signed</b>";
        } else {
            tdButton.innerHTML = BUTTON.replace("<url>", element.url);
        }
        tdButton.classList.add("align-middle");

        const tdPreview = document.createElement("td");
        tdPreview.innerHTML = IMG_PREVIEW.replace("<url>", element.preview);
        tdPreview.classList.add("align-middle");

        const tdDate = document.createElement("td");
        tdDate.textContent = element.date;
        tdDate.classList.add("align-middle");

        tdButton.addEventListener("click", function(event) {
            var targetElement = event.target;
            console.log(element);
            localStorage.setItem("selected_doc", JSON.stringify(element));
        });

        tr.appendChild(tdId);
        tr.appendChild(tdName);
        tr.appendChild(tdDate);
        tr.appendChild(tdPreview);
        tr.appendChild(tdButton);

        tableBody.appendChild(tr);
    });

}

function loadFilters() {
    const request = new XMLHttpRequest();

    request.open("get", "../data/filters.json");
    request.onload = () => {
        try {
            const json = JSON.parse(request.responseText);
            populateFilterDropdown(json);
        } catch (e) {
            console.warn("Could not fetch data !!");
        }
    };

    request.send();
}

function populateFilterDropdown(json) {

    const menu = document.querySelector("#dropdown-menu");

    json.forEach(element => {
        const item = document.createElement("a");
        item.textContent = element.name;
        item.classList.add("dropdown-item");

        item.addEventListener("click", function(event) {
            filterDocuments(element);
        });

        menu.appendChild(item);
    });

}

function filterDocuments(filter) {
    // TODO: filter documents according to selected filter element
}

document.addEventListener("DOMContentLoaded", () => {
    loadDocuments();
    loadFilters();
})