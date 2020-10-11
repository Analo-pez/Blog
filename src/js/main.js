$(document).ready(function () {
    console.log('jQuery funcionando');

    $(document).ready(function () {
        $('.slider').bxSlider({
            mode: 'fade',
            responsive: true,
            pager: false //quita los puntos-indice bajo el slider
        });
    });

    let posts = [
        {
            title: "Prueba título 1",
            date: 'Publicado el ' + moment().day() + " de " + moment().format("MMMM YYYY"),
            content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium consequuntur aliquam eaque, porro itaque eligendi. Placeat nisi aspernatur itaque, nam omnis numquam, harum repellat expedita ab soluta facere, vero vel. Lorem ipsum dolor sit amet  consectetur adipisicing elit. Eaque at repellat ex consequuntur blanditiis maxime, placeat dignissimos labore consectetur, numquam officia voluptatum dolores ut suscipit error ducimus aut  mollitia alias. Lorem ipsum dolor sit amet consectetur adipisicing elit. In asperiores, deserunt eveniet doloribus beatae excepturi doloremque vel libero at, assumenda sapiente delectus officiis quidem facere dolor quae, officia veritatis et"
        },
        {
            title: "Prueba título 2",
            date: 'Publicado el ' + moment().format("D MMMM YYYY"),
            content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium consequuntur aliquam eaque, porro itaque eligendi. Placeat nisi aspernatur itaque, nam omnis numquam, harum repellat expedita ab soluta facere, vero vel. Lorem ipsum dolor sit amet  consectetur adipisicing elit. Eaque at repellat ex consequuntur blanditiis maxime, placeat dignissimos labore consectetur, numquam officia voluptatum dolores ut suscipit error ducimus aut  mollitia alias. Lorem ipsum dolor sit amet consectetur adipisicing elit. In asperiores, deserunt eveniet doloribus beatae excepturi doloremque vel libero at, assumenda sapiente delectus officiis quidem facere dolor quae, officia veritatis et"
        },
        {
            title: "Prueba título 3",
            date: 'Publicado el ' + moment().format("D MMMM YYYY"),
            content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium consequuntur aliquam eaque, porro itaque eligendi. Placeat nisi aspernatur itaque, nam omnis numquam, harum repellat expedita ab soluta facere, vero vel. Lorem ipsum dolor sit amet  consectetur adipisicing elit. Eaque at repellat ex consequuntur blanditiis maxime, placeat dignissimos labore consectetur, numquam officia voluptatum dolores ut suscipit error ducimus aut  mollitia alias. Lorem ipsum dolor sit amet consectetur adipisicing elit. In asperiores, deserunt eveniet doloribus beatae excepturi doloremque vel libero at, assumenda sapiente delectus officiis quidem facere dolor quae, officia veritatis et"
        },
        {
            title: "Prueba título 4",
            date: 'Publicado el ' + moment().format("D MMMM YYYY"),
            content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium consequuntur aliquam eaque, porro itaque eligendi. Placeat nisi aspernatur itaque, nam omnis numquam, harum repellat expedita ab soluta facere, vero vel. Lorem ipsum dolor sit amet  consectetur adipisicing elit. Eaque at repellat ex consequuntur blanditiis maxime, placeat dignissimos labore consectetur, numquam officia voluptatum dolores ut suscipit error ducimus aut  mollitia alias. Lorem ipsum dolor sit amet consectetur adipisicing elit. In asperiores, deserunt eveniet doloribus beatae excepturi doloremque vel libero at, assumenda sapiente delectus officiis quidem facere dolor quae, officia veritatis et"
        },

    ]

    posts.forEach((item, index) => {
        let post = `<article class="post">
      <h2 class="post__title">${item.title}</h2>
      <small class="post__small">${item.date}</small>
      <p class="post__paragraph">${item.content} </p>
      <button class="post__button">
        <a href="#">Leer más</a>
      </button>
    </article>`;

        $(".posts").append(post);
    });


    //EVENTO JAVASCRIPT PARA CAMBIAR TEMAS
    const title = document.querySelector(".logo__title");
    const btns = document.querySelectorAll(".post__button");
    const page = document.querySelector(".page");
    const themes = document.querySelectorAll("span");

    const paintTheme = (ev) => {
        const clicked = ev.currentTarget;
        if (clicked === themes[0]) {
            console.log('estoy verde')
            title.classList.remove("blue", "red")
            page.classList.remove("blueImg", "redImg")
            for (const btn of btns) {
                btn.classList.remove("blue", "red")
            }
        }
        if (clicked === themes[1]) {
            console.log('estoy pintando')
            title.classList.add("red")
            page.classList.add("redImg")
            title.classList.remove("blue")
            page.classList.remove("blueImg")
            for (const btn of btns) {
                btn.classList.add("red")
                btn.classList.remove("blue")
            }
        } else if (clicked === themes[2]) {
            console.log('estoy pintando azul')
            title.classList.add("blue")
            page.classList.add("blueImg")
            for (const btn of btns) {
                btn.classList.add("blue")
            }
        }

    }
    for (const theme of themes) {
        theme.addEventListener('click', paintTheme)
    }

    // ANIMACION SCROLL
    $(".footer__btn").click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });

    // LOGIN FALSE
    $(".sidebar__form").submit(function () {
        let inputName = $(".sidebar__form--name").val();
        localStorage.setItem("name", inputName)
        let inputPswrd = $(".sidebar__form--pswrd").val();
        localStorage.setItem("password", inputPswrd)
    })
    let nameLog = localStorage.getItem("name");
    let passwordLog = localStorage.getItem("password");

    if (nameLog && passwordLog) {
        $(".sidebar__paragraph").html("Welcome, " + nameLog + "<br><br><a class='logout' href='#'>Cerrar sesión</a>");
        $(".sidebar__form").hide();
        $(".logout").click(function () {
            localStorage.clear();
            location.reload();
        })
    }



});
