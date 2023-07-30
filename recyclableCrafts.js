let arrayOfCrafts = [];

function addObjects(name, materials, age, time, link){
    const craft = {
        _name: name,
        _materials: materials,
        _age: age,
        _time: time,
        _link: link,

        get name() {
            return this._name;
        },
        get materials() {
            return this._materials;
        },
        get age() {
            return this._age;
        },
        get time() {
            return this._time;
        },
        get link() {
            return this._link;
        },
        set name(name) {
            this._name = name;
        },
        set materials(materials) {
            this._materials = materials;
        },
        set age(age) {
            this._age = age;
        },
        set time(time){
            this._time = time;
        },
        set link(link) {
            this._link = link;
        },

        displayLink(){
            console.log("To check out a step-by-step guide please copy and paste the following link into a browser:");
            console.log(this.link);
        }

    };
    arrayOfCrafts.push(craft);

}
function displayArrayOfCrafts(array) {
    for(let i = 0; i < array.length; i++){
        console.log(array[i].name);
    }
}

function check(currentMatierials){
    let found = false;
    for(let i = 0; i < arrayOfCrafts.length; i++){
        let craftMaterials = arrayOfCrafts[i].materials;
        for(let j = 0; j < craftMaterials.length; j++){
            if(currentMatierials === craftMaterials[j]){
                console.log(`The craft available is called ${arrayOfCrafts[i].name}.`)
                arrayOfCrafts[i].displayLink();
                found = true;
            } 
        }
    }
    if(!found){
        console.log("Unfortunately that recyclable is not part of any crafts");
    }
}
// Adding two craft projects to the array
addObjects("Bottle Cap Art", ["Bottle Caps", "Poster Board", "Glue", "Markers"], 3, 20, "https://iheartcraftythings.com/bottle-cap-art-fish-and-flower-scene.html");
addObjects("Toilet Paper Roll Bird Feeder", ["Peanut Butter", "Toilet Paper Roll", "String", "Bird Seeds"], 2, 20, "https://www.theresourcefulmama.com/toilet-paper-roll-bird-feeders/");
addObjects("Birds Recycled CD", ["CD", "Feather", "Construction Paper", "Googly Eye"], 4, 15, "https://www.allfreekidscrafts.com/Animal-Crafts-for-Kids/Spring-Birds-Recycled-CD");
// Testing to ensure that they were added
console.log("List of current projects:")
displayArrayOfCrafts(arrayOfCrafts);
console.log("-----------------------------")
// Using the check function to see if the recyclables on hand
// can be used for a craft project.
console.log("Checking...");
check("Toilet Paper Roll");