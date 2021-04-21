var canvas = new fabric.Canvas("myCanvas");

player_x = 30;
player_y = 30;

block_image_width = 30;
block_image_height = 30;

var player_object = "";
var block_image_object = "";

function player_update() {
    fabric.Image.fromURL("player.png", function (Img){
        player_object= Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function (Img){
        block_image_object= Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image_object);
    });
}

window.addEventListener("keydowm", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey == true && keyPressed == "80"){
        console.log("shift+p");
        block_image_height = block_image_height + 10;
        block_image_width = block_image_width + 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }

    if(e.shiftKey == true && keyPressed == "77"){
        console.log("shift+m");
        block_image_height = block_image_height - 10;
        block_image_width = block_image_width - 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }

    if(keyPressed == "38"){
        console.log("up arrow");

        up();
    }

    if(keyPressed == "39"){
        console.log("right arrow");

        right();
    }

    if(keyPressed == "37"){
        console.log("left arrow");

        left();
    }

    if(keyPressed == "40"){
        console.log("down arrow");

        down();
    }

    if(keyPressed == "83"){
        console.log("S");
        new_image("https://img.fireden.net/co/image/1452/56/1452568264603.png");
    }

    if(keyPressed == "73"){
        console.log("i");
        new_image("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5b8d2b12-21e8-4931-8a6d-fb9ecdd60383/dc5rmwg-2249ecd6-106c-4a27-9198-f640dfc658cf.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNWI4ZDJiMTItMjFlOC00OTMxLThhNmQtZmI5ZWNkZDYwMzgzXC9kYzVybXdnLTIyNDllY2Q2LTEwNmMtNGEyNy05MTk4LWY2NDBkZmM2NThjZi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.O7kCxhqIoCO36INLMXbnXjm7jx0km7ZDocS_do8Fclo")
    }

    if(keyPressed == "72"){
        console.log("h");
        new_image("data:image/jpeg;base64,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");
    }

    if(keyPressed == "84"){
        console.log("t");
        new_image("https://toppng.com/uploads/preview/thor-fighting-with-his-hammer-png-image-thor-png-transparent-11562970809rng1c6b8bd.png");
    }

}

function up() {
    if(player_y >=0){
        player_y=player_y - block_image_height;
        console.log("block image height= " + block_image_height);
        console.log("when up arrow pressed , x = " + player_x + ", y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function down() {
    if(player_y <=500){
        player_y=player_y + block_image_height;
        console.log("block image height= " + block_image_height);
        console.log("when down arrow pressed , x = " + player_x + ", y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function left() {
    if(player_x >0){
        player_x=player_x - block_image_width;
        console.log("block image width= " + block_image_width);
        console.log("when left arrow pressed , x = " + player_x + ", y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function right() {
    if(player_x <=850){
        player_x=player_x + block_image_width;
        console.log("block image width= " + block_image_width);
        console.log("when right arrow pressed , x = " + player_x + ", y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}