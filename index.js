let posts;
let subreddit;
document.getElementById("submit").addEventListener("click", (event) =>{
    subreddit = document.getElementById("subreddit").value;
    document.getElementById("title").innerText = `Welcome to r/${subreddit}`;
    while(document.getElementById("postDisplay").hasChildNodes()){
        document.getElementById("postDisplay").firstChild.remove();
    }
    fetch(`https://www.reddit.com/r/${subreddit}/.json`).then(response => response.json()).then(data => {   
        posts = data.data.children;
        for(i = 0; i < 10; i++){
            let title = document.createElement("h1");
            title.innerText = posts[i].data.title;
            let url = document.createElement("a");
            url.innerText = "Click here to view OP's post!"
            url.href = `https://www.reddit.com${posts[i].data.permalink}`;
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
});