// Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

// - nome
// - idade
// - tipo (ex: guerreiro, mago, monge, ninja )

class hero {
    constructor(name, age, gender, categories) {
        this.name = name
        this.age = age
        this.gender= gender
        this.categories = categories
    }
    attack() {
        const attackMap = {
            guerreiro: "espada",
            guerreira: "espada",
            feiticeiro: "feitiço",
            feiticeira: "feitiço",
            monge: "artes marciais",
            monja: "artes marciais",
            kunoichi: "kunai",
            shinobi: "kunai",
        }
        const attack = attackMap[this.categories] || "ataque padrão"
        let article = "O"
        if (this.gender === 'F' || this.gender === 'f') {
            article = "A"
        }
        console.log(`${article} ${this.categories} ${this.name} atacou usando ${attack}\n`)
    }
}


const weapon = ["espada", "machado", "feitiço", "chakra", "kunai", "jutsu"]

let war = new hero("Conan", 25,"m", "guerreiro")
let warf = new hero("Diana", 23, "f", "guerreira")

let wizard = new hero("Magnus", 1000, "m", "feiticeiro")
let mage = new hero("Eva", 2300, "f", "feiticeira")

let monk = new hero("Ryu", 50, "m", "monge")
let nun = new hero("Minerva", 65, "f", "monja")

let ninjam = new hero("Uzui", 100, "m", "shinobi")
let ninja = new hero("Tsunade", 200, "f", "kunoichi")

war.attack()
warf.attack()
wizard.attack()
mage.attack()
monk.attack()
nun.attack()
ninjam.attack()
ninja.attack()
