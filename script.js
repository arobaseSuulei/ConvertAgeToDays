function valider() {
    // Récupérer l'élément input par son ID
    var inputElement = document.getElementById('monInput');

    // Récupérer la valeur de l'input
    var valeurInput = inputElement.value;

    // Afficher la valeur dans la console (vous pouvez faire autre chose avec la valeur)
    console.log("La valeur de l'input est : " + valeurInput);
    if(!isNaN(valeurInput)&& valeurInput>0)
    {
        var nouvellevaleurInput=valeurInput*365;
        console.log(nouvellevaleurInput);

        var text=document.getElementById('msg');
        text.innerHTML=("You have approximately "+nouvellevaleurInput+" day(s)");
    } else
    {
        console.log("error !");

        var text=document.getElementById('msg');
        text.innerHTML=("error! invalid");
    }


    




}
