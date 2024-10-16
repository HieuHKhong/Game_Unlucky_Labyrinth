let game = document.querySelector(".game")
let play = document.getElementById("play")
let clicked = false;

let randomClass = ['Archer', 'Warrior', 'Mage', 'Paladin']
let randomNum = Math.floor((Math.random() * 4));
let mcClass = randomClass[randomNum];

let logarr = [];
console.log(mcClass)

// Tutorial Mob
let goblinstats = {
    strength: 5,
    dexterity: 5,
    vitality: 3,
    defense: 3, 
    magic: 0
}

let goblinbase = {
    startingHP: goblinstats.vitality * 5,
    Hp: goblinstats.vitality * 5,
    attack: goblinstats.strength,
    dodge: goblinstats.dexterity * 3,
    critchance: goblinstats.dexterity * 3,
    critdamage: goblinstats.strength * 5,
    defense: goblinstats.defense,
    magic: goblinstats.magic,
    exp_drop: 30,
}

console.log(goblinbase);

let mob1stats = {
    startingHP: goblinstats.vitality * 5,
    Hp: goblinstats.vitality * 5,
    attack: goblinstats.strength,
    dodge: goblinstats.dexterity * 3,
    critchance: goblinstats.dexterity * 3,
    critdamage: goblinstats.strength * 5,
    defense: goblinstats.defense,
    magic: goblinstats.magic,
    exp_drop: 30,
}; 

let mob2stats = {
    startingHP: goblinstats.vitality * 5,
    Hp: goblinstats.vitality * 5,
    attack: goblinstats.strength,
    dodge: goblinstats.dexterity * 3,
    critchance: goblinstats.dexterity * 3,
    critdamage: goblinstats.strength * 5,
    defense: goblinstats.defense,
    magic: goblinstats.magic,
    exp_drop: 30,
}; 



// Rolls for starting stats
let basedMCStats = {
    strength: Math.floor((Math.random()  * 6)), // Base damage/Crit damage
    dexterity: Math.floor((Math.random() * 6)), // Dodge/crit chance
    vitality: Math.floor((Math.random() * 6)), // Health
    defense: Math.floor((Math.random() * 6)), // Defense
    magic: Math.floor((Math.random() * 6)), // Mana + Magic base damage
}

let MCstats = {
    startingHP: 30 + (basedMCStats.vitality * 2),
    Hp: 30 + (basedMCStats.vitality * 2),
    maxstamina: 30 + (basedMCStats.strength + basedMCStats.vitality * 2),
    stamina: 30 + (basedMCStats.strength + basedMCStats.vitality * 2),
    attack: 5 + (basedMCStats.strength),
    dodge: 10 + (basedMCStats.dexterity *   5),
    critchance: 10 + (basedMCStats.dexterity * 5),
    critdamage: 50 + (basedMCStats.strength * 10),
    defense: basedMCStats.defense,
    mana: 30 + (basedMCStats.magic * 25),
    maxMana: 30 + (basedMCStats.magic * 25)
}

console.log(MCstats)


// Full possible Skillsets of each class
let ArcherSkills = ['Eagle Eye', 'Haste', 'Slow Recovery', 'Double Shot']
let WarriorSkills = ['Great Vitality', 'Life Drain', 'Guard up', 'Cleave']
let MageSkills = ['Soul Drain', 'Fireball', 'Chain Lightning', 'Reflective Barrier']
let PaladinSkills = ['Great Vitality', 'Life Drain', 'Guard up', 'Inverted bash']





// Skills and Description of the character 
let McSkills = [];
let description = [];
console.log(description)
let type = [];
let consumption = [];
let consumption_type = [];



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
            consumption_type[i] = "None"
        }else if (McSkills[i] === 'Haste'){
            description[i] = "Raises dodge chance and crit chance by 40%"
            type[i] = "Buff"
            consumption_type[i] = "MP";
            consumption[i] = 30;
        }else if (McSkills[i] === 'Slow Recovery'){
            description[i] = "Heals 10 hp per turn"
            type[i] = "Heal"
            consumption[i] = 30;
            consumption_type[i] = "MP";
        }else if (McSkills[i] === 'Double Shot'){
            description[i] = "Deals damage twice."
            type[i] = "Active"
            consumption[i] = 15;
            consumption_type[i] = "SP";
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
            consumption_type[i] = "None"
        }else if (McSkills[i] === 'Life Drain'){
            description[i] = "If player defeats an enemy heal 10 hp and deal 10 strength until the end of the battle. (Stackable)"
            type[i] = "Passive"
            consumption[i] = 0;
            consumption_type[i] = "None";
        }else if (McSkills[i] === 'Guard up'){
            description[i] = "Increase Defense by 50% in exchange for 10% of Hp"
            type[i] = "Buff"
            consumption[i] = 30;
            consumption_type[i] = "SP";
        }else if (McSkills[i] === 'Cleave'){
            description[i] = "Deals damage to all enemies."
            type[i] = "Active"
            consumption[i] = 20;
            consumption_type[i] = "SP";
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
        if (McSkills[i] === 'Soul Drain'){
            description[i] = "Deal damage to enemy and gain 5% Hp and Mana based on damage."
            type[i] = "Active"
            consumption[i] = 10;
            consumption_type[i] = "MP";
        }else if (McSkills[i] === 'Fireball'){
            description[i] = "Deals magic damage to one enemy."
            type[i] = "Active"
            consumption[i] = 30;
            consumption_type[i] = "MP";
        }else if (McSkills[i] === 'Chain Lightning'){
            description[i] = "Deals magic damage to all enemies."
            type[i] = "Active"
            consumption[i] = 30;
            consumption_type[i] = "MP";
        }else if (McSkills[i] === 'Reflective Barrier'){
            description[i] = "Halves damage and deals damage back."
            type[i] = "Active"
            consumption[i] = 30;
            consumption_type[i] = "MP";
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
            consumption_type[i] = "None"
        }else if (McSkills[i] === 'Life Drain'){
            description[i] = "If player defeats an enemy heal 10 hp and gain 10% strength until the end of the battle. (Stackable)"
            type[i] = "Passive"
            consumption[i] = 0;
            consumption_type[i] = "None"
        }else if (McSkills[i] === 'Guard up'){
            description[i] = "Increase Defense in exchange for 10% of Hp"
            type[i] = "Buff"
            consumption[i] = 30;
            consumption_type[i] = "SP";
        }else if (McSkills[i] === 'Inverted bash'){
            description[i] = "Deals damage based on  the player's Vitality and Defense."
            type[i] = "Active"
            consumption[i] = 30;
            consumption_type[i] = "SP";
        }
    }
}



// Description for each skills
console.log(description)
console.log(McSkills)
console.log(basedMCStats)




// Starts the game and creates structure/format of the game
play.addEventListener("click", function start(){
    game.innerHTML = '';

    console.log(consumption_type)
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
        consumption1.innerHTML = `Consumption: ${consumption[0]} ${consumption_type[0]}`;

        let consumption2 = document.createElement('p');
        col2.appendChild(consumption2)
        consumption2.innerHTML = `Consumption: ${consumption[1]} ${consumption_type[1]}`;

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
    const boxamount = 3;

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
    // const bossbox = document.createElement('div');
    //     bossbox.className = "col-1"
    //     bossbox.setAttribute('id', 'boss')
    //     bossbox.style.width = '70px';
    //     bossbox.style.height = '70px';
    //     bossbox.style.border = "solid 2px black"
    //     bossbox.style.backgroundColor0 = 'red';
    //     bossbox.style.margin = "-1% 3% 0% 6%";
    //     row.appendChild(bossbox)

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
    container.setAttribute('id', "stats/skills")

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
    health.id = "showhealth";
    health.style.backgroundColor = 'green';
    health.style.transition = 'width 0.3s';
    health.style.height = '100%'
    health.style.width = `${(MCstats.Hp / MCstats.Hp) * 100}%`
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
        keypressed()
    })

   
}



function statBtnClicked(){
    let movebox = document.getElementById("movebox");
    let statsbtn = document.getElementById("statsbtn");
    let skillsbtn = document.getElementById("skillsbtn");
    

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

        skillsbtn.addEventListener("click", () => {
            statsCheck.remove();
            document.getElementById("statsbtn").disabled = false;
        })

        returnbtn.addEventListener("click", () => {
            statsCheck.remove();
            movebox.style.display = "block";
            document.getElementById("statsbtn").disabled = false;
        })
    })
}


function skillsbtnClicked(){
    let movebox = document.getElementById("movebox");
    let skillsbtn = document.getElementById("skillsbtn");
    let statsbtn = document.getElementById("statsbtn");


    skillsbtn.addEventListener('click', () => {
        movebox.style.display = "none";
        
        let container = document.createElement("div");
        container.classList.add('container');
        display.appendChild(container);
       
        let row = document.createElement("div")
        row.classList.add('row')
        container.appendChild(row);

        let displayskillscol = document.createElement('div');
        displayskillscol.classList.add('col-4');
        displayskillscol.setAttribute('id', 'displaySkills');
        row.appendChild(displayskillscol);

        let displaydesc = document.createElement('div')
        displaydesc.classList.add('col-8');
        displaydesc.setAttribute('id', 'displaydesc');
        row.appendChild(displaydesc);

        let descheader = document.createElement('h2');
        descheader.innerHTML = "Description: ";
        descheader.setAttribute('id', 'descheader')
        displaydesc.appendChild(descheader);

        let skillname = document.createElement('p');
        skillname.setAttribute('id', 'skillname');
        displaydesc.appendChild(skillname);

        let descriptiontext = document.createElement('p');
        descriptiontext.setAttribute('id', 'descriptiontext');
        displaydesc.appendChild(descriptiontext);

        let consumptiontext = document.createElement('p');
        consumptiontext.setAttribute('id', 'consumptiontext');
        displaydesc.appendChild(consumptiontext);
        
        

        let skillsbtndisplay1 = document.createElement('div');
        skillsbtndisplay1.classList.add("col-12");
        displayskillscol.appendChild(skillsbtndisplay1)

        let skillsbtndisplay2 = document.createElement('div');
        skillsbtndisplay2.classList.add("col-12");
        displayskillscol.appendChild(skillsbtndisplay2)

        let skillsheader = document.createElement('h2');
        skillsheader.setAttribute('id', 'skillsheader');
        skillsheader.innerHTML = "Skills: "
        skillsbtndisplay1.appendChild(skillsheader);

        let skill1btn = document.createElement('button');
        skill1btn.innerHTML = `${McSkills[0]}`;
        skill1btn.setAttribute('id', "skillbtn1");
        skillsbtndisplay1.appendChild(skill1btn);

        let skill2btn = document.createElement('button');
        skill2btn.innerHTML = `${McSkills[1]}`;
        skill2btn.setAttribute('id','skillbtn2');
        skillsbtndisplay2.appendChild(skill2btn);

        let returnbtn = document.createElement('button');
        returnbtn.innerHTML = "Return";
        displayskillscol.appendChild(returnbtn);

        document.getElementById("skillsbtn").disabled = true;

        statsbtn.addEventListener("click", () => {
            container.remove();
            document.getElementById("skillsbtn").disabled = false;
        })


        skill1btn.addEventListener("click", () => {
            skillname.innerHTML = "";
            descriptiontext.innerHTML = "";
            consumptiontext.innerHTML = "";
            skillname.innerHTML = `${McSkills[0]}:`;
            descriptiontext.innerHTML = `${description[0]}`
            consumptiontext.innerHTML = `Consumption: ${consumption[0]} ${consumption_type[0]}`;
        })

        skill2btn.addEventListener("click", () => {
            skillname.innerHTML = "";
            descriptiontext.innerHTML = "";
            consumptiontext.innerHTML = "";
            skillname.innerHTML = `${McSkills[1]}:`;
            descriptiontext.innerHTML = `${description[1]}`
            consumptiontext.innerHTML = `Consumption: ${consumption[1]} ${consumption_type[1]}`
        })


        returnbtn.addEventListener("click", () => {
            container.remove();
            movebox.style.display = "block";
            document.getElementById("skillsbtn").disabled = false;
        })
    })
}


function keypressed(){
    let textbox = document.getElementById('textbox');
    let move1 = document.getElementById('box1');
    let start = document.getElementById('start');
    let move2 = document.getElementById('box2');
    let move3 = document.getElementById('box3');
    document.addEventListener('keydown', function(event) {
        if (event.key == 'ArrowRight'){
            move1.style.backgroundColor = 'grey';
            start.style.backgroundColor = 'white';
            start.style.border = 'white';
            document.addEventListener('keydown', function(event) {
                if (event.key == 'ArrowRight'){
                move2.style.backgroundColor = 'grey';
                move1.style.backgroundColor = 'white';
                move1.style.border = 'white'
                }
                document.addEventListener('keydown', function(event) {
                    if (event.key == 'ArrowRight'){
                        move3.style.backgroundColor = 'red';
                        move2.style.backgroundColor = 'white';
                        move2.style.border = 'white'
                        const removetextbox = textbox.cloneNode(true);
                        textbox.parentNode.replaceChild(removetextbox, textbox);
                        
                        fight();
                    }
                })
            })
        }
    })
}


function fight(){
    let stats_skills = document.getElementById('stats/skills');
    let textbox = document.getElementById('textbox');
    let ambush = document.createElement('h1');
    let display = document.getElementById('display');

    ambush.innerHTML = "AMBUSH!";
    stats_skills.style.display = "none";
    textbox.appendChild(ambush);

    textbox.addEventListener('click', () => {
        ambush.innerHTML = ""
        document.getElementById("movebox").style.display = "none";
        let textbox = document.getElementById('textbox')

        let container = document.createElement('div');
        container.classList.add("container");
        container.setAttribute("id", "fight")
        textbox.appendChild(container);

        let row = document.createElement('div');
        row.classList.add("row");
        container.appendChild(row);

        let fightbar = document.createElement('div');
        fightbar.classList.add('col-4');
        fightbar.setAttribute('id', 'fighttab');
        row.appendChild(fightbar);

        let attackbtn = document.createElement('button');
        attackbtn.setAttribute('id', 'attackbtn');
        // attackbtn.classList.add('col-12')
        attackbtn.innerHTML = "Attack";
        fightbar.appendChild(attackbtn)

        let skillbtn = document.createElement('button');
        skillbtn.setAttribute('id', 'skillsbtn_fight');
        // skillbtn.classList.add('col-12');
        skillbtn.innerHTML = "Skills";
        fightbar.appendChild(skillbtn);

        let escapebtn = document.createElement('button');
        escapebtn.setAttribute('id', 'escapebtn');
        // escapebtn.classList.add('col-12');
        escapebtn.innerHTML = "Escape";
        fightbar.appendChild(escapebtn);

        let bars = document.createElement('div');
        bars.classList.add('col-4');
        bars.setAttribute('id','barcol');
        row.appendChild(bars)

        let containerbars = document.createElement('div');
        containerbars.className = "container";
        bars.appendChild(containerbars);

        let rowbar = document.createElement('div');
        rowbar.className = "row";
        rowbar.id = "statusrow"
        containerbars.appendChild(rowbar);

        let healthtag = document.createElement('h4');
        healthtag.className = "col-2"
        healthtag.id = "healthtag";
        healthtag.innerHTML = "HP: "
        rowbar.appendChild(healthtag);


        let healthbar = document.createElement('div');
        healthbar.className = "col-10"
        healthbar.id = "healthbar"
        rowbar.appendChild(healthbar);

        let health = document.createElement('div');
        health.id = "battlehealth";
        health.style.backgroundColor = 'green';
        health.style.transition = 'width 0.3s';
        health.style.height = '100%'
        health.style.width = `${(MCstats.Hp / MCstats.Hp) * 100}%`
        healthbar.appendChild(health)
        
        let healthtext = document.createElement('p');
        healthtext.id = "healthtext"
        healthtext.innerHTML = `${MCstats.Hp}`
        healthtext.style.width = "17%"
        health.appendChild(healthtext)


        let manatag = document.createElement('h4');
        manatag.className = "col-2"
        manatag.id = "manatag";
        manatag.innerHTML = "MP: "
        rowbar.appendChild(manatag);


        let manabar = document.createElement('div');
        manabar.className = "col-10"
        manabar.id = "manabar"
        rowbar.appendChild(manabar);

        let mana = document.createElement('div');
        mana.id = "mana";
        manabar.appendChild(mana)

        let staminatag = document.createElement('h4');
        staminatag.className = "col-2"
        staminatag.id = "staminatag";
        staminatag.innerHTML = "SP: "
        rowbar.appendChild(staminatag);


        let staminabar = document.createElement('div');
        staminabar.className = "col-10"
        staminabar.id = "staminabar"
        rowbar.appendChild(staminabar);

        let stamina = document.createElement('div');
        stamina.id = "stamina";
        staminabar.appendChild(stamina);

        let logcol = document.createElement('div');
        logcol.classList.add('col-4');
        logcol.id = "logcol";
        row.appendChild(logcol);

        let loghead = document.createElement('p');
        loghead.innerHTML = "Log:";
        loghead.id = "loghead";
        logcol.appendChild(loghead);

        let log = document.createElement('p');
        log.id = "log";
        log.style.overflow = "scroll";
        log.style.height = "90px"
        logcol.appendChild(log);

        let fightcon = document.createElement('div');
        fightcon.id = "fightcon";
        fightcon.classList.add("container");
        display.appendChild(fightcon);

        let fightrow = document.createElement('div');
        fightrow.classList.add("row");
        fightcon.appendChild(fightrow);

        let mccol = document.createElement('div');
        mccol.classList.add('col-6');
        mccol.id = "mccol";
        fightrow.appendChild(mccol);
        
        let Mcbox = document.createElement('div');
        Mcbox.id = 'mcbox';
        Mcbox.style.width = '50px';
        Mcbox.style.height = '50px';
        Mcbox.style.border = "solid 2px black";
        Mcbox.style.margin = "45% 5% 0% 25%";
        mccol.appendChild(Mcbox);


        let mobcol = document.createElement('div');
        mobcol.classList.add('col-6');
        mobcol.id = "mobcol";
        mobcol.style.marginTop ="15%";
        fightrow.appendChild(mobcol)

        let mob1 = document.createElement('div');
        mob1.id = "mob1";
        mob1.style.width = '50px';
        mob1.style.height = '50px';
        mob1.style.border = "solid 2px green"
        mob1.style.margin = "0% 0% 0% 60%"
        mobcol.appendChild(mob1);
        
        let mob1hpbar = document.createElement('div');
        mob1hpbar.id = "mob1hpbar";
        mob1hpbar.style.height = '4%';
        mob1hpbar.style.border = '2px black solid';
        mob1hpbar.style.margin = '2% 0% 15% 60%';
        mobcol.appendChild(mob1hpbar);
        
        let mob1hp = document.createElement('div');
        mob1hp.id = "mob1hp"
        mob1hp.style.width = `${(goblinbase.Hp / goblinbase.startingHP) * 100}%`
        mob1hp.style.height = "100%";
        mob1hp.style.transition = 'width 0.3s';
        mob1hp.style.backgroundColor = 'red';
        mob1hpbar.appendChild(mob1hp);



        let mob2 = document.createElement('div');
        mob2.id = "mob2";
        mob2.style.width = '50px';
        mob2.style.height = '50px';
        mob2.style.border = "solid 2px green"
        mob2.style.margin = "0% 0% 0% 60%"
        mobcol.appendChild(mob2);

        let mob2hpbar = document.createElement('div');
        mob2hpbar.id = "mob2hpbar";
        mob2hpbar.style.height = '4%';
        mob2hpbar.style.border = '2px black solid';
        mob2hpbar.style.margin = '2% 0% 15% 60%';
        mobcol.appendChild(mob2hpbar);

        let mob2hp = document.createElement('div');
        mob2hp.id = "mob2hp"
        mob2hp.style.width = `${(goblinbase.Hp / goblinbase.startingHP) * 100}%`
        mob2hp.style.height = "100%";
        mob2hp.style.transition = 'width 0.3s';
        mob2hp.style.backgroundColor = 'red';
        mob2hpbar.appendChild(mob2hp);
        
        let attackdiv = document.createElement('div');
        attackdiv.id = "attackdiv";
        textbox.appendChild(attackdiv);

        let skillcon = document.createElement('div');
        skillcon.classList.add('container');
        skillcon.id = "skillcon"
        textbox.appendChild(skillcon);

        let skillrow = document.createElement('div');
        skillrow.classList.add("row");
        skillrow.id = "skillrow"
        skillcon.appendChild(skillrow);

        let skilldiv = document.createElement('div');
        skilldiv.classList.add('col-6')
        skilldiv.id = "skilldiv";
        skillrow.appendChild(skilldiv)

        const removetextbox = textbox.cloneNode(true);
        textbox.parentNode.replaceChild(removetextbox, textbox);

        pressAtk();
        pressSkills();
        

    })
}

function pressSkills(){
    let skillbtn = document.getElementById('skillsbtn_fight');
    

    skillbtn.addEventListener('click', () => {
        let fight = document.getElementById('fight');
        let textbox = document.getElementById('textbox')
        let mob1 = document.getElementById('mob1');
        let mob2 = document.getElementById('mob2');
        let mob2hp = document.getElementById('mob2hp');
        let skilldiv = document.getElementById('skilldiv');

        fight.style.display = 'none';

        let skill1btn = document.createElement('button');
        let skill2btn = document.createElement('button');

        let choosetarget = document.createElement('p');
        let cancelbtn = document.createElement('button');

        

        let skillcol = document.createElement('div');
        skillcol.classList.add('col-6');
        skillcol.id = "useskills";
        skilldiv.appendChild(skillcol);

        skill1btn.innerHTML = `${McSkills[0]}`;
        skill1btn.classList.add('col-12')
        skill1btn.id = 'bskill1'
        skillcol.appendChild(skill1btn);

        skill2btn.innerHTML = `${McSkills[1]}`;
        skill2btn.classList.add('col-12');
        skill2btn.id = 'bskill2'
        skillcol.appendChild(skill2btn);

        let returnbtn = document.createElement('button');
        returnbtn.innerHTML = "Return";
        returnbtn.id = "skillreturn";
        skillcol.appendChild(returnbtn);

        let descdiv = document.createElement('div');
        descdiv.classList.add('col-6')
        descdiv.id = "descdiv";
        document.getElementById('skillrow').appendChild(descdiv)


        let descriptionheader = document.createElement('p')
        descriptionheader.id = "descriptionheader";
        descriptionheader.innerHTML = "Description: ";
        descdiv.appendChild(descriptionheader);

        let desc = document.createElement('p');
        desc.id = "desc";
        descdiv.appendChild(desc);

        let usediv = document.createElement('usediv');
        usediv.id = "usediv";
        descdiv.appendChild(usediv);

        let skillcon = document.getElementById('skillcon')


        let skillbtn1 = document.getElementById('bskill1');
        skillbtn1.addEventListener('click', () => {
            let i = 0;
            document.getElementById("usediv").innerHTML = '';
            let skilldesc = document.getElementById('desc');
            skilldesc.innerHTML = '';
            skilldesc.innerHTML = `${description[0]} <br> Consumption: ${consumption[i]} ${consumption_type[i]}`;
            usebtn(i);
           
        })

        let skillbtn2 = document.getElementById('bskill2');
        skillbtn2.addEventListener('click', () => {
            let i = 1;
            document.getElementById("usediv").innerHTML = '';
            let skilldesc = document.getElementById('desc');
            skilldesc.innerHTML = '';
            skilldesc.innerHTML = `${description[1]} <br> Consumption: ${consumption[i]} ${consumption_type[i]}`;
            usebtn(i)
        })

        let skillrtnbtn = document.getElementById('skillreturn');
        skillrtnbtn.addEventListener('click', () => {
            let skilldiv = document.getElementById('skilldiv');
            skilldiv.innerHTML = '';
            
            let descdiv = document.getElementById('descdiv');
            descdiv.remove();


            let fight = document.getElementById('fight');
            fight.style.display = 'block';
        })

    })
}

function usebtn(i){
        if (type[i] === "Active"){
            if(McSkills[i] === "Double Shot"){
                let usediv = document.getElementById('usediv');
            
                let usebtn = document.createElement('button');
                usebtn.innerHTML = "Use";
                usebtn.id = "usebtn";
                usediv.appendChild(usebtn);
            }else if(McSkills[i] === "Cleave"){
                let usediv = document.getElementById('usediv');
            
                let usebtn = document.createElement('button');
                usebtn.innerHTML = "Use";
                usebtn.id = "usebtn";
                usediv.appendChild(usebtn);
            }else if(McSkills[i] === "Soul Drain"){
                let usediv = document.getElementById('usediv');
            
                let usebtn = document.createElement('button');
                usebtn.innerHTML = "Use";
                usebtn.id = "usebtn";
                usediv.appendChild(usebtn);
            }else if(McSkills[i] === "Fireball"){
                let usediv = document.getElementById('usediv');
            
                let usebtn = document.createElement('button');
                usebtn.innerHTML = "Use";
                usebtn.id = "usebtn";
                usediv.appendChild(usebtn);
            }else if(McSkills[i] === "Chain Lightning"){
                let usediv = document.getElementById('usediv');
            
                let usebtn = document.createElement('button');
                usebtn.innerHTML = "Use";
                usebtn.id = "usebtn";
                usediv.appendChild(usebtn);
            }else if(McSkills[i] === "Reflective Barrier"){
                let usediv = document.getElementById('usediv');
            
                let usebtn = document.createElement('button');
                usebtn.innerHTML = "Use";
                usebtn.id = "usebtn";
                usediv.appendChild(usebtn);
            }else if(McSkills[i] === "Inverted Bash"){
                let usediv = document.getElementById('usediv');
            
                let usebtn = document.createElement('button');
                usebtn.innerHTML = "Use";
                usebtn.id = "usebtn";
                usediv.appendChild(usebtn);
            }
        }else if (type[i] === "Buff"){
            if(McSkills[i] === "Guard up"){
                let usediv = document.getElementById('usediv');
            
                let usebtn = document.createElement('button');
                usebtn.innerHTML = "Use";
                usebtn.id = "usebtn";
                usediv.appendChild(usebtn);
            }else if(McSkills[i] === "Life Drain"){
                let usediv = document.getElementById('usediv');
            
                let usebtn = document.createElement('button');
                usebtn.innerHTML = "Use";
                usebtn.id = "usebtn";
                usediv.appendChild(usebtn);
            }else if(McSkills[i] === "Haste"){
                let usediv = document.getElementById('usediv');
            
                let usebtn = document.createElement('button');
                usebtn.innerHTML = "Use";
                usebtn.id = "usebtn";
                usediv.appendChild(usebtn);
            }
    }else if (type[i] === "Heal"){
        if(McSkills[i] === "Slow Recovery"){
            let usediv = document.getElementById('usediv');
        
            let usebtn = document.createElement('button');
            usebtn.innerHTML = "Use";
            usebtn.id = "usebtn";
            usediv.appendChild(usebtn);
        }
    }
}



function pressAtk(){
        let attack = document.getElementById('attackbtn');
        let fight = document.getElementById('fight');

        
        attack.addEventListener('click', () => {
            let textbox = document.getElementById('textbox')
            let mob1 = document.getElementById('mob1');
            let mob2 = document.getElementById('mob2');
            let mob2hp = document.getElementById('mob2hp');
            let attackdiv = document.getElementById('attackdiv');

            let choosetarget = document.createElement('p');
            let cancelbtn = document.createElement('button');
           
            fight.style.display = 'none';

            choosetarget.innerHTML = "Select a target."
            attackdiv.appendChild(choosetarget);

            cancelbtn.innerHTML = "Cancel";
            attackdiv.appendChild(cancelbtn);
            attackdiv.style.display = "block";

            cancelbtn.addEventListener('click', () => {
                attackdiv.style.display = "none";
                attackdiv.innerHTML = '';
                fight.style.display = '';
            })
            const removeEvent = mob1.cloneNode(true);
            mob1.parentNode.replaceChild(removeEvent, mob1);

            const removeEvent2 = mob2.cloneNode(true);
            mob2.parentNode.replaceChild(removeEvent2, mob2);
           
            mcattacks();
        })
}

function mcattacks(){
            let mob1 = document.getElementById('mob1'); 
            let textbox = document.getElementById('textbox')
            let mob = document.getElementById('mob1');
            let mobb =  document.getElementById('mob2');
            let mob2 = document.getElementById('mob2');
            let attackdiv = document.getElementById('attackdiv');
            let mob1hp = document.getElementById('mob1hp');
            let mob2hp = document.getElementById('mob2hp');


    if (mob1stats.Hp > 0){      
    mob.addEventListener('click', () => {
        
        let logbox = document.createElement('p');
        let logmessage = "";
        let attackdiv = document.getElementById('attackdiv');
        let MCdamage = (mob1stats.Hp + mob1stats.defense) - (MCstats.attack) / mob1stats.startingHP;
        let MCCrit = (Math.floor((Math.random() * 101)));
        let mobdodge = Math.floor((Math.random() * 101));
        let fight = document.getElementById('fight')

        if(MCdamage <= 0){
            MCdamage = 1;
        }
        
        console.log("mobdodge:" + goblinbase.dodge + "vs" + mobdodge);
        console.log("MC Crit:" +  MCstats.critchance + "vs" + MCCrit);

        if(mob1stats.Hp > 0){
            if (mobdodge <= mob1stats.dodge){
                logmessage = '';
                attackdiv.innerHTML = '';
                logmessage = `You have missed!`;
                logbox.innerHTML = logmessage;
                attackdiv.appendChild(logbox);
                logarr.push(logmessage);
            }else{
                if(MCCrit <= MCstats.critchance){
                    logmessage = '';
                    attackdiv.innerHTML = '';
                    logmessage = `CRIT! You have dealt ${MCstats.attack + (MCstats.attack * (MCstats.critdamage / 100))} damage to Mob 1!`;
                    mob1stats.Hp -= (MCstats.attack + (MCstats.attack * (MCstats.critdamage / 100)));
                    mob1hp.style.width = `${((mob1stats.Hp / mob1stats.startingHP) * 100)}%`
                    logbox.innerHTML = logmessage;
                    attackdiv.appendChild(logbox);
                    logarr.push(logmessage);
                    logmessage = '';
                }else {
                    logmessage = '';
                    attackdiv.innerHTML = '';
                    logmessage = `You have dealt ${MCstats.attack - mob1stats.defense } damage to Mob 1!`;
                    mob1stats.Hp -= (MCstats.attack - mob1stats.defense);
                    mob1hp.style.width = `${((mob1stats.Hp / mob1stats.startingHP) * 100)}%`
                    logbox.innerHTML = logmessage;
                    attackdiv.appendChild(logbox);
                    logarr.push(logmessage); 
                    logmessage = '';                    
                }
            }
        } 
        
        if (mob1stats.Hp <= 0){
            attackdiv.innerHTML = '';
            mob1hp.style.width = "0%"
            mob1stats.Hp = 0;
            logmessage = 'Mob 1 has been defeated!';
            logbox.innerHTML = logmessage;
            attackdiv.appendChild(logbox);
            logarr.push(logmessage);  
            mob.style.backgroundColor = 'red';
        }


        if (mob1stats.Hp > 0){
            mobattack();
            const removeEvent = mob1.cloneNode(true);
            mob1.parentNode.replaceChild(removeEvent, mob1);
        }

        if (mob2stats.Hp > 0){
            mob2attack();
            const removeEvent2 = mobb.cloneNode(true);
            mobb.parentNode.replaceChild(removeEvent2, mobb);
        }
       

       
        
        setTimeout(() => {
            attackdiv.innerHTML = "";
            fight.style.display = "block";
            clicked = false;
            document.getElementById('log').innerHTML = ''
            for(let i = 0; i < logarr.length; i++){
                document.getElementById('log').innerHTML += (`${(i) + 1}: ${logarr[i]} <br>`)
            }
            }, 6000);
        })  
    }
    
    if (mob2stats.Hp > 0){
        mob2.addEventListener('click', () => {
        
            let logbox = document.createElement('p');
            let logmessage = "";
            let attackdiv = document.getElementById('attackdiv');
            let MCdamage = (mob2stats.Hp + mob2stats.defense) - (MCstats.attack) / mob2stats.startingHP;
            let MCCrit = (Math.floor((Math.random() * 101)));
            let mobdodge = Math.floor((Math.random() * 101));
            let fight = document.getElementById('fight')
    
            if(MCdamage <= 0){
                MCdamage = 1;
            }
            
            console.log("mobdodge:" + goblinbase.dodge + "vs" + mobdodge);
            console.log("MC Crit:" +  MCstats.critchance + "vs" + MCCrit);
    
            if(mob2stats.Hp > 0){
                if (mobdodge <= mob2stats.dodge){
                    logmessage = '';
                    attackdiv.innerHTML = '';
                    logmessage = `You have missed!`;
                    logbox.innerHTML = logmessage;
                    attackdiv.appendChild(logbox);
                    logarr.push(logmessage);
                }else{
                    if(MCCrit <= MCstats.critchance){
                        logmessage = '';
                        attackdiv.innerHTML = '';
                        logmessage = `CRIT! You have dealt ${MCstats.attack + (MCstats.attack * (MCstats.critdamage / 100))} damage to Mob 2!`;
                        mob2stats.Hp -= (MCstats.attack + (MCstats.attack * (MCstats.critdamage / 100)));
                        mob2hp.style.width = `${((mob2stats.Hp / mob2stats.startingHP) * 100)}%`
                        logbox.innerHTML = logmessage;
                        attackdiv.appendChild(logbox);
                        logarr.push(logmessage);
                        logmessage = '';
                    }else {
                        logmessage = '';
                        attackdiv.innerHTML = '';
                        logmessage = `You have dealt ${MCstats.attack - mob2stats.defense } damage to Mob 2!`;
                        mob2stats.Hp -= (MCstats.attack - mob2stats.defense);
                        mob2hp.style.width = `${((mob2stats.Hp / mob2stats.startingHP) * 100)}%`
                        logbox.innerHTML = logmessage;
                        attackdiv.appendChild(logbox);
                        logarr.push(logmessage); 
                        logmessage = '';                    
                    }
                }
            } 
            
            if (mob2stats.Hp <= 0){
                attackdiv.innerHTML = '';
                mob2hp.style.width = "0%"
                mob2stats.Hp = 0;
                logmessage = 'Mob 2 has been defeated!';
                logbox.innerHTML = logmessage;
                attackdiv.appendChild(logbox);
                logarr.push(logmessage);  
                mob2.style.backgroundColor = 'red';
            }
    
            if (mob1stats.Hp > 0){
                mobattack();
                const removeEvent = mob1.cloneNode(true);
                mob1.parentNode.replaceChild(removeEvent, mob1);
            }
    
            if (mob2stats.Hp > 0){
                mob2attack();
                const removeEvent2 = mobb.cloneNode(true);
                mobb.parentNode.replaceChild(removeEvent2, mobb);
            }
        
            setTimeout(() => {
                attackdiv.innerHTML = "";
                fight.style.display = "block";
                clicked = false;
                console.log(logarr)
                document.getElementById('log').innerHTML = ''
                for(let i = 0; i < logarr.length; i++){
                    document.getElementById('log').innerHTML += (`${(i) + 1}: ${logarr[i]} <br>`)
                }
                }, 6000);
            })  
    }
    
}

function mobattack(){
    let logbox = document.createElement('p');
    let logmessage2 = "";
    let attackdiv = document.getElementById('attackdiv');
    let goblinDamage = (mob1stats.attack - MCstats.defense);
    let goblincrit = (Math.floor((Math.random() * 101)));
    let mcdodge = (Math.floor((Math.random() * 101)));
    let Mchp = document.getElementById('battlehealth')
    let mchptext = document.getElementById('healthtext')
    if (goblinDamage <= 0){
        goblinDamage = 1;
    }

    
    setTimeout(() => {
        if (mob1stats.Hp == 0){
            return;
        }else if(mcdodge <= MCstats.dodge){
            attackdiv.innerHTML = '';
            logmessage2 = `Mob 1 has missed!`
            logbox.innerHTML = logmessage2
            attackdiv.appendChild(logbox);
            logarr.push(logmessage2);
            logmessage2 = '';
            
        }else if(goblincrit <= mob1stats.critchance){
            attackdiv.innerHTML = '';
            logmessage2 = `CRIT! Mob 1 has dealt ${mob1stats.attack + (mob1stats.attack * (mob1stats.critdamage / 100))} damage`;
            MCstats.Hp -= (mob1stats.attack + (mob1stats.attack * (mob1stats.critdamage / 100)))
            Mchp.style.width = `${((MCstats.Hp / MCstats.startingHP) * 100)}%`
             mchptext.innerHTML = `${MCstats.Hp}/${MCstats.startingHP}`
            logbox.innerHTML = logmessage2;
            attackdiv.appendChild(logbox);
            logarr.push(logmessage2);
            logmessage2 = '';
        }else {
            attackdiv.innerHTML = '';
            logmessage2 = `Mob 1 has dealt ${goblinDamage} damage!`;
            MCstats.Hp -= goblinDamage;
            Mchp.style.width = `${((MCstats.Hp / MCstats.startingHP) * 100)}%`
            mchptext.innerHTML = `${MCstats.Hp}/${MCstats.startingHP}`
            logbox.innerHTML = logmessage2;
            attackdiv.appendChild(logbox);
            logarr.push(logmessage2);      
            logmessage2 = '';
        }
    }, 2000);
}

function mob2attack(){
    let logbox = document.createElement('p');
    let logmessage2 = "";
    let attackdiv = document.getElementById('attackdiv');
    let goblinDamage = (mob2stats.attack - MCstats.defense);
    let goblincrit = (Math.floor((Math.random() * 101)));
    let mcdodge = (Math.floor((Math.random() * 101)));
    let Mchp = document.getElementById('battlehealth')
    let mchptext = document.getElementById('healthtext')
    if (goblinDamage <= 0){
        goblinDamage = 1;
    }

    
    setTimeout(() => {
        if(mcdodge <= MCstats.dodge){
            attackdiv.innerHTML = '';
            logmessage2 = `Mob 2 has missed!`
            logbox.innerHTML = logmessage2
            attackdiv.appendChild(logbox);
            logarr.push(logmessage2);
            logmessage2 = '';
            
        }else if(goblincrit <= mob2stats.critchance){
            attackdiv.innerHTML = '';
            logmessage2 = `CRIT! Mob 2 has dealt ${mob2stats.attack + (mob2stats.attack * (mob2stats.critdamage / 100))} damage`;
            MCstats.Hp -= (mob1stats.attack + (mob2stats.attack * (mob2stats.critdamage / 100)))
            Mchp.style.width = `${((MCstats.Hp / MCstats.startingHP) * 100)}%`
            mchptext.innerHTML = `${MCstats.Hp}/${MCstats.startingHP}`
            logbox.innerHTML = logmessage2;
            attackdiv.appendChild(logbox);
            logarr.push(logmessage2);
            logmessage2 = '';
        }else {
            attackdiv.innerHTML = '';
            logmessage2 = `Mob 2 has dealt ${goblinDamage} damage!`;
            MCstats.Hp -= goblinDamage;
            Mchp.style.width = `${((MCstats.Hp / MCstats.startingHP) * 100)}%`
            mchptext.innerHTML = `${MCstats.Hp}/${MCstats.startingHP}`
            logbox.innerHTML = logmessage2;
            attackdiv.appendChild(logbox);
            logarr.push(logmessage2);      
            logmessage2 = '';
        }
    }, 4000);
}


