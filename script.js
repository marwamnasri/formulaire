// submit = () => {
//     //   let name =document.getElementById("name").addEventListener('click', submit(){alert('nom vide')})
//     let adresse = document.getElementById("adress")
//     let email = document.getElementById("email")
//     let name = document.getElementById("name")
//     let password = document.getElementById("password")

//     let comment = document.getElementById("comment")
//     var numbers = /[0-9]/g;
//     var upperCaseLetters = /[A-Z]/g;
//     var lowerCaseLetters = /[a-z]/g;


//     if (name.value === '') {
//         alert("name Invalid")
//     }
//     if (!adresse.value) {
//         alert("addresse invalid")

//     }
//     if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))) {
//         alert("email invalid")
//     }
//     if ((password.value == "") || (password.value.length < 8) || !(password.value.match(numbers)) || !(password.value.match(lowerCaseLetters)) || !(password.value.match(upperCaseLetters))) {
//         alert("password invalid")

//     }

//     if (!comment.value) {
//         alert("veuillez saisir un commentaire")
//     }
// }


//  clear=()=> {
//     let adresse = document.getElementById("adress")
//     let email = document.getElementById("email")
//     var name = document.getElementById("name")
//     let password = document.getElementById("password")

//     let comment = document.getElementById("comment")
//     console.log("Hello")
//    }


function21455 = () => {
    console.log("laaaaa")
    let adresse = document.getElementById("adress")
    let email = document.getElementById("email")
    var name = document.getElementById("name")
    let password = document.getElementById("password")

    let comment = document.getElementById("comment")
    console.log(adresse)

    adresse.value=""
    email.value=""
    name.value=""
    password.value=""
    comment.value=""


}



submit = () => {
    let email = document.getElementById("email");
    let name = document.getElementById("name");
    let password = document.getElementById("password");

    let comment = document.getElementById("comment");
    const numbers = /[0-9]/g;
    const upperCaseLetters = /[A-Z]/g;
    const lowerCaseLetters = /[a-z]/g;
    let adresse = document.getElementById("adress")
    if (name.value === '') {
        alert("name Invalid")
    }
    if (!adresse.value) {
        alert("addresse invalid")

    }
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))) {
        alert("email invalid")
    }
    if ((password.value == "") || (password.value.length < 8) || !(password.value.match(numbers)) || !(password.value.match(lowerCaseLetters)) || !(password.value.match(upperCaseLetters))) {
        alert("password invalid")

    }

    if (!comment.value) {
        alert("veuillez saisir un commentaire")
    }
    console.log("aaaaaaa")

}


