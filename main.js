const submitBtn = document.getElementById('submit');

submitBtn.addEventListener('click', function(event) {
    event.preventDefault();

    var voornaam = document.getElementById('voornaam').value;
    if (voornaam == "") {
        document.getElementById('voornaam-error').innerHTML = "Vul je voornaam in!"
    } else {
        document.getElementById('voornaam-error').innerHTML = ""
    }

    var achternaam = document.getElementById('achternaam').value;
    if (achternaam == "") {
        document.getElementById('achternaam-error').innerHTML = "Vul je achternaam in!"
    } else {
        document.getElementById('achternaam-error').innerHTML = ""
    }

    var geslacht = document.getElementById('geslacht').value;
    if (geslacht == "") {
        document.getElementById('geslacht-error').innerHTML = "Vul je geslacht in!"
    } else {
        document.getElementById('geslacht-error').innerHTML = ""
    }

    var straatnaam = document.getElementById('straat').value;
    if (straatnaam == "") {
        document.getElementById('straatnaam-error').innerHTML = "Vul je straatnaam in!"
    } else {
        document.getElementById('straatnaam-error').innerHTML = ""
    }

    var huisnummer = document.getElementById('huisnummer').value;
    if (huisnummer == "") {
        document.getElementById('huisnummer-error').innerHTML = "Vul je huisnummer in!"
    } else {
        document.getElementById('huisnummer-error').innerHTML = ""
    }

    var postcode = document.getElementById('postcode').value;
    if (postcode == "") {
        document.getElementById('postcode-error').innerHTML = "Vul je postcode in!"
    } else {
        document.getElementById('postcode-error').innerHTML = ""
    }

    var woonplaats = document.getElementById('woonplaats').value;
    if (woonplaats == "") {
        document.getElementById('woonplaats-error').innerHTML = "Vul je woonplaats in!"
    } else {
        document.getElementById('woonplaats-error').innerHTML = ""
    }

    var telefoonnummer = document.getElementById('telefoonnummer').value;
    if (telefoonnummer == "") {
        document.getElementById('telefoonnummer-error').innerHTML = "Vul je telefoonnummer in!"
    } else {
        document.getElementById('telefoonnummer-error').innerHTML = ""
    }

    var email = document.getElementById('email').value;
    if (email == "") {
        document.getElementById('email-error').innerHTML = "Vul je emailadres in!"
    } else {
        document.getElementById('email-error').innerHTML = ""
    }

    var volwassenen = document.getElementById('volwassenen').value;
    if (volwassenen == "") {
        document.getElementById('volwassenen-error').innerHTML = "Vul het aantal volwassenen in!"
    } else {
        document.getElementById('volwassenen-error').innerHTML = ""
    }

    var kinderen = document.getElementById('kinderen').value;
    if (kinderen == "") {
        document.getElementById('kinderen-error').innerHTML = "Vul het aantal kinderen in!"
    } else {
        document.getElementById('kinderen-error').innerHTML = ""
    }

    var huisdieren = document.getElementById('huisdieren').value;
    if (huisdieren == "") {
        document.getElementById('huisdieren-error').innerHTML = "Vul het aantal huisdieren in!"
    } else {
        document.getElementById('huisdieren-error').innerHTML = ""
    }

    var auto = document.getElementById('auto').value;
    if (auto == "") {
        document.getElementById('auto-error').innerHTML = "Vul het aantal auto's in!"
    } else {
        document.getElementById('auto-error').innerHTML = ""
    }

    var volwassenen = document.getElementById('volwassenen').value;
    if (volwassenen == "") {
        document.getElementById('volwassenen-error').innerHTML = "Vul het aantal volwassenen in!"
    } else {
        document.getElementById('volwassenen-error').innerHTML = ""
    }

    var kenteken = document.getElementById('kenteken').value;
    if (kenteken == "") {
        document.getElementById('kenteken-error').innerHTML = "Vul je kenteken in!"
    } else {
        document.getElementById('kenteken-error').innerHTML = ""
    }

    scroll(0,0)
});