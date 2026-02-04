const ATTACK_VALUE = 10;

let chosenMaxHealth = 100;
let currentMonsterHealth = chosenMaxHealth;
let currentPlayerHealth = chosenMaxHealth;

adjustHealthBars(chosenMaxHealth);

function attackMonster() {
  const damage = dealMonsterDamage(ATTACK_VALUE);
  currentMonsterHealth -= damage;
}

attackBtn.addEventListener("click", attackMonster);
