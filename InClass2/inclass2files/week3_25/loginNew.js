let username;
document.getElementById("mySubmit").onclick = function(){
    username =document.getElementById("uName").value;
    console.log(username);
    document.getElementById("myH1").textContent = `Hello ${username}`;
}