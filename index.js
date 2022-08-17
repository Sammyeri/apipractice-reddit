let posts;
fetch("https://www.reddit.com/r/aww/.json").then(response => response.json()).then(data => {
    posts = data.data.children;
    for(i = 0; i < 10; i++){
        let title = document.createElement("h1");
        title.innerText = posts[i].data.title;
        let url = document.createElement("a");
        url.innerText = "Click here to view OP's post!"
        url.href = posts[i].data.url;
        let thumbnail = document.createElement("img");
        thumbnail.src = posts[i].data.thumbnail;
        let newDiv = document.createElement("div");
        newDiv.classList.add("post");
        newDiv.appendChild(title);
        newDiv.appendChild(url);
        newDiv.appendChild(thumbnail);
        document.getElementById("postDisplay").appendChild(newDiv);
    }
});

