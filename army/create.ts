"use strict";
import ISoldier from './interfaces/soldier.interface';
import randomNumber from './helpers/randomNumber';

export const index = async (event) => {
  const querystring = event.pathParameters;
  let armyCount = querystring.armyCount;
  if (armyCount <= 0) {
    return { success: false, message: 'Army count should be greater then 0.' };
  }

  const army: ISoldier[] = [];

  const soldierTypes = ['spearmen', 'swordsmen', 'archer'];

  soldierTypes.forEach((value, index) => {
    if (armyCount > 0) {
      const count = (soldierTypes.length - 1 === index) ? armyCount : randomNumber(1, armyCount);

      if (count > 0) {
        army.push({ type: value, count });
        armyCount = armyCount - count;
      }
    }
  });

  return { success: true, data: army, message: 'Army is ready to attack 🗡' };
};

export default index;