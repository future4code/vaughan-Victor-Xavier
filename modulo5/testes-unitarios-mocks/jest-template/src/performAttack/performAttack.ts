
// import { validateCharacter } from '../Character/validateCharacter ';
// import { Character } from './../interface/Character';

import { Character } from "../interface/Character";


// export const performAttack = (attaker: Character, defenser: Character) => {
//     if (!validateCharacter(attaker) || !validateCharacter(defenser)) {
//         throw new Error("Invalid character");

//     }

//     if (attaker.strength > defenser.defense) {
//         defenser.life = defenser.life - attaker.strength - defenser.defense
//     }
// }

export const performAttack = (
    attaker: Character,
    defenser: Character,
    validator: (input: Character) => boolean
) => {

    if (!validator(attaker) || !validator(defenser)) {
        throw new Error("invalid character");

    }

    if (attaker.strength > defenser.defense) {
        defenser.life = defenser.life - attaker.strength - defenser.defense
    }
}

