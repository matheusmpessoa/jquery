$(main);

function main() {
    $("p").dblclick(function () {
        alert("Parágrafo foi clicado duas vezes");
    });
    $("button").dblclick(function () {
        alert("Button foi clicado duas vezes");
    });
}
