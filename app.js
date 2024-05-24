    let form = document.querySelector("#form");
    let userName = document.querySelector("#username"); // Get  User Name by Query Selector
    let btn = document.querySelector("#btn"); //


    // Api data ko show krwane kelye khuch Element ko select kia hai
    let Name = document.querySelector("#name");
    let bio = document.querySelector("#bio");
    let image = document.querySelector("img");`` 
    let follower = document.querySelector("#follower");
    let following = document.querySelector("#following");
    let repository = document.querySelector("#repository");
    let location = document.querySelector("#location")
    // Async Function for Api
    const GitHubAPi = async(event)=>{
        event.preventDefault();
        
        let value = userName.value
        let URLApi = `https://api.github.com/users/${value}`; // URL of GitHub API
        let API = await fetch(URLApi);
        let data = await  API.json()
        
        // Data Pushing Api from Our Website
    image.setAttribute("src",data.avatar_url) // User Image
    image.style.border = "5px solid #ececf5"
    Name.innerText = data.name; // User Name
    bio.innerText = data.bio  //User Bio
    follower.innerText = data.followers // Followers
    following.innerText = data.following // Following
    repository.innerText = data.public_repos //Repository
    location.innerText = data.location
    userName.innerHTML = "" 
    }
    form.addEventListener("submit", GitHubAPi)