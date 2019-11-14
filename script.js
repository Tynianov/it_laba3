$(function () {
    var images = [
        "images/cat.jpg",
        "images/dog.jpg",
        "images/rabbit.jpg",
        "images/parrot.jpg"
    ]

    function setImages(){
        $("img").each(function (index) {
            $(this).attr('src', images[index])
        })
    }

    function shiftImages(direction){
        var moved_element;
        if (direction){
            moved_element = images.shift();
            images.push(moved_element)
        }
        else{
            moved_element = images.pop();
            images.unshift(moved_element)
        }
        setImages()
    }

    function zoomImage(direction){
        var width = parseInt($("img").first().attr('width'));
        var height = parseInt($("img").first().attr('height'));
        console.log(width)
        console.log(height)
        if (direction){
            $("img").each(function () {
                $(this).animate({width: '+=2px', height: '+=2px'})
            })
        }
        else{
            $("img").each(function () {
                $(this).animate({width: '-=2px', height: '-=2px'})
            })
        }
    }

    $('#up').click(function () {
        shiftImages(true)
    })
    $('#down').click(function () {
        shiftImages(false)
    })
    $('#plus').click(function () {
        zoomImage(true)
    })
    $('#minus').click(function () {
        zoomImage(false)
    })
})