var cont = 0
var num = 0
var total = parseInt(0)

function agregar(nombre, precio) {
    cont++
    num++
    $("#span1").text(num);
    $("#tabla").append('<tr id="fila'+cont+'" class="selected" onclick="seleccionar(this.id)"><td>'+num+"</td><td>"+nombre+"</td><td>"+precio+"</td></tr>");
    total+=parseInt(precio)
}

function seleccionar(id_fila) {
    if ($("#" + id_fila).hasClass("selected")) {
        $("#" + id_fila).removeClass("selected");
        $("#" + id_fila).addClass("seleccionada");
    }
    else if ($("#" + id_fila).hasClass("seleccionada")) {
        $("#" + id_fila).removeClass("seleccionada");
        $("#" + id_fila).addClass("selected");
    }
}

$("#btn1").click(function () {
    event.preventDefault();
    var nombre = $("#nombre1").text();
    var precio = $("#precio1").text();
    agregar(nombre, precio)
});

$("#btn2").click(function () {
    event.preventDefault();
    var nombre = $("#nombre2").text();
    var precio = $("#precio2").text();
    agregar(nombre, precio)
});

$("#btn3").click(function () {
    event.preventDefault();
    var nombre = $("#nombre3").text();
    var precio = $("#precio3").text();
    agregar(nombre, precio)
});

$("#btn4").click(function () {
    event.preventDefault();
    var nombre = $("#nombre4").text();
    var precio = $("#precio4").text();
    agregar(nombre, precio)
});

$("#btn5").click(function () {
    event.preventDefault();
    var nombre = $("#nombre5").text();
    var precio = $("#precio5").text();
    agregar(nombre, precio)
});

$("#btn6").click(function () {
    event.preventDefault();
    var nombre = $("#nombre6").text();
    var precio = $("#precio6").text();
    agregar(nombre, precio)
});

$("#btn7").click(function () {
    event.preventDefault();
    var nombre = $("#nombre7").text();
    var precio = $("#precio7").text();
    agregar(nombre, precio)
});

$("#btn8").click(function () {
    event.preventDefault();
    var nombre = $("#nombre8").text();
    var precio = $("#precio8").text();
    agregar(nombre, precio)
});

$("#btnElim").click(function () {
    $(".seleccionada").fadeOut(function () {
        $(this).remove();
        $("#tabla tr").each(function (index) {
            if (index != 0) {
                $(this).find('td:first').text(index);
                num = index;
            }
        });
        $("#span1").text(num);
    });
});

$("#btnComp").click(function () { 
    var modalContent = `
        <div class="modal fade" id="customModal" tabindex="-1" aria-labelledby="customModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="customModalLabel">Compra Realizada</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        ¡Todo listo soldado! Vamos a luchar.
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    $("body").append(modalContent);
    $("#customModal").modal("show");
    setTimeout(function () {
        $("#customModal").modal("hide");
        location.reload();
    }, 2000);
});

$("#ARSENAL").mouseenter(function () {
    $(this).animate({ fontSize: "24px" }, 200);
});

$("#ARSENAL").mouseleave(function () {
    $(this).animate({ fontSize: "16px" }, 200);
});

$("#Usuario").mouseenter(function () {
    $(this).animate({ fontSize: "24px" }, 200);
});

$("#Usuario").mouseleave(function () {
    $(this).animate({ fontSize: "16px" }, 200);
});

$(".boton").mouseenter(function () { 
    $(this).animate({ fontSize: "24px" }, 200);
});

$(".boton").mouseleave(function () { 
    $(this).animate({ fontSize: "16px" }, 200);
});

$("#btnElim").mouseenter(function () {
    $(this).animate({ fontSize: "24px" }, 200);
});

$("#btnElim").mouseleave(function () {
    $(this).animate({ fontSize: "16px" }, 200);
});

$("#btnComp").mouseenter(function () {
    $(this).animate({ fontSize: "24px" }, 200);
});

$("#btnComp").mouseleave(function () {
    $(this).animate({ fontSize: "16px" }, 200);
});