const readline = require("readline-sync");

let hp = 350

let isAlive = true

const userName = readline.question("What is your name? ");

let isGameRunning = true

let enemies = [{ name: 'Vampire Lord', hp: 150, item: 'the ORGAN LIQUIFIER'  } , { name: "Ice Dragon", hp: 150, item: 'Fozen Fire Breathe'  } , { name: 'Kelvin the unfriendly Werewolf God', hp: 150, item: 'Claws of dismembering'  } , { name: 'Alduin', hp: 280, item: "Flamey breathe of Unending torment", isEnd: false } ];
 
let inventory = [userName, "Sword of stabbing", "Bow of impaling", "Fire spell of charbroiling", "hp:" + hp]




console.log('Hi, ' + userName + '!' + ' Now launching The Elder Scrolls V.');
console.log('Dragonborn... you must obtain the Dragonrend shout and travel to Sovengard to defeat Alduin. :')

operationQuestion()

function operationQuestion() {

    while (isAlive && isGameRunning) {
       let operator = readline.question("'w for walking','i for inventory'" );
    if (operator === 'w') {
        console.log('Proceed forward Dragonborn')
        walk()
    }else if (operator === 'i'){
        console.log(inventory)
        return operationQuestion()
       }
    }


function walk (){
    let enemyToFight = Math.floor(Math.random()*enemies.length);
    let newEnemy = enemies[enemyToFight]
       let chance = Math.random() 
        if (chance < .25){
            console.log('chosen enemy',enemies[enemyToFight].name)
            willIFight (newEnemy)
        }}
        return

function willIFight (newEnemy) { 
    const whatItIs = readline.question('(f) for fighting, (r) for run');
    if(whatItIs === 'f') {
        console.log('ITS ON MF')
        iWillFight(newEnemy)
    } if(whatItIs === 'r'){
         run(newEnemy)
    }
}
function run(newEnemy){
    console.log('run')
    let chance = Math.random() 
    if (chance < .50){
    console.log("you are escaping")
    hp -= 20
    console.log(`I like hp, it is ${hp}`)
    } else {
        console.log('You tried to run? The Dragonborn? No, you arent getting away that easy... We fighting b***h!')
        return iWillFight(newEnemy);
    }
    return
}

    function iWillFight (newEnemy){
            console.log(newEnemy)
            console.log(` Here approches ${newEnemy.name} their hp is ${newEnemy.hp} weilding ${newEnemy.item}`);
            let enemyHp = newEnemy.hp;
            let enemyName = newEnemy.name;
            let enemyDefeated = enemies.indexOf(newEnemy)
            console.log("You have " + hp + " HP");
        readline.keyInPause();
            while(enemyHp > 0){
            let mainAttack = 50
            let enemyMainAttack = 25
            let chance = Math.random() 
                if (chance < .50){
                console.log(userName + ' attacks for ' + mainAttack );
                enemyHp -= mainAttack;
                console.log(enemyName + " has " + enemyHp + " hp left!");
                readline.keyInPause();
                    if(enemyHp < 1){
                console.log("YOU HAVE SLAIN " + enemyName);
                console.log(" You pulled " + "Dragon Rend" + " out of " + enemyName + "'s Crushed chest!")
                inventory.push(["Dragon Rend"])
                if (inventory.value = ["Dragon Rend"]){
                let hasDragonRend = true
                if (hasDragonRend = true) {
                return bossBattle ()
            }}

                hp += 100;
                console.log("You consume a large health potion! Giving you" + hp)
                enemies.splice(enemyDefeated, 1);
                return;
                }}
                let chance2 = Math.random() 
                if (chance2 > .50){
                console.log(enemyName + ' Has inflicted You! ' + enemyMainAttack);
                hp -= enemyMainAttack;
                console.log("Your hp is now " + hp);
                } if(hp < 0){
                    console.log("The Gods frown upon you, you have failed...");
                    process.exit(0)
                }
            }}

            function bossBattle () {
                console.log("You have what you need Dragonborn, to defeat Alduin. You now travel to Sovengard...")
                let alduinChosen = enemies.pop()
                console.log(` Here approches ${alduinChosen.name}, their hp is ${alduinChosen.hp} weilding ${alduinChosen.item}`);
            let enemyHp = alduinChosen.hp;
            let enemyName = alduinChosen.name;
            console.log("You have " + hp + " HP");
        readline.keyInPause();
            while(enemyHp > 0){
            let mainAttack = 50
            let enemyMainAttack = 50
            let chance = Math.random() 
                if (chance < .50){
                console.log(userName + ' Uses Dragon Rend! Alduin falls to the ground and you dont hold back. Damage delt ' + mainAttack );
                enemyHp -= mainAttack;
                console.log(enemyName + " has " + enemyHp + " hp left!");
                readline.keyInPause();
                    if(enemyHp < 1){
                console.log("YOU HAVE SLAIN  " + enemyName + "  The darkness has fallen and the heros of Sovengard cheer your name! The world is in your debt Dragonborn... now you may rest."),
                    process.exit(0)
                }
            }
            let chance2 = Math.random() 
                if (chance2 > .50){
                console.log(enemyName + ' Has inflicted You! ' + enemyMainAttack);
                hp -= enemyMainAttack;
                console.log("Your hp is now " + hp);
                } if(hp < 0){
                    console.log("The Gods frown upon you, you have failed....");
                return;
                }
            }}}
        