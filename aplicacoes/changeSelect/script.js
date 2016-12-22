$(document).ready(function () {
    var options = "";
    $("#gender").on('change', function () {
        var value = $(this).val();
        if (value == "Homem") {
            options = "<option>Selecione seu nome</option>" + "<option value='homem1'>Luciano</option>" + "<option value='homem2'>Yuri</option>";
            $("#name").html(options);
        } else if (value == "Mulher") {
            options = '<option>Selecione seu nome</option>' + '<option value="mulher1">Luma</option>' + '<option value="mulher2">Carla</option>';
            $("#name").html(options);
        } else
            $("#name").find('option').remove()
    });
});
