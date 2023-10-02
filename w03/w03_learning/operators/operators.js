// operators.js
let shipHealth = 3;
let shipAmmo = 3;
let targetHealth = 3;

function fireShip() {
  if (shipCanFire()) {
    shipAmmo--;
    if (isHit()) {
      targetHealth--;
      console.log("hit - targetHealth:", targetHealth);
    } else {
      console.log("miss");
    }
  } else {
    reloadShip();
    console.log("reloading, shipHealth:", shipHealth);
  }
}

function encounter() {
  console.log("You see a target");
  if (!isDestroyed(targetHealth) && !isDestroyed(shipHealth)) {
    fireShip();
    if (isDestroyed(targetHealth)) {
      console.log("Target eliminated");
    }
    if (isDestroyed(shipHealth)) {
      console.log("ship destroyed");
    }
  }
}

//function list
/*
shipCanFire() - if (shipHealth > 0 && shipAmmo > 0)
isHit() - if (randomNum > .5), false if (randomNum < .5)
reloadShip() - reduce shipHealth by 1 and increase ammo by 3
isDestroyed(health) - if (health <= 0)
*/

function isHit() {
    if (Math.random() > .5) {
        return true;
    }   
    else {
        return false;
    }
        
}

function shipCanFire() {
    if (shipHealth > 0 && shipAmmo > 0) {
        return true;
    } 
    else {
        return false;
    }
}

function isDestroyed(health) {
    if (health <= 0) {
        return true;
    }
    else {
        return false;
    }
}

function reloadShip() {
    shipHealth -= 1;
    shipAmmo += 3;
}
