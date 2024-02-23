const logo = document.getElementById("logo");
logo.addEventListener("click", () => {
  location.assign("http://127.0.0.1:5501/pages/index.html");
});
const saveLikedPicToLocalStorage = (likedPic) => {
  localStorage.setItem("likedPic", JSON.stringify(likedPic));
};
let likedPic = JSON.parse(localStorage.getItem("likedPic"));
const isLikedPic = (picId) => {
  return likedPic?.some((pic) => picId === pic.id);
};
const removeLikedPhoto = (photoId) => {
  // Find the index of the photo with the given ID in the likedPic array
  const indexToRemove = likedPic.findIndex((photo) => photo.id === photoId);
  if (indexToRemove !== -1) {
    // Remove the photo from the likedPic array
    likedPic.splice(indexToRemove, 1);
    // Save the updated likedPic array to localStorage
    saveLikedPicToLocalStorage(likedPic);
    // Remove the corresponding photo card from the UI
    const imageCardToRemove = document.getElementById(`imageCard_${photoId}`);
    if (imageCardToRemove) {
      imageCardToRemove.remove();
    }
  }
};
const genratePhoto = () => {
  likedPic.forEach((photo) => {
    const contentDiv = document.getElementById("content");
    const div = document.createElement("div");
    const uniqueId = `imageCard_${photo.id}`;
    div.classList.add("imageCard");
    div.id = uniqueId;
    div.innerHTML = `
    <div id="image">
                    <img src=${photo.download_url}
                        alt="">
                </div>
                <div id="imageInfo">
                    <div id="infoPart1">
                        <h3>${photo.author}</h3>
                        <h3>Rs.${photo.price}</h3>
                    </div>
                    <div id="infoPart2" class="infoPart2">
                    <i class="ri-heart-3-line" style="color: ${
                      isLikedPic(photo.id) ? "#FF5C63" : ""
                    }"></i>
                    </div>
                </div>

    `;
    contentDiv.appendChild(div);
    const heartIcon = div.querySelector(".ri-heart-3-line");
    heartIcon.addEventListener("click", () => {
      const photoId = photo.id;
      if (isLikedPic(photoId)) {
        // If already liked, remove from likedPic
        removeLikedPhoto(photoId);
        heartIcon.style.color = "";
      }
    });
  });
};
genratePhoto();
