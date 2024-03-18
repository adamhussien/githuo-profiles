const url = 'https://api.github.com/users/'
console.log(url);
const card = document.querySelector(".container-card")
const btn = document.querySelector('.btn')
const input = document.querySelector(".input")
const getusername = async function(usrername){
    try{
const res = await fetch(url + usrername)
const data = await res.json()

if (data.message && data.message === "Not Found") {
    const errorMessage = document.createElement("h3");
    errorMessage.textContent = "User not found";
    card.appendChild(errorMessage);
    return;
}
const {avatar_url , name, followers,bio, following,   
    public_repos, twitter_username,created_at
} = data

const item = document.createElement("div")

item.innerHTML = `

<div class="card">

<div class="detal1">
    <img src="${avatar_url}" alt="">
    <div class="sub">
        <h2>${name}</h2>
        <p class="bio">${bio}.</p>
    </div>

    <div class="join"><p>${created_at}</p></div>
</div>

<div class="follower">
    <p class="repos">public repositories: ${public_repos}</p>
    <p class="followers">followers: ${followers}</p>
    <p class="following">following: ${following}</p>
</div>
</div>
`
card.appendChild(item)

    }catch(err){
  console.log('something went wrong', err);
    }
}
//getusername("jonasschmedtmann")
btn.addEventListener('click', function(){
    const searchuser = input.value.trim()
    card.innerHTML = ''
    if(searchuser !== ""){
        getusername(searchuser)
        input.value = ''
    } 

})