document.addEventListener("DOMContentLoaded", function(event) {

// Clickable thumbnail index.html
    var thumbnailElement = document.getElementById("smart_thumbnail");

    thumbnailElement.addEventListener("click", function() {

	if (thumbnailElement.className == "") {
		    thumbnailElement.className = "small";
	} else {
		    thumbnailElement.className = "";
	}

    });

});
