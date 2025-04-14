window.addEventListener("load", () => {

    const cabezas = document.querySelectorAll('.dropdown-button');

    const toggleDropdown = (header) => {
        const content = header.nextElementSibling;
        const isOpen = content.classList.contains('open');

        document.querySelectorAll('.dropdown-content.open').forEach(openContent => {
            openContent.classList.remove('open');
            openContent.style.maxHeight = '0';
            openContent.style.padding = '0 2rem';
        });

        if (!isOpen) {
            content.classList.add('open');
            content.style.maxHeight = content.scrollHeight + 'rem';
            content.style.padding = "2rem";
        }
    };

    const addListeners = () => {
        cabezas.forEach(header => {
            header.addEventListener("click", clickHandler);
        });
    };

    const removeListeners = () => {
        cabezas.forEach(header => {
            header.removeEventListener("click", clickHandler);
            let cluster = header.classList[1].split("__")[1];
            header.setAttribute("onclick", `mostrarContenido('${cluster}')`);
        });
    };

    const clickHandler = (event) => {
        toggleDropdown(event.currentTarget);
    };

    const checkScreenWidth = () => {
        if (window.innerWidth >= 1020) {
            removeListeners(); // Elimina los listeners si el ancho de pantalla es mayor a 1020
        } else {
            addListeners(); // Agrega los listeners si el ancho de pantalla es menor a 1020
        }
    };

    checkScreenWidth(); // Verifica el tamaño inicial
    window.addEventListener('resize', checkScreenWidth); // Revisa cambios en el tamaño de la ventana

    //-====================== SLIDER ============================================
    //-==========================================================================

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 2,
        spaceBetween: 15,
        centeredSlides: false,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            420: {
                spaceBetween: 10,
            },
            1020: {
                slidesPerView: 4,
                slidesPerColumn: 4,
                spaceBetween: 0,
            }
        }
    });

    var swiper2 = new Swiper(".mySwiper2", {
        slidesPerView: 2,
        spaceBetween: 15,
        centeredSlides: false,
        loop: true,
        pagination: {
            // el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            420: {
                spaceBetween: 10,
            },
            1020: {
                slidesPerView: 4,
                slidesPerColumn: 4,
                spaceBetween: 0,
            }
        }
    });

    var slider3 = new Swiper(".mySwiper3", {
        spaceBetween: 25,
        pagination: {
            el: ".swiper-pagination6",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="bullet3 ' + className + '"></span>';
            }
        },
        loop: true,
        breakpoints: {
            760: {
                slidesPerView: 3,
                slidesPerColumn: 1
            },
            999: {
                slidesPerView: 3,
                slidesPerColumn: 3
            },
        }
    });

    var swiper4 = new Swiper(".mySwiper4", {
        slidesPerView: 2,
        spaceBetween: 15,
        centeredSlides: false,
        loop: true,
        pagination: {
            // el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            420: {
                spaceBetween: 10,
            },
            1020: {
                slidesPerView: 4,
                slidesPerColumn: 4,
                spaceBetween: 0,
            }
        }
    });

    var slider3 = new Swiper(".mySwiper5", {
        spaceBetween: 25,
        pagination: {
            el: ".swiper-pagination5",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="bullet5 ' + className + '"></span>';
            }
        },
        loop: true,
        breakpoints: {
            760: {
                slidesPerView: 3,
                slidesPerColumn: 1
            },
            999: {
                slidesPerView: 3,
                slidesPerColumn: 3
            },
        }
    });

});




