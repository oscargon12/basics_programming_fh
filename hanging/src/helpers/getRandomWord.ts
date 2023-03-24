let words: string[] = [
    'COMPUTADORA',
    'AGUACATE',
    'PAPAYA',
    'VEHICULO',
    'ANIMAL',
    'VETERINARIO',
    'CELULAR',
    'TELEFONO'
]

export function getRandomWord() {
    const randomIndex: number = ( Math.floor(Math.random() * words.length) );
    //Esta define un numero entre 0 y los indices del array
    return words[randomIndex];
}