let game = document.querySelector(".game")
let play = document.getElementById("play")


let randomClass = ['Archer', 'Warrior', 'Mage', 'Paladin']
let randomNum = Math.floor((Math.random() * 4));
let mcClass = randomClass[randomNum];

console.log(mcClass)


// Rolls for starting stats
let basedMCStats = {
    strength: Math.floor((Math.random() * 6)), // Base damage/Crit damage
    dexterity: Math.floor((Math.random() * 6)), // Dodge/crit chance
    vitality: Math.floor((Math.random() * 6)), // Health
    defense: Math.floor((Math.random() * 6)), // Defense
    magic: Math.floor((Math.random() * 6)), // Mana + Magic base damage
}

// Base Stats in consideration to starting stats
let MCStats = {

}

// Full possible Skillsets of each class
let ArcherSkills = ['Percision', 'Eagle Eye', 'Haste', 'Slow Recovery', 'Poison Shot', 'Double Shot']
let WarriorSkills = ['Great Vitality', 'Life Drain', 'Berserk', 'Guard up', 'Cleave', 'Final Blow']
let MageSkills = ['Double Cast', 'Soul Drain', 'Channeling', 'Fireball', 'Chain Lightning', 'Reflective Barrier']
let PaladinSkills = ['Great Vitality', 'Life Drain', 'Guard up', 'Greater Defense', 'Inverted bash','Reflective Barrier']





// Skills and Description of the character 
let McSkills = [];
let description = [];
let type = [];
let consumption = [];

// Chooses two unique random numbers and chooses a skill from the class arrays and applies the description and consumption
if (mcClass === 'Archer'){
    let mcSkills1 = ArcherSkills[Math.floor((Math.random() * ArcherSkills.length))];
    let mcSkills2 = ArcherSkills[Math.floor((Math.random() * ArcherSkills.length))];

    while (mcSkills1 == mcSkills2){
        mcSkills2 = ArcherSkills[Math.floor((Math.random() * ArcherSkills.length))];
    }

    McSkills.push(mcSkills1, mcSkills2)

    for (let i = 0; i < McSkills.length; i++){
        if (McSkills[i] === 'Eagle Eye'){
            description[i] = "Raises base Crit Chance by 30%"
            type[i] = "Passive"
            consumption[i] = 0;
        }else if (McSkills[i] === 'Percision'){
            description[i] = "If damage was not receive last turn, next attack automatically crits."
            type[i] = "Passive"
            consumption[i] = 0;
        }else if (McSkills[i] === 'Haste'){
            description[i] = "Raises dodge chance and crit chance by 40%"
            type[i] = "Buff"
            consumption[i] = 0;
        }else if (McSkills[i] === 'Slow Recovery'){
            description[i] = "Heals 10 hp per turn"
            type[i] = "Heal"
            consumption[i] = 0;
        }else if (McSkills[i] === 'Poison Shot'){
            description[i] = "Deals damage and 5 poison damage per turn."
            type[i] = "Active"
            consumption[i] = 0;
        }else if (McSkills[i] === 'Double Shot'){
            description[i] = "Deals damage twice."
            type[i] = "Active"
            consumption[i] = 0;
        }
    }
}else if (mcClass === 'Warrior'){
    let mcSkills1 = WarriorSkills[Math.floor((Math.random() * WarriorSkills.length))];
    let mcSkills2 = WarriorSkills[Math.floor((Math.random() * WarriorSkills.length))];

    while (mcSkills1 == mcSkills2){
        mcSkills2 = WarriorSkills[Math.floor((Math.random() * WarriorSkills.length))];
    }
    McSkills.push(mcSkills1, mcSkills2)

    for (let i = 0; i < McSkills.length; i++){
        if (McSkills[i] === 'Great Vitality'){
            description[i] = "Heals player 5 hp per turn"
            type[i] = "Passive"
            consumption[i] = 0;
        }else if (McSkills[i] === 'Life Drain'){
            description[i] = "If player defeats an enemy heal 10 hp and gain 10% strength until the end of the battle. (Stackable)"
            type[i] = "Passive"
            consumption[i] = 0;
        }else if (McSkills[i] === 'Berserk'){
            description[i] = "Increases strength but lowers defense for 3 turns"
            type[i] = "Buff"
            consumption[i] = 0;
        }else if (McSkills[i] === 'Guard up'){
            description[i] = "Increase Defense in exchange for 10% of Hp"
            type[i] = "Active"
            consumption[i] = 0;
        }else if (McSkills[i] === 'Cleave'){
            description[i] = "Deals damage to all enemies."
            type[i] = "Active"
            consumption[i] = 0;
        }else if (McSkills[i] === 'Final Blow'){
            description[i] = "Instantly executes enemies below 20% Hp."
            type[i] = "Active"
            consumption[i] = 0;
        }
    }
}else if (mcClass === 'Mage'){
    let mcSkills1 = MageSkills[Math.floor((Math.random() * MageSkills.length))];
    let mcSkills2 = MageSkills[Math.floor((Math.random() * MageSkills.length))];

    while (mcSkills1 == mcSkills2){
        mcSkills2 = MageSkills[Math.floor((Math.random() * MageSkills.length))];
    }
    McSkills.push(mcSkills1, mcSkills2)

    for (let i = 0; i < McSkills.length; i++){
        if (McSkills[i] === 'Double Cast'){
            description[i] = "Chance to cast previous spell without cost."
            type[i] = "Passive"
            consumption[i] = 0;
        }else if (McSkills[i] === 'Soul Drain'){
            description[i] = "Deal damage to enemy and gain Hp and Mana based on damage."
            type[i] = "Active"
            consumption[i] = 0;
        }else if (McSkills[i] === 'Channeling'){
            description[i] = "Increases base damage for 3 turns."
            type[i] = "Buff"
            consumption[i] = 0;
        }else if (McSkills[i] === 'Fireball'){
            description[i] = "Deals magic damage to one enemy."
            type[i] = "Active"
            consumption[i] = 0;
        }else if (McSkills[i] === 'Chain Lightning'){
            description[i] = "Deals magic damage to all enemies."
            type[i] = "Active"
            consumption[i] = 0;
        }else if (McSkills[i] === 'Reflective Barrier'){
            description[i] = "Halves damage and deals damage back until the end of the battle."
            type[i] = "Active"
            consumption[i] = 0;
        }
    }
}else if (mcClass === 'Paladin'){
    let mcSkills1 = PaladinSkills[Math.floor((Math.random() * PaladinSkills.length))];
    let mcSkills2 = PaladinSkills[Math.floor((Math.random() * PaladinSkills.length))];

    while (mcSkills1 == mcSkills2){
        mcSkills2 = PaladinSkills[Math.floor((Math.random() * PaladinSkills.length))];
    }
    McSkills.push(mcSkills1, mcSkills2)

    for (let i = 0; i < McSkills.length; i++){
        if (McSkills[i] === 'Great Vitality'){
            description[i] = description[i] = "Heals player 5 hp per turn"
            type[i] = "Passive"
            consumption[i] = 0;
        }else if (McSkills[i] === 'Life Drain'){
            description[i] = "If player defeats an enemy heal 10 hp and gain 10% strength until the end of the battle. (Stackable)"
            type[i] = "Passive"
            consumption[i] = 0;
        }else if (McSkills[i] === 'Guard up'){
            description[i] = "Increase Defense in exchange for 10% of Hp"
            type[i] = "Buff"
            consumption[i] = 0;
        }else if (McSkills[i] === 'Greater Defense'){
            description[i] = "Halves Strength, increases Defense and Vitality until the end of the battle"
            type[i] = "Buff"
            consumption[i] = 0;
        }else if (McSkills[i] === 'Inverted bash'){
            description[i] = "Deals damage based on  the player's Vitality and Defense."
            type[i] = "Active"
            consumption[i] = 0;
        }else if (McSkills[i] === 'Reflective Barrier'){
            description[i] = "Halves damage and deals damage back until the end of the battle."
            type[i] = "Active"
            consumption[i] = 0;
        }
    }
}

// Description for each skills
console.log(description)
console.log(McSkills)
console.log(MCStats)
console.log(basedMCStats)




// Starts the game and creates structure/format of the game
play.addEventListener("click", function start(){
    game.innerHTML = '';

    let structure = document.createElement("div");
    structure.classList.add('container');
    structure.setAttribute("id", "structure")

    let row = document.createElement("div");
    row.classList.add('row');

    let display = document.createElement("div");
    display.classList.add('col-12');
    display.setAttribute("id", "display")

    let textArea = document.createElement("div");
    textArea.classList.add('col-12')
    textArea.setAttribute("id", "textbox")

    
    
    let ptext = document.createElement('a');
    ptext.setAttribute("href", '#')
    ptext.setAttribute("id", "text")

   
    game.appendChild(structure)
    structure.appendChild(row)
    row.appendChild(display)
    row.appendChild(textArea)
    textArea.appendChild(ptext)
    
    // Starts the intro
    intro();
    
})

// Introductory text box
function intro(){
    textbox = document.getElementById("textbox")
    text = document.getElementById("text");
    let message = "Welcome to Unlucky Labryinth "
    text.innerHTML = message;


    textbox.addEventListener('click', () => {
        text.innerHTML = "";
        text.innerHTML = "This is a turn-based rpg where you do not decide the class and stats that you are given."

        textbox.addEventListener('click', () => {
            text.innerHTML = "";
            text.innerHTML = "You will only decide the moves you make in battle."

            textbox.addEventListener('click',  () => {
                text.innerHTML = "";
                text.innerHTML = "Let us begin with your class."
                
                textbox.addEventListener('click', () => {
                    text.innerHTML = '';
                    text.innerHTML = "Click the roll button to get your class."
                    const removetextbox = textbox.cloneNode(true);
                    textbox.parentNode.replaceChild(removetextbox, textbox)
                    rollClass();
                })
            })
        })
    })

   
}


// Function to roll the class
function rollClass(){
    textbox = document.getElementById("textbox")
    text = document.getElementById("text");

    
    let classHeader = document.createElement('h2');
    classHeader.innerHTML = "Roll your class!"
    display.appendChild(classHeader);

    let rolledclass = document.createElement('h3');
    
    display.appendChild(rolledclass)
    
    let rollbtn = document.createElement('button');
    rollbtn.innerHTML = "Roll";
    rollbtn.setAttribute('id', 'rollbtn')
    display.appendChild(rollbtn)

    rollbtn.addEventListener('click', () => {
        rolledclass.innerText = mcClass;
        rollbtn.style.display = 'none';
    })

    TransitionrollStats()
    
}   



// Sets up format for Rolling stats
function TransitionrollStats(){
    textbox = document.getElementById("textbox")
    text = document.getElementById("text");
    let rollbtn = document.getElementById('rollbtn')
    isClicked = false;

    rollbtn.addEventListener('click', () => {
        isClicked = !isClicked
        if (isClicked === true){
            textbox.addEventListener('click', () => {
                display.innerHTML = '';
                text.innerHTML = ''
                text.innerHTML = 'Now we need to roll for your stats.'
                textbox.addEventListener('click', () => {
                    text.innerHTML = '';
                    text.innerHTML = 'Press roll to see your stats.';
                    const removetextbox = textbox.cloneNode(true);
                    textbox.parentNode.replaceChild(removetextbox, textbox)
                    rollStats();
                })
            })
        }
    })
   
}


// Rolls the stats (Actually just displays it)
function rollStats(){
    textbox = document.getElementById("textbox")
    text = document.getElementById("text");

    let statHeader = document.createElement('h2');
    statHeader.innerHTML = "Roll your stats!"
    display.appendChild(statHeader);

    let rollbtn = document.createElement('button');
    rollbtn.innerHTML = "Roll";
    rollbtn.setAttribute('id', 'rollbtn')
    display.appendChild(rollbtn);

    let strength = document.createElement('h4');
    let dexterity = document.createElement('h4');
    let vitality = document.createElement('h4');
    let defense = document.createElement('h4');
    let magic = document.createElement('h4');


    display.appendChild(strength)
    display.appendChild(dexterity)
    display.appendChild(vitality)
    display.appendChild(defense)
    display.appendChild(magic)

    rollbtn.addEventListener('click', () => {
        rollbtn.style.display = 'none';
        strength.innerHTML = `Strength: ${basedMCStats.strength}`
        dexterity.innerHTML = `Dexterity: ${basedMCStats.dexterity}`
        vitality.innerHTML = `Vitality: ${basedMCStats.vitality}`
        defense.innerHTML = `Defense: ${basedMCStats.defense}`
        magic.innerHTML = `Magic: ${basedMCStats.magic}`
        });
        TransitionrollSkills()
}

// Creates the format for rolling(displaying) Skills
function TransitionrollSkills(){
    textbox = document.getElementById("textbox")
    text = document.getElementById("text");
    let rollbtn = document.getElementById('rollbtn')
    isClicked = false;

    rollbtn.addEventListener('click', () => {
        isClicked = !isClicked
        if (isClicked === true){
            textbox.addEventListener('click', () => {
                display.innerHTML = '';
                text.innerHTML = ''
                text.innerHTML = 'Last but not least, we have to roll for your skills.'
                textbox.addEventListener('click', () => {
                    text.innerHTML = '';
                    text.innerhtml = "You will start with two random skills of your class."
                })
                textbox.addEventListener('click', () => {
                    text.innerHTML = '';
                    text.innerHTML = 'Press Roll to see your skills. You will only be given 2 skills.';
                    const removetextbox = textbox.cloneNode(true);
                    textbox.parentNode.replaceChild(removetextbox, textbox)
                    displaySkillRoll();
                })
            })
        }
    })
    
}

// Displays the skills and  descriptions 
function displaySkillRoll(){
    textbox = document.getElementById("textbox")
    text = document.getElementById("text");

    let statHeader = document.createElement('h2');
    statHeader.innerHTML = "Let's see what skills you get:"
    display.appendChild(statHeader);

    let rollbtn1 = document.createElement('button');
    rollbtn1.innerHTML = "Roll";
    rollbtn1.setAttribute('id', 'rollbtn')
    display.appendChild(rollbtn1);

    let container = document.createElement("div");
    container.classList.add('container');
    container.setAttribute("id", "container")
    display.appendChild(container)

    let row = document.createElement("div");
    row.classList.add('row');
    container.appendChild(row)

   

    let col1 = document.createElement('div')
    col1.setAttribute("class", 'col-6');
    col1.setAttribute("id", "skill1")
    row.appendChild(col1);

    let skill1display = document.createElement('h5')
    skill1display.setAttribute('id', 'displayskill1')



    let col2 = document.createElement('div')
    col2.setAttribute("class", 'col-6');
    col2.setAttribute("id", "skill2")
    row.appendChild(col2)

   

    rollbtn1.addEventListener('click', () => {
        rollbtn1.style.display = 'none';
        let s1 = document.createElement('h4');
        col1.innerHTML = "Skill 1:"
        col1.appendChild(s1)

        let s2 = document.createElement('h4');
        col2.innerHTML = "Skill 2:"
        col2.appendChild(s2)

        let skill1display = document.createElement('h5')
        skill1display.setAttribute('id', 'displayskill1')
        col1.appendChild(skill1display);
        skill1display.innerHTML = McSkills[0];

        let skill2display = document.createElement('h5')
        skill2display.setAttribute('id', 'displayskill2')
        col2.appendChild(skill2display);
        skill2display.innerHTML = McSkills[1];

        let desc1 = document.createElement('h5');
        desc1.setAttribute("id", "desc1")
        col1.appendChild(desc1);
        desc1.innerHTML = "Description: "

        let desc2 = document.createElement('h5');
        desc2.setAttribute("id", "desc2")
        col2.appendChild(desc2);
        desc2.innerHTML = "Description: "

       

        let skill1 = document.createElement('p');
        col1.appendChild(skill1)
        skill1.innerHTML = description[0];
    
        let skill2 = document.createElement('p');
        col2.appendChild(skill2)
        skill2.innerHTML = description[1];

        let typetag1 = document.createElement('h5');
        typetag1.setAttribute("id", "typetag1")
        col1.appendChild(typetag1);
        typetag1.innerHTML = "Type: ";

        let typetag2 = document.createElement('h5');
        typetag2.setAttribute("id", "typetag1")
        col2.appendChild(typetag2);
        typetag2.innerHTML = "Type: "

        let type1 = document.createElement('p');
        col1.appendChild(type1)
        type1.innerHTML = type[0];

        let type2 = document.createElement('p');
        col2.appendChild(type2)
        type2.innerHTML = type[1];

        let consumption1 = document.createElement('p');
        col1.appendChild(consumption1)
        consumption1.innerHTML = `Consumption: ${consumption[0]}`;

        let consumption2 = document.createElement('p');
        col2.appendChild(consumption2)
        consumption2.innerHTML = `Consumption: ${consumption[0]}`;

        textbox = document.getElementById("textbox")
        text = document.getElementById("text");
        let rollbtn = document.getElementById('rollbtn')
        isClicked = false;
    })

    transitionGame()
}

// Transitions to beginning of game
function transitionGame(){
    textbox = document.getElementById("textbox")
    text = document.getElementById("text");
    let rollbtn = document.getElementById('rollbtn')
    isClicked = false;

    rollbtn.addEventListener('click', () => {
        isClicked = !isClicked
        if (isClicked === true){
            textbox.addEventListener('click', () => {
                display.innerHTML = '';
                text.innerHTML = ''
                text.innerHTML = 'Now we can begin the game!'
                textbox.addEventListener('click', () => {
                    text.innerHTML = ''
                    text.innerHTML = 'Let us start with a quick tutorial.';
                    const removetextbox = textbox.cloneNode(true);
                    textbox.parentNode.replaceChild(removetextbox, textbox)
                    displaymap1();
                })
            })
        }
    })
}


function displaymap1(){
    const boxamount = 5;

    textbox = document.getElementById("textbox")
    text = document.getElementById("text");

    // Creates a container
    let container = document.createElement('div')
    container.className = "container"
    container.id = "movebox"
    display.appendChild(container);

    // Creates a row
    let row = document.createElement('div');
    row.className = "row";
    row.id = "Space"
    container.appendChild(row);

    // Starting Block
    let start = document.createElement('div')
    start.id = "start";
    start.style.width = '50px';
    start.style.height = '50px';
    start.style.border = "solid 2px black";
    start.style.margin = "0% 2% 0% 6%"
    start.style.backgroundColor = 'grey'
    row.appendChild(start)


    for (let i = 0; i < boxamount; i++){
        const createbox = document.createElement('div');
        createbox.className = "col-1"
        createbox.id = `box${i + 1}`
        createbox.style.width = '50px';
        createbox.style.height = '50px';
        createbox.style.border = "solid 2px black"
        createbox.style.margin = "0% 2% 0% 6%"

        
        row.appendChild(createbox)
        
        
    }
    const bossbox = document.createElement('div');
        bossbox.className = "col-1"
        bossbox.style.width = '70px';
        bossbox.style.height = '70px';
        bossbox.style.border = "solid 2px black"
        bossbox.style.backgroundColor = 'red';
        bossbox.style.margin = "-1% 3% 0% 6%";
        row.appendChild(bossbox)

    textbox.addEventListener('click', () => {
        text.innerHTML = '';
        text.innerHTML = "The grey box represents where you are presently at."
        textbox.addEventListener('click', () => {
            text.innerHTML = '';
            text.innerHTML = "The red box represents the bossroom."
            textbox.addEventListener('click', () => {
                text.innerHTML = ''
                text.innerHTML = "You can use the arrow keys or click the next box to move to that destination."
                textbox.addEventListener('click', () => {
                    text.innerHTML = '';
                    text.innerHTML = "There will be a fixed chance that you may encounter mobs while moving."
                    const removetextbox = textbox.cloneNode(true);
                    textbox.parentNode.replaceChild(removetextbox, textbox);
                    createCharacterInfo()
                })
            })
        })
    })
}

function createCharacterInfo(){
    textbox = document.getElementById("textbox")
    textbox.innerHTML = '';

    let container = document.createElement('div');
    container.className = "container";
    textbox.appendChild(container);

    let row = document.createElement('div');
    row.className = "row";
    container.appendChild(row);

    let leftcol = document.createElement('div');
    leftcol.className = "col-6";
    leftcol.id = "infobar"
    row.appendChild(leftcol);

    let rightcol = document.createElement('div');
    rightcol.className = "col-6";
    rightcol.id = "statusbar"
    row.appendChild(rightcol);

    let statsbtn = document.createElement('button');
    statsbtn.innerHTML = "Stats";
    statsbtn.id = "statsbtn";
    leftcol.appendChild(statsbtn);

    let showskills = document.createElement('button');
    showskills.innerHTML = "Skills";
    showskills.id = "skillsbtn";
    leftcol.appendChild(showskills);

    let ingametext = document.createElement('p');
    ingametext.innerHTML = "On the left you can see your skills and stats."
    rightcol.appendChild(ingametext)

    textbox.addEventListener('click', () => {
        rightcol.innerHTML = '';
        leftcol.innerHTML = '';
        ingametext.innerHTML = '';

        const removetextbox = textbox.cloneNode(true);
        textbox.parentNode.replaceChild(removetextbox, textbox);
        showBars();
    })
     
    
}


function showBars(){
    let textbox = document.getElementById("textbox")
    let infobar = document.getElementById("infobar")
    let ingametext = document.createElement('p');
    ingametext.id = "ingametext"
    ingametext.innerHTML = "On the right, you can see your health, mana, and stamina bars."
    infobar.appendChild(ingametext)
   

    let statusbar = document.getElementById("statusbar")
   
    let container = document.createElement('div');
    container.className = "container";
    statusbar.appendChild(container);

    let row = document.createElement('div');
    row.className = "row";
    row.id = "statusrow"
    container.appendChild(row);

    let healthtag = document.createElement('h4');
    healthtag.className = "col-2"
    healthtag.id = "healthtag";
    healthtag.innerHTML = "HP: "
    row.appendChild(healthtag);


    let healthbar = document.createElement('div');
    healthbar.className = "col-10"
    healthbar.id = "healthbar"
    row.appendChild(healthbar);

    let health = document.createElement('div');
    health.id = "health";
    healthbar.appendChild(health)


    let manatag = document.createElement('h4');
    manatag.className = "col-2"
    manatag.id = "manatag";
    manatag.innerHTML = "MP: "
    row.appendChild(manatag);


    let manabar = document.createElement('div');
    manabar.className = "col-10"
    manabar.id = "manabar"
    row.appendChild(manabar);

    let mana = document.createElement('div');
    mana.id = "mana";
    manabar.appendChild(mana)

    let staminatag = document.createElement('h4');
    staminatag.className = "col-2"
    staminatag.id = "staminatag";
    staminatag.innerHTML = "SP: "
    row.appendChild(staminatag);


    let staminabar = document.createElement('div');
    staminabar.className = "col-10"
    staminabar.id = "staminabar"
    row.appendChild(staminabar);

    let stamina = document.createElement('div');
    stamina.id = "stamina";
    staminabar.appendChild(stamina);

    
    textbox.addEventListener('click', () => {
        ingametext.innerText = '';
        ingametext.innertext = "Now, lets get started with the game. Click the next box or press the arrow keys to continue."
        
        let statsbtn = document.createElement('button');
        statsbtn.innerHTML = "Stats";
        statsbtn.id = "statsbtn";
        infobar.appendChild(statsbtn);

        let showskills = document.createElement('button');
        showskills.innerHTML = "Skills";
        showskills.id = "skillsbtn";
        infobar.appendChild(showskills);
        const removetextbox = textbox.cloneNode(true);
        textbox.parentNode.replaceChild(removetextbox, textbox);
        statBtnClicked();
        skillsbtnClicked();
    })

   
}



function statBtnClicked(){
    let movebox = document.getElementById("movebox");
    let statsbtn = document.getElementById("statsbtn");

    

    statsbtn.addEventListener("click", () => {
        movebox.style.display = "none";

        let statsCheck = document.createElement('div')
        statsCheck.id = "statsDisplay"
        display.appendChild(statsCheck)

        let classTitle = document.createElement('h1');
        classTitle.innerHTML = `Class: ${mcClass}`
        statsCheck.appendChild(classTitle)

        let statTitle = document.createElement('h1');
        statTitle.innerHTML = "Stats:"
        statsCheck.appendChild(statTitle)


        let strength = document.createElement('h3');
        strength.innerHTML = `Strength: ${basedMCStats.strength}`
        statsCheck.appendChild(strength);

        let dexterity = document.createElement('h3');
        dexterity.innerHTML = `Dexterity: ${basedMCStats.dexterity}`
        statsCheck.appendChild(dexterity)

        let vitality = document.createElement('h3');
        vitality.innerHTML = `Vitality: ${basedMCStats.vitality}`
        statsCheck.appendChild(vitality)

        let defense = document.createElement('h3');
        defense.innerHTML = `Defense: ${basedMCStats.defense}`
        statsCheck.appendChild(defense)

        let magic = document.createElement('h3');
        magic.innerHTML = `Magic: ${basedMCStats.magic}`
        statsCheck.appendChild(magic)

        let returnbtn = document.createElement('button');
        returnbtn.innerHTML = "Return";
        statsCheck.appendChild(returnbtn);

        document.getElementById("statsbtn").disabled = true;

        returnbtn.addEventListener("click", () => {
            statsCheck.style.display = "none";
            movebox.style.display = "block";
            document.getElementById("statsbtn").disabled = false;
        })
    })
}


function skillsbtnClicked(){
    let movebox = document.getElementById("movebox");
    let skillsbtn = document.getElementById("skillsbtn");

    skillsbtn.addEventListener('click', () => {
        movebox.style.display = "none";
        
        
    })

    
    
}



