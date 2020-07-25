/************************************* */
$('#irA-Datos-de-Deudor').on('click', function () {
    if($('#guardar-Datos_de_solicitud'))
    {
        $("#Datos-de-Solicitud").removeClass("active show");
        $("#nav-Datos-de-Solicitud").removeClass("active");
        $("#nav-Datos-de-Deudor").addClass("active");
        $("#Datos-de-Deudor").addClass("active show");
    }
});