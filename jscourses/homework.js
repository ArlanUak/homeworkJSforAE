// Task 1
console.log("TASK 1")
let firstName = "Арлан";
let lastName = "Аскапов";
let age = 19;
console.log(`Меня зовут ${firstName} ${lastName}, и мне ${age} лет`);

// Task 2
console.log("TASK 2")
let city = "Боровое";
console.log("Я родом с города " + city)

// Task 3
console.log("TASK 3")
let password = "AskPassword";
let hasAccess = password !=="";
console.log("Password:", password);
console.log("Has Access:", hasAccess);

// Task 4
console.log("TASK 4")
let isMember = false;
let isMemberStr = isMember.toString();
console.log(isMemberStr , typeof isMemberStr);

//Task 5
console.log("TASK 5");
let cartItems = 0;
console.log(Boolean(cartItems));
// Корзина пустая потому что выводится false, потому что значение 0 в буллевом значение равно фолс

// Task 6
console.log("TASK 6")
let averageScore = 89.75695
console.log(averageScore.toFixed(1));

// Task 7
console.log("TASK 7")
let greetingMessage = "      Приветствуем вас в мире программирования!        ";
console.log(greetingMessage.trim());
console.log(greetingMessage.toUpperCase());
console.log(greetingMessage.includes("программирования"));