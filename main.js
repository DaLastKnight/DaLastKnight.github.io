const btn = document.querySelector("#test");

function sayHello()
{
    document.open();

    let userName = prompt("What is your name?");
    userName = userName.trim();
    document.writeln("Hi " + userName + '!');

    document.close();
};

btn.addEventListener("click", function()
{
    sayHello();
})