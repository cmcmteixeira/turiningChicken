'use strict';

export const CHANGE_TO_HELLO = 'HELLO_WORLD';
export const TO_UPPER = 'TO_UPPER';
export const TO_LOWER = 'TO_LOWER';
export const UPDATE = 'UPDATE_NAME'

export function toUpper(name) {
    return {
        type: TO_UPPER,
        name: name.toUpperCase()
    }
}

export function toLower(name) {
    return {
        type: TO_LOWER,
        name: name.toLowerCase()
    }

}

export function updateName(name) {
    return {
        type: UPDATE,
        name: name
    }
}
