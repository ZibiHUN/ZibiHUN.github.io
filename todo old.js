var myCounter = 2;

$('#input_button').on('click', () => {
    

});






jQuery('*:not(.nocapture)').on('click', function(e){
    e.stopPropagation();
    console.log('Element clicked', this); 
})
