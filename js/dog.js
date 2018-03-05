  // var ids = ['dogs', 'dogs1', 'dogs2', 'dogs3', 'dogs4', 'dogs5', 'dogs6', 'dogs7']
  // for (id in ids) {
        const url = 'http://dog.ceo/api/breeds/image/random';
        fetch(url)
            .then((resp) => resp.json())
            .then(function(data) {
                let dogImg = data.message;
                var message = '<img class="d-block w-100" src="'+ dogImg+'" alt="Loading">'
                document.getElementById('dogs').innerHTML = message;//ids[id]
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
