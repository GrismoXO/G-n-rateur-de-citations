// Tableau n°1
let tableaududebutgeek = ['- Demain session', '- Ce soir go', '- Si je dors 4h', '- Une douche', '- Je me lève'];
let tableaudumilieugeek = ['jouer', 'je joue', 'ça va', 'go jouer', 'rêver'];
let tableaudefingeek = ['à Nier.', 'à Smash Bros.', 'ça passe.', 'de mon lit.', 'et manger.'];

// bouton n°1
let btn1 = document.getElementById('btn1');
btn1.addEventListener('click', test);
let resultat = document.getElementById('resultat');

// fonction n°1
function test() {
    if (one.value == "0") {
        alert('veuillez sélectionner une valeur');
    }
    else {
        document.getElementById('resultat').innerHTML = '';
        console.log(one.value)
        for (let i = 0; i < one.value; i++) {
            let ramdonNumber = Math.floor(Math.random() * (tableaududebutgeek.length));
            let ramdonNumber2 = Math.floor(Math.random() * (tableaudumilieugeek.length));
            let ramdonNumber3 = Math.floor(Math.random() * (tableaudefingeek.length));
            resultat.innerHTML += '<br>' + tableaududebutgeek[ramdonNumber] + ' ' + tableaudumilieugeek[ramdonNumber2] + ' ' + tableaudefingeek[ramdonNumber3];
        }
    }
}

// Tableau n°2
let tableaududebutnormi = ['- Demain ', '- Ce soir go', '- Si je dors 4h', '- Je reste '];
let tableaudumilieunormi = ['ce n est pas', 'un petit film', 'je dois', ' je sors', 'chez'];
let tableaudefinnormi = ['raisonnable.', 'et au dodo.', 'me lever tôt.', 'avec des amis.', 'moi.'];

// bouton + fontion n°2
let btn2 = document.getElementById('btn2');
btn2.addEventListener('click', function () {
    if (one.value == "0") {
        alert('veuillez sélectionner une valeur');
    }
    else {
        resultat.innerHTML = '';
        for (let i = 0; i < one.value; i++) {
            let ramdonNumber4 = Math.floor(Math.random() * (tableaududebutnormi.length));
            let ramdonNumber5 = Math.floor(Math.random() * (tableaudumilieunormi.length));
            let ramdonNumber6 = Math.floor(Math.random() * (tableaudefinnormi.length));
            resultat.innerHTML += '<br>' + tableaududebutnormi[ramdonNumber4] + ' ' + tableaudumilieunormi[ramdonNumber5] + ' ' + tableaudefinnormi[ramdonNumber6];
        }
    }
})

// let img2 = document.getElementById('img2');
// btn2.addEventListener('mouseover', function() {
//         img2.style.opacity = '1';
// } )
// btn2.addEventListener('mouseleave', function() {
//         img2.style.opacity = '0';
// } )

