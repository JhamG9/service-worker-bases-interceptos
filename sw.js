


self.addEventListener('fetch', event => {

    // *********** MANEJO DE ERRORES ************ 
    const response = fetch(event.request).then(resp => {
        {
            // if (resp.ok) {
            //     return resp;
            // } else {
            //     return fetch('img/main.jpg')
            // }
            return resp.ok ? resp : fetch('img/main.jpg');
        }
    });
    // respuesta corta
    //const response = fetch(event.request).then(resp => resp.ok ? resp : fetch('img/main.jpg'));
    event.respondWith(response);


    // INTERVENIR RESPUESTA DE IMAGEN
    // EN EL NETWORK SIGUE SIENDO main.jpg
    // if (event.request.url.includes('main.jpg')) {
    //     let fotoReq = fetch('img/main-patas-arriba.jpg');
    //     event.respondWith(fotoReq);
    // }

    // event.respondWith(fetch(event.request));



    //  MODIFICANDO RESPUESTA del CSS
    // if (event.request.url.includes('style.css')) {
    //     let respuesta = new Response(`
    //         body {
    //             background-color: red !important;
    //             color: pink;
    //         }`, {
    //         headers: {
    //             'Content-Type': 'text/css'
    //         }
    //     }

    //     );
    //     event.respondWith(respuesta);
    // }


    // INTERVENIR RESPUESTAS SEGUN EL NOMBRE DEL ARCHIVO
    // if (event.request.url.includes('.jpg')) {
    //     let fotoReq = fetch(event.request)

    //     event.respondWith(fotoReq);
    //     //event.respondWith(null);
    // }


    // console.log(event.request.url.includes('.jpg'));


    // if (event.request.url.includes('style.css')) {
    //     event.respondWith(null);
    // } else {
    //     event.respondWith(fetch(event.request));
    // }
});

