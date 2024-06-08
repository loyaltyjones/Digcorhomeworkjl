function buttonClick(){
    let cereal = document.getElementsByTagName('body');
    console.log(cereal);
    let button = document.getElementById('button1');
    button.innerText = "Button was pressed";
    button.style.backgroundColor = "green";


    let newButton = document.createElement("button");
    newButton.innerText = "Newly created button";
    cereal[0].appendChild(newButton);


   



    console.log(cereal);
    console.log(button);

}












