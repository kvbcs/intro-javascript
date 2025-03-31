//etape 1
const firstName = "Neo"
const age = 25
let ville = "Matrix"

//etape 2
ville = "New York"

//etape 3
const utilisateur = {firstName, age, ville}

//etape 4
utilisateur.ville = "Los Angeles"

//etape 5
utilisateur.email = "neo@gmail.com"

//etape 6
utilisateur.amis = ["Morpheus", "Trinity", "Smith"]

//etape 7
utilisateur.amis.pop("Smith")

//etape 7.1
utilisateur.amis.push("Wick")

//etape 7.2
utilisateur.amis.splice(2, 1, "John")

//etape 8
for(let i = 0; i<utilisateur.amis.length; i++){
    console.log("boucle", utilisateur.amis[i]);
}

//étape 9
if (utilisateur.age < 18){
    console.log("Mineur");
} else if (utilisateur.age < 25){
    console.log("Jeune adulte");
    
} else {
    console.log("Adulte");
    
}

//étape 10 a)
const saluerUtilisateur = () => {
    console.log("Hello", utilisateur.firstName);
    
}

saluerUtilisateur()

//étape 10 b)
const calculerAnneeNaissance = (annee, age) =>{
    return annee - age

}

console.log("calcul annee naissance", calculerAnneeNaissance(2025, utilisateur.age))

//étape 10 c)
const verifierMajorite = (age) =>{
if (utilisateur.age > age) {
    return true
} return false
}

console.log("vérifie majorité",verifierMajorite( 18));

//étape 10 d)
const afficherProfil = () =>{
console.log("Bonjour", utilisateur.firstName, "vous avez", utilisateur.age, "ans et vivez à", utilisateur.ville);
( utilisateur)
}

afficherProfil()

//étape 10 e) bonus
const ajouterAmi = (nom) =>{
    return utilisateur.amis.push(nom)
}
console.log(utilisateur.amis);


//bonus 2
// const supprimerAmi = (firstName) =>{
//     if (utilisateur.amis${firstName}){
// console.log(utilisateur.amis(firstName))
//     } else {
//         console.log("FirstName doesn't exist");
        
//     }
// }

// supprimerAmi("Morpheus")
// console.log(utilisateur);


