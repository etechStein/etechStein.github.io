function activateGallery () {
    alert("I'm working");

    let thumbnails = document.querySelector("#gallery-thumbs > div > img");

    let mainImage = document.querySelector("#gallery-photo img");

    //update img info
    let galleryInfo = document.querySelector("#gallery-info");
    let title = galleryInfo.querySelector(".title");
    let description = galleryInfo.querySelector(".description");

    thumbnails.forEach(function(thumbnail) {
        thumbnail.addEventListener("click", function () {
        let newImageSrc = thumbnail.dataset.largeVersion;
        let newImageAlt = thumbnail.dataset.description;
        mainImage.setAttribute("src", newImageSrc);
        mainImage.setAttribute("alt", newImageAlt);

        //Current Image
        document.querySelector(".current").classList.remove("current");
        thumbnail.parentNode.classList.add("current");

        //info update
        title.innerHTML = thumbnail.dataset.title;
        description.innerHTML = thumbnail.dataset.description;
        })
    })

}