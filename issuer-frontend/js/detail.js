function readStorage() {
    var imageurl = localStorage.getItem("selected_doc");
    document.getElementById("doc-img").src = (imageurl);
    console.log(imageurl)
}

document.addEventListener("DOMContentLoaded", () => {
    readStorage();
})