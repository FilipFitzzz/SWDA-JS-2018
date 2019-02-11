var imina = ['Mice', 'Ana', 'Marija', 'Vesna', 'Aleksandra'];

function longest() {
    var najdolgo = imina[0];
    var najkratko = imina[0];

    for(var i = 0; i < imina.length; i++) {
        if(imina[i].length > najdolgo.length) {
            najdolgo = imina[i];
        }

        if(imina[i].length < najkratko.length) {
            najkratko = imina[i];
        }
    }

    console.log(najdolgo);
    console.log(najkratko);
}

longest();