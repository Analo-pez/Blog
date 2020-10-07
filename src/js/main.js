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
            date: 'Publicado el ' + moment().day() + " de "+ moment().format("MMMM YYYY"),
            content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium consequuntur aliquam eaque, porro itaque eligendi. Placeat nisi aspernatur itaque, nam omnis numquam, harum repellat expedita ab soluta facere, vero vel. Lorem ipsum dolor sit amet  consectetur adipisicing elit. Eaque at repellat ex consequuntur blanditiis maxime, placeat dignissimos labore consectetur, numquam officia voluptatum dolores ut suscipit error ducimus aut  mollitia alias. Lorem ipsum dolor sit amet consectetur adipisicing elit. In asperiores, deserunt eveniet doloribus beatae excepturi doloremque vel libero at, assumenda sapiente delectus officiis quidem facere dolor quae, officia veritatis et"
        },
        {
            title: "Prueba título 2",
            date: 'Publicado el ' + moment().day() + " de "+ moment().format("MMMM YYYY"),
            content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium consequuntur aliquam eaque, porro itaque eligendi. Placeat nisi aspernatur itaque, nam omnis numquam, harum repellat expedita ab soluta facere, vero vel. Lorem ipsum dolor sit amet  consectetur adipisicing elit. Eaque at repellat ex consequuntur blanditiis maxime, placeat dignissimos labore consectetur, numquam officia voluptatum dolores ut suscipit error ducimus aut  mollitia alias. Lorem ipsum dolor sit amet consectetur adipisicing elit. In asperiores, deserunt eveniet doloribus beatae excepturi doloremque vel libero at, assumenda sapiente delectus officiis quidem facere dolor quae, officia veritatis et"
        },
        
    ]

posts.forEach((item,index) => {
    let post =`<article class="post">
      <h2 class="post__title">${item.title}</h2>
      <small class="post__small">${item.date}</small>
      <p class="post__paragraph">${item.content} </p>
      <button class="post__button">
        <a href="#">Leer más</a>
      </button>
    </article>`;

$(".posts").append(post);
});

});
