function readStorage() {
    var imageurl = localStorage.getItem("selected_doc");
    const obj = JSON.parse(imageurl);
    document.getElementById("doc-img").src = obj.preview;
    document.getElementById("doc-date").textContent = obj.date;
    document.getElementById("doc-name").textContent = obj.name;
    
    
    console.log(obj)
}

document.addEventListener("DOMContentLoaded", () => {
    readStorage();
})