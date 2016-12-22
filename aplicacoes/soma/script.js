var calc = {
    "x": 0, //definiu valor 1
    "y": 0, //definiu valor 2
    "somar": function () {
        return this.x + this.y; //inseriu form
    }
};

$(main);

function main() {
    $("#calc").click(function () {
        calc.x = parseInt($("#t1").val()); //pegou id do form
        calc.y = parseInt($("#t2").val()); //pegou id do form
        alert(calc.somar()); //escreveu form
    });
}
