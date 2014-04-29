Jupiter-y-sus-lunas
===================

Jupiter y sus lunas
window.onload = function()
{
    inicio();
}

function inicio()
{
    /*
    Tamaño/tomaño del sol = %
    */
    function movimiento(path, obj, vel)
    {
        //console.log("Vel de: "  + obj + " es: " + vel);
        var pathLength = path.getTotalLength();
        var tween = new TWEEN.Tween({ length: 0  })
        .to({ length: pathLength }, vel)
        .onUpdate(function()
        { var point = path.getPointAtLength(this.length);
            obj.style.webkitTransform = 'translate('+ point.x + 'px,'+ point.y +'px)';
        }).repeat(999999999).start();
        animate = function()
        {
            requestAnimationFrame(animate)
            TWEEN.update()
        }
        animate();
    }
    var tamReal = false;
    var creaLunas = function(objeto, luna)
    {
        var tamanoLuna = luna.tamano;
        //console.debug(objeto);
        if(tamReal)
        {
            //console.log("Ingresa");
            tamanoLuna = Math.round(jupiter.tamano * (luna.porcentaje / 100));
            //console.log(planeta.nombre + " = " + tamanoPlaneta);
        }
        objeto.style.width = tamanoLuna + "px";
        objeto.style.height = tamanoLuna + "px";
        objeto.style.backgroundImage = "url('lunas/"+lunas.imagen+"')";
        objeto.style.backgroundSize = tamanoLuna + "px " + tamanoLuna + "px";
        var margen = (Math.round(tamanoPlaneta / 2)) * -1;
        objeto.style.marginTop = margen + "px";
        objeto.style.marginLeft = margen + "px";
        objeto.style.borderRadius = "50%";
        objeto.style.position = "absolute";
        console.debug(objeto);
        console.log("basePlaneta " + planeta.imagen);
        objeto.style.border = "thick solid #FFF";
        objeto.setAttribute("class", "basePlaneta " + planeta.imagen);
    }
     var lunas = [
                {nombre: "luna 1", 
                 imagen: "luna 1.png",
                 porcentaje: 0.4,
                 tamano: 10 
                },
                {nombre: "luna 2", 
                 imagen: "luna 2.png",
                 porcentaje: 0.9,
                 tamano: 20 
                },
                {nombre: "luna 3", 
                 imagen: "luna 3.png",
                 porcentaje: 0.9,
                 tamano: 20 
                },
                {nombre: "luna 4", 
                 imagen: "luna 4.png",
                 porcentaje: 0.5,
                 tamano: 15 
                 }];

    var jupiter = nom_div('jupiter_svg');
    var jupiter = {
        tamano: objjupiter.height.baseVal.value, 
        x : objjupiter.x.baseVal.value, 
        y : objjupiter.y.baseVal.value
    };
    var objeto = "";
    var ruta = "";
    var velInicia = 30;
    for(var i = 1; i <= lunas.length; i++)
    {
        objeto = nom_div("objeto_" + i);
        ruta = nom_div("ruta_" + i);
        creaLunas(objeto, planetas[i - 1]);
        movimiento(ruta, objeto, velInicia);
        velInicia += 4000;
    }
    console.log("Hola mundo");
    function nom_div(div)
    {
        return document.getElementById(div);
    }
}
