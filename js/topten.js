var texts = [
"Coding is unquestionably one of my passions.  My YouTube channel showcases the entire process of making this website.  I also wrote an online gallery website for my art class, so that people who couldn't make it to an in-person exhibit could still show off their art.",
"Making 3D animations allows me to do things I wouldn't normally be able to do, such as making a computer explode, or literally knocking down half a million dominoes.",
"I do like playing video games. I don't, however, like playing mind-numbing first-person shooters.  Instead, I like games that have a puzzle in them such as Portal 2 and Superliminal.  I also like creating modern houses and cities in Minecraft.",
"Reading transports me into another world and helps me relax.  That's really all there is to say.",
"Art is yet another way I harness my creativity.  I really enjoy painting with acrylic.  Other ways I like to make art is through Minecraft, where I can easily make beautiful (albeit slightly blocky) dwellings.",
"Of course, since I'm very tech-minded and have a lot of tech, I need a place to put it all.  That's where my building skills come in.  This year, I built my own shelf using wood repurposed from other project.  The neat thing about building something yourself is that you can customize it however you want. ",
"I'm interested in science because it basically explains how the world works.  As someone who wants to know how things work and why they work that way, science helps me in my pursuit of knowledge.",
"Math.  Some kids hate it, some don't mind it.  Personally, I think it's been extremely helpful in science, as you can calculate the mass of an object, determine the half-life of a radioactive substance, and estimate the trajectory of an object through the air.",
"I like to go camping and hiking with my Boy Scout troop.  This is because I love to see all the beautiful nature.  I don't like camping as much, but I do like sitting around the campfire.",
"Parkour is fun for me because it gives me somewhere to use all my raw energy.  I go to Firestorm Galaxy to learn and practice skills on bars and wood structures.",
]
var pintrests = ["Coding","Making 3D Animations",
"Playing video games","Reading","Art","Building",
"Science","Math","Hiking & Camping","Parkour/Freerunning"]
var imgs = [
"<img src=\"/data/topten/coding.jpg\" height=\"500px\"></img>",
"<img src=\"/data/topten/renders.png\" height=\"500px\"></img>",
"<img src=\"/data/topten/gaming.jpg\" height=\"500px\"></img>",
"<img src=\"/data/topten/reading.jpg\" height=\"500px\"></img>",
"<img src=\"/data/topten/art.jpg\" height=\"500px\"></img>",
"<img src=\"/data/topten/building.jpg\" height=\"500px\"></img>",
"<img src=\"/data/topten/science.jpg\" height=\"500px\"></img>",
"<img src=\"/data/topten/math.jpg\" height=\"500px\"></img>",
"<img src=\"/data/topten/null.jpg\" height=\"500px\"></img>",
"<img src=\"/data/topten/null.jpg\" height=\"500px\"></img>"
]
for(i=0; i<10; i++){
    console.log(i)
    document.getElementById(i+1+"").innerHTML = pintrests[i]
}
function a(){
    document.getElementById("headertext").innerHTML = pintrests[0]
    document.getElementById("textarea").innerHTML = texts[0]
    document.getElementById("img").innerHTML = imgs[0]
}
function b(){
    document.getElementById("headertext").innerHTML = pintrests[1]
    document.getElementById("textarea").innerHTML = texts[1]
    document.getElementById("img").innerHTML = imgs[1]
}
function numc(){
    document.getElementById("headertext").innerHTML = pintrests[2]
    document.getElementById("textarea").innerHTML = texts[2]
    document.getElementById("img").innerHTML = imgs[2]
}
function d(){
    document.getElementById("headertext").innerHTML = pintrests[3]
    document.getElementById("textarea").innerHTML = texts[3]
    document.getElementById("img").innerHTML = imgs[3]
}
function e(){
    document.getElementById("headertext").innerHTML = pintrests[4]
    document.getElementById("textarea").innerHTML = texts[4]
    document.getElementById("img").innerHTML = imgs[4]
}
function f(){
    document.getElementById("headertext").innerHTML = pintrests[5]
    document.getElementById("textarea").innerHTML = texts[5]
    document.getElementById("img").innerHTML = imgs[5]
}
function g(){
    document.getElementById("headertext").innerHTML = pintrests[6]
    document.getElementById("textarea").innerHTML = texts[6]
    document.getElementById("img").innerHTML = imgs[6]
}
function h(){
    document.getElementById("headertext").innerHTML = pintrests[7]
    document.getElementById("textarea").innerHTML = texts[7]
    document.getElementById("img").innerHTML = imgs[7]
}
function hi(){
    document.getElementById("headertext").innerHTML = pintrests[8]
    document.getElementById("textarea").innerHTML = texts[8]
    document.getElementById("img").innerHTML = imgs[8]
}
function j(){
    document.getElementById("headertext").innerHTML = pintrests[9]
    document.getElementById("textarea").innerHTML = texts[9]
    document.getElementById("img").innerHTML = imgs[9]
}