document.querySelector("#btnLoad").addEventListener("click", () => {
    if (document.querySelector("#userName") !== null) {
        document.querySelector("#userName").remove();
    }
    if (document.querySelector("#userImage") !== null) {
        document.querySelector("#userImage").remove();
    }
    getUserName();
});

async function getUserName() {
    const response = await fetch("/username");
    const data = await response.json();
    const userName = data.name;

    let userNameDiv = document.createElement("div");
    userNameDiv.id = "userName";
    userNameDiv.textContent = userName;
    document.querySelector("#userWrapper").appendChild(userNameDiv);

    getUserImage();
}

async function getUserImage() {
    const response = await fetch("/userimage");
    const data = await response.json();
    let userImage = data.value[Math.floor(Math.random() * data.value.length)];
    let userImageUrl = userImage.thumbnailUrl;
    let userAlt = userImage.name;

    let img = document.createElement("img");
    img.id = "userImage";
    img.src = userImageUrl;
    img.alt = userAlt;
    document.querySelector("#userWrapper").appendChild(img);
}