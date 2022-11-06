//get all the images
veggieArray = ['turnip.png', 'eggplant.png', 'pepper.png']

//get a random index from array
function pickVeggie(){
    randomIndex = Math.floor(Math.random() * veggieArray.length);
    selectedImage = veggieArray[randomIndex]
    document.getElementById('randomVeggie').src = `./veggies${selectedImage}`
}