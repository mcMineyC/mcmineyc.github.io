var count = 0
var gallery;


//init gallery
window.addEventListener('load', function() {
    var options = {
        showLabels: 'always',
        lightbox: true,
        itemsPerRow: 4,
        rowHeight: 400,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    };
    // Get reference of gallery container
    var elementRef = document.getElementById('gallery');

    gallery = new NaturalGallery.Natural(elementRef,options);
    var items = []
    //get data
    axios.get('/getcount')
    .then(response => {
        count = parseInt(response.data)
        console.log("Got count: "+count)
        if(count == 0){
            document.getElementById("errorcont").innerHTML = "<h2>Nothing here!</h2>"
        }
        axios.get('/getstuff')
        .then(async response => {
            const data = response.data;
            var datii = JSON.parse(JSON.stringify(data))
            console.log(count)
            for(i=1;i<count+1;i++){
                console.log("data "+i+": "+JSON.stringify(datii[i]))
                items[i] = (datii[i])
            }
            console.log("init gallery")
            gallery.setItems(items)
            gallery.init();
            console.log("done?")
            const observe = (domNode) => {
                var targetNode = domNode;
              
                var observerConfig = {
                  attributes: true,
                  childList: true,
                  characterData: true
                };
              
                return new Promise((resolve) => {
                    var observer = new MutationObserver(function (mutations) {
                       resolve(mutations)
                   });
                   observer.observe(targetNode, observerConfig);
                 })
            }
            console.log(await observe(document.querySelector(".natural-gallery-body")));
            var cnt = 0;
            console.log(`GOT data`, datii);
            const elems = document.querySelectorAll("div.natural-gallery-body > a");
            console.log("Elems",elems)
            for(i=1;i<count+1;i++){
                console.log("link"+i+": "+datii[i].link)
                console.log("elem"+(i-1)+": ",elems[i-1])
                elems[i-1].setAttribute("href",datii[i].link)
            }
            elems.forEach((l,z) => {
                cnt++;
            })
        }).catch(error => console.error(error));
    }).catch(error => console.error(error));
    
})