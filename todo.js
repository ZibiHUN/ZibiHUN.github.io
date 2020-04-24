var myCounter = 0;

$('button').on('click', () => {
    
    if (document.getElementById('Input0').value != '') {
        console.log('Input: ' + document.getElementById('Input0').value);
        $('ul').append('<li id="ListItem' + myCounter + '"><span>' + document.getElementById('Input0').value + '</span></li>');
        document.getElementById('Input0').value = '';
        myCounter++;

        var list = document.getElementsByTagName("li");
        for(var i=0; i<list.length; i++){
            list[i].addEventListener("click", function (e) {$(this).css("text-decoration", "line-through")});
        }

    }
});



jQuery('*:not(.nocapture)').on('click', function(e){
    e.stopPropagation();
    console.log('Element clicked', this); 
})