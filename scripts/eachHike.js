function showDetails() {
    // create a URL object
    let params = new URL(window.location.href);
    let id = params.searchParams.get("id");               //parse "id"
    let hikeName = params.searchParams.get("hikeName");   //parse "collection"

    let message = "Hike Name is: " + hikeName;           //build message to display
    message += " &nbsp | Document id is:  " + id;  
    let img = "<img src='/images/" + id + ".jpg' alt='' style='width: 90%;'/>";  
    document.getElementById("HikeName").innerHTML = hikeName;  
    document.getElementById("details-go-here").innerHTML = message; 
    document.getElementById("image-goes-here").innerHTML = img;
}
showDetails();