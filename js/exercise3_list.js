$(document).ready(function () {
    $("form").submit(function () {
        var personArray = JSON.parse(localStorage.getItem("personArray"));
        var person = {};
        person.name = $("[name=name]").val();
        person.email = $("[name=email]").val();
        person.postalCode = $("[name=postalCode]").val();
        if (personArray == null) {
            personArray = [person];
        } else {
            personArray.push(person);
        }
        localStorage.setItem("personArray", JSON.stringify(personArray));
    });
    if (JSON.parse(localStorage.getItem("personArray")) != null) {
        var personArray = localStorage.getItem("personArray");
        var personArrays = JSON.parse(personArray);
        var message = "";
        for (var i = 0; i < personArrays.length; i++) {
            var person = personArrays[i];
            message += "Name: " + person.name + "<br/>";
            message += "Email: " + person.email + "<br/>";
            message += "Postal Code: " + person.postalCode + "<br/></br>";
        }
        $("#results").html(message);
    }
});