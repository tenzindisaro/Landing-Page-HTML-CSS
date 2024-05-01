// Função para carregar o arquivo XML
function loadXMLDoc(filename) {
    var xhttp;
    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    } else {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.open("GET", filename, false);
    xhttp.send();
    return xhttp.responseXML;
}

// Função para adicionar as opções de países ao select
function populateCountries() {
    var xmlDoc = loadXMLDoc("assets/data/paises.xml");
    var countries = xmlDoc.getElementsByTagName("country");
    var select = document.getElementById("country");

    for (var i = 0; i < countries.length; i++) {
        var option = document.createElement("option");
        option.value = countries[i].getAttribute("code");
        option.textContent = countries[i].childNodes[0].nodeValue;
        select.appendChild(option);
    }
}

// Função para adicionar as opções de estados ao select
function populateStates() {
    var xmlDoc = loadXMLDoc("assets/data/estados.xml");
    var estados = xmlDoc.getElementsByTagName("estado");
    var select = document.getElementById("state");

    for (var i = 0; i < estados.length; i++) {
        var sigla = estados[i].getAttribute("sigla");
        var nome = estados[i].childNodes[0].nodeValue;
        var option = document.createElement("option");
        option.value = sigla;
        option.textContent = nome;
        select.appendChild(option);
    }
}

// Função para adicionar as opções de instituições de ensino ao select
function populateUniversities() {
    var xmlDoc = loadXMLDoc("assets/data/instituicao.xml");
    var instituicoes = xmlDoc.getElementsByTagName("faculdade");
    var select = document.getElementById("university");

    for (var i = 0; i < instituicoes.length; i++) {
        var nome = instituicoes[i].getAttribute("nome");
        var option = document.createElement("option");
        option.textContent = nome;
        select.appendChild(option);
    }
}

// Função para adicionar as opções de áreas de estudo ao select
function populateStudyFields() {
    var xmlDoc = loadXMLDoc("assets/data/formacao.xml");
    var cursos = xmlDoc.getElementsByTagName("curso");

    var select = document.getElementById("study-field");

    for (var i = 0; i < cursos.length; i++) {
        var code = cursos[i].getAttribute("code");
        var nome = cursos[i].childNodes[0].nodeValue;
        var option = document.createElement("option");
        option.value = code;
        option.textContent = nome;
        select.appendChild(option);
    }
}

// Chama as funções para popular os países, estados, universidades e áreas de estudo quando o DOM estiver carregado
document.addEventListener("DOMContentLoaded", function() {
    populateCountries();
    populateStates();
    populateUniversities();
    populateStudyFields();
});
