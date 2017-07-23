var weapons = ["sword", "spear", "bomb"];

var soldier = {
  name: "justin",
  age: 21,
  korean: true,
  weapon: weapons[0],
  sayHi: function(name){
    console. log("hello" + name);
  }
};

var age = prompt("How old are you?");

if(age < 18) {
  console. log("gtfo");
}
else if(age > 18 && age <50){
  console. log("you're a father");
}
else if(age > 50 && age < 80){
  console. log("hello granpa");
}
else{
  console. log("u r dead");
}
