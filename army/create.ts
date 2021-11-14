"use strict";
import ISoldier from './interfaces/soldier.interface';
import randomNumber from './helpers/randomNumber';

/**
 * Function to create a army of soldiers.
 *
 * @param event - Event object which is received from the event handler of API Gateway.
 * @returns - Returns a promise which resolves to the response body.
 */
export const index = async (event): Promise<any> => {
  // Get Query parameters and extract armyCount from it.
  const querystring = event.pathParameters;
  let armyCount = querystring.armyCount;

  // Check if armyCount is not equal to or less then 0.
  if (armyCount <= 0) {
    return { success: false, message: 'Army count should be greater then 0.' };
  }

  const army: ISoldier[] = [];

  // Defines the types of soldiers.
  const soldierTypes = ['spearmen', 'swordsmen', 'archer'];

  // Iterate over the soldierTypes array and create a soldier for each type.
  soldierTypes.forEach((value, index) => {
    // If armyCount is greater then 0, create a soldier.
    if (armyCount > 0) {

      // If looping on last element of soldierTypes array, then set remaining armyCount to that soldier count.
      const count = (soldierTypes.length - 1 === index) ? armyCount : randomNumber(1, armyCount);

      // If count is greater then 0 then save that soldier in the army array.
      if (count > 0) {
        army.push({ type: value, count });
        armyCount = armyCount - count;
      }
    }
  });

  return { success: true, data: army, message: 'Army is ready to attack 🗡' };
};

export default index;