let firstName = prompt("Введіть ваше ім'я", " ольга ольга ");
firstName = firstName.trim();
if (firstName == ""){
    let firstNameNew = `введіть коректно ім'я`;
    document.getElementById("firstName").innerHTML = firstNameNew;
} else if (!/^([a-zA-Z'-\s]+|[а-яА-ЯёЁ'-\s]+)$/.test(firstName)){
    let firstNameNew = `введіть коректно ім'я`;
    document.getElementById("firstName").innerHTML = firstNameNew;
} else {
    let firstNameNew = firstName.split(/[-\s]/).map(name => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()).join(' ');
    document.getElementById("firstName").innerHTML = firstNameNew;
    }

let lastName = prompt("Введіть ваше прізвище", " шевченко франко ");
lastName = lastName.trim();
if (lastName == ""){
    let lastNameNew  = `введіть коректно прізвище`;
    document.getElementById("lastName").innerHTML = lastNameNew ;
} else if (!/^([a-zA-Z'-\s]+|[а-яА-ЯёЁ'-\s]+)$/.test(lastName)){
    let lastNameNew  = `введіть коректно прізвище`;
    document.getElementById("lastName").innerHTML = lastNameNew ;
    } else {
    let lastNameNew = lastName.split(/[-\s]/).map(name => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()).join(' ');
    document.getElementById("lastName").innerHTML = lastNameNew;
}

let email = prompt("Введіть ваш email", " sofiya@gmail.com ");
email = email.trim().toLowerCase();
if (!/\@/.test(email)){
    let emailNew = `not valid email <b>${email}</b> (symbol @ find in first place)`;
    document.getElementById("email").innerHTML = emailNew;
} else if(/\@/.test(email.charAt(0)) || /\@/.test(email.charAt(email.length-1)) ) {
    let emailNew = `not valid email <b>${email}</b> (symbol @ find in last place)`;
    document.getElementById("email").innerHTML = emailNew;
} else if (!/\.[a-z]/.test(email)) {
    let emailNew = `not valid email <b>${email}</b> (symbol . not find or not symbol after .)`;
    document.getElementById("email").innerHTML = emailNew;
} else {
    document.getElementById("email").innerHTML = email;
}

let year = prompt("Введіть рік вашого народження", " 1990 ");
year = year.trim();
if (year >= 1900 && year <=new Date().getFullYear()) {
    let currentYear = new Date().getFullYear();
    let age = currentYear - year;
    document.getElementById("age").innerHTML = age;
} else {
    age = `введіть правильний рік народження`;
    document.getElementById("age").innerHTML = age;
}
