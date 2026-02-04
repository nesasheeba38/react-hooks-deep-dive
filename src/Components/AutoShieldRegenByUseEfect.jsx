import React, { useEffect, useState } from "react";

const AutoShieldRegen = () => {
  const [shield, setShield] = useState(50);
  const [health, setHealth] = useState(100);
  const MAX_SHIELD = 50;
  const MAX_HEALTH = 100;
  useEffect(() => {
    if (shield >= MAX_SHIELD || health <= 0) return;

    const interval = setInterval(() => {
      setShield((prevShield) => {
        if (prevShield < MAX_SHIELD) {
          return prevShield + 5;
        }
        return prevShield;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, [shield, health]);
  
  const damage=30
  const enemyAttack=()=>{
    setShield((prevShield)=>{
      if(prevShield >= damage){
         return prevShield -damage
      }
      else{
        const remainingDamage=damage-prevShield
        setHealth((prevHealth)=>Math.max(prevHealth-remainingDamage,0))
        return 0;
      }
    })
  }

  const resetGame=()=>{
    setShield(MAX_SHIELD)
    setHealth(MAX_HEALTH)
  }
  
  return (
    <div style={{ marginBottom: "20px", textAlign: "center"}}>
      <h3>🛡️Shield Regeneration</h3>
      <p> ❤️Health:{health}</p>
      <p> 🛡️Shield:{shield}</p>
      <button onClick={enemyAttack}>Enemy Attack</button>
      <button onClick={resetGame}>Reset</button>
      {health ===0 && <h3>Game Over</h3>}
    <hr></hr>
    </div>
  );
};

export default AutoShieldRegen;
