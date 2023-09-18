function activateGallery () {
    let thumbnails =document.querySelector("#gallery-thumbs").querySelectorAll("img");

    let mainImage = document.querySelector("#gallery-photo img");

    thumbnails.forEach(function(thumbnail) {
        thumbnail.addEventListener("click", function () {
        let newImageSrc = thumbnail.dataset.largeVersion;
        let newImageAlt = thumbnail.dataset.description;
        mainImage.setAttribute("src", newImageSrc);
        mainImage.setAttribute("alt", newImageAlt);
        })
    })

}