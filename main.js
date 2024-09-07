const likeButton = document.getElementById("like");

if (localStorage.getItem("liked")) {
    likeButton.src = "./liked.svg";
}

likeButton.addEventListener("click", () => {
    const likedFromStorage = localStorage.getItem("liked");
    likedFromStorage ? localStorage.removeItem("liked") : localStorage.setItem("liked", "true");
    likeButton.src = likedFromStorage ? "./like.svg" : "./liked.svg";
});