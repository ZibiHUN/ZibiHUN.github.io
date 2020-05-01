
var images = [
    {file: "trail.png", title: "Sinek", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    {file: "bubble.png", title: "Buborék", desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
    {file: "image1.jpg", title: "Horizont", desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod blanditiis accusantium ipsum unde dolorum cum tempora sed?"},
    {file: "image2.jpg", title: "Vegas", desc: "Ipsam, amet. Sapiente ratione provident optio molestiae rem numquam veniam minima consequatur accusantium?"},
    {file: "image3.jpg", title: "Sport Car", desc: "Magnam illo eum voluptatem iste aliquam tenetur beatae dolores perferendis non voluptatibus autem vitae praesentium repellendus, eaque ratione ab in similique ullam."},
    {file: "image4.jpg", title: "Út", desc: "Vitae, culpa tempore, temporibus repudiandae architecto aliquam excepturi maxime id tempora minima alias fugit nostrum illo assumenda perspiciatis."},
    {file: "image5.jpg", title: "Naplemente", desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla doloribus quas quod ea omnis quia blanditiis doloremque."},
    {file: "butterfly.jpg", title: "Pillangó", desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}
];

var photoCounter = 0;
$('#photo').attr("src", "./images/"+images[photoCounter].file);
$('#Caption').html(images[photoCounter].title);
$('#Desc').html(images[photoCounter].desc);
$("#thumb" + [photoCounter]).css("border", "2px solid #4d4d4d");


for (let index = 0; index < images.length; index++) {
    /*const element = array[index];*/
    $thumb = '#pic' + index;
    $titles = '#title_pic' + index;
    console.log($thumb, $titles);
    $($thumb).attr("src", "./images/"+images[index].file);
    $($titles).html(images[index].title);
    //$($thumb).attr("height", "50px");
    
}


jQuery('*:not(.nocapture)').on('click', function(e){
    e.stopPropagation();
    console.log('Element clicked', this); 
})

$('#right').on('click', () => {
    $("#thumb" + [photoCounter]).css("border", "2px solid #d9d9d9");
    photoCounter++;
    console.log(photoCounter, images.length);
    if (photoCounter > images.length-1) {
        photoCounter = 0;        
    }
    $('#photo').attr("src", "./images/"+images[photoCounter].file);
    $('#Caption').html(images[photoCounter].title);
    $('#Desc').html(images[photoCounter].desc);
    $("#thumb" + [photoCounter]).css("border", "2px solid #4d4d4d");
});

$('#left').on('click', () => {
    $("#thumb" + [photoCounter]).css("border", "2px solid #d9d9d9");
    photoCounter--;
    console.log(photoCounter, images.length);
    if (photoCounter < 0) {
        photoCounter = images.length-1;        
    }
    $('#photo').attr("src", "./images/"+images[photoCounter].file);
    $('#Caption').html(images[photoCounter].title);
    $('#Desc').html(images[photoCounter].desc);
    $("#thumb" + [photoCounter]).css("border", "2px solid #4d4d4d");
});


jQuery('img[id^="pic"]').on('click', function(e){
    e.stopPropagation();
    $("#thumb" + [photoCounter]).css("border", "2px solid #d9d9d9");
    photoCounter = this.id.substring(3);
    $('#photo').attr("src", "./images/"+images[photoCounter].file);
    $('#Caption').html(images[photoCounter].title);
    $('#Desc').html(images[photoCounter].desc);
    $("#thumb" + [photoCounter]).css("border", "2px solid #4d4d4d");

})
