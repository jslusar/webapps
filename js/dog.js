  // var ids = ['dogs', 'dogs1', 'dogs2', 'dogs3', 'dogs4', 'dogs5', 'dogs6', 'dogs7']
  // for (id in ids) {
        const url = 'http://dog.ceo/api/breeds/image/random';

        // all takes an array of promises and waits for them to compelte
        Promise.all([url,url,url,url,url].map(u=>fetch(u)))
          .then (resp=>Promise.all(resp.map( r=> r.json())))
          .then (results=>{
            console.log(results)
            for (var i=0; i<results.length; i++){

                let dogImg = results[i].message;
                var message;

                if (i === 0)
                  message = '<div class="carousel-item active">'
                else
                  message = '<div class="carousel-item">'

                message += '<img class="d-block w-100" src="' + dogImg + '" alt="dog slide">'
                message += '</div>'
                document.getElementById('dog-carousel').innerHTML += message;//ids[id]
                if(i === 1){
                  console.log("starting carousel")
                  // from the docs, use jquery to start up the myCarousel
                  // https://getbootstrap.com/docs/4.0/components/carousel/#methods
                  $('.carousel').carousel({
                                            interval: 2000
                                          })
                }

            }
          })

        .catch(function(error) {
        console.log(error);
        });

    // }
        // fetch(url)
        //     .then((resp) => resp.json())
        //     .then(function(data) {
        //         let dogImg = data.message;
        //         var message = '<img class="d-block w-100" src="'+ dogImg+'" alt="Loading">'
        //         document.getElementById('dogs1').innerHTML = message;//ids[id]
        //     })
        // .catch(function(error) {
        // console.log(error);
        // });
