var myCounter = 2;

jQuery('*:not(.nocapture)').on('click', function(e){
    e.stopPropagation();
    console.log('Element clicked', this, ' (', this.parentElement.id ,')'); 
})

function function_done(myElement){
    $(myElement.parentElement).css("opacity", "15%");
    myDoneButton = document.getElementById('todo2').getElementsByClassName('done')[0];
    $(myDoneButton).css("fill", "green");

}


$('#input_button').on('click', () => {
    console.log('Step in...');
    if (document.getElementById('input_input').value != '') {
        console.log('Input: ' + document.getElementById('input_input').value);

        var myParentNode = "todo" + myCounter;

    //Itt adjuk hozzá az új listaelemet
        $addTo = document.getElementById("todo_list");
        toAdd = '<div id="' + myParentNode + '" class="todo"></div>';
        console.log(toAdd, '-->', $addTo);
        $(toAdd).appendTo($addTo);

    //Itt adjuk hozzá a listaelemhez a feladatot
        $addTo = document.getElementById(myParentNode);
        $('<div class="desc">' + document.getElementById('input_input').value + '</div>').appendTo($addTo);

    //Itt adjuk hozzá a kiukát
        $('<div onClick="this.parentElement.remove()" class="delete"></div>').appendTo($addTo);

     //Itt adjuk hozzá a pipát
        $('<div onClick="function_done(this)" class="done"></div>').appendTo($addTo);

        myCounter++;
        console.log('New task added.');
        document.getElementById('input_input').value = '';
    } else {
        console.log('Input empty.');   
    }
});


