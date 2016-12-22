$(main);

function main() {
    $("h1,p,button,span").click(function () { /*Funcao anonima*/
        $(this).text("Suporte"); /*This chama quando clica*/
        //$("this").toggleClass("ligar");
    });
}
