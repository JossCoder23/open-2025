window.addEventListener("load", () => {

    let checkBlock = document.getElementById('checkAcompanante');
    let gridAcom = document.getElementById('bloque1HiddenAcompanante');
    checkBlock.addEventListener("change", () => {
        if( checkBlock.checked ) {
            gridAcom.style.display = "flex";
        } else {
            gridAcom.style.display = "none";
        }
    })

    const entrada = document.getElementById('colegio');
    const sugerencia = document.getElementById('sugerencia');
    
    entrada.addEventListener("input", (ev) => {
        const valor = entrada.value.toLowerCase();
        sugerencia.innerHTML = "";
        sugerencia.style.display = "";
        if (valor) {
            const coincidencias = colegios.filter(opcion =>
                opcion.toLowerCase().includes(valor)
            );
            coincidencias.forEach(coincidencia => {
                const div = document.createElement("div");
                div.textContent = coincidencia;
                div.className = "sugerencia";
                div.onclick = () => {
                    entrada.value = coincidencia;
                    sugerencia.innerHTML = '';
                    sugerencia.style.display = 'none';
                };
                sugerencia.appendChild(div);
            })
            sugerencia.style.display = 'block';
        } 
    })

    entrada.addEventListener("blur", () => {
        const text = entrada.value;
        if( !colegios.includes( text ) ) {
            entrada.value = "";
        }
    })

});




