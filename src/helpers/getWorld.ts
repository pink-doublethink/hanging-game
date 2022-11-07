import words from "../data/wordList.json"

function getWord() {
    return words[Math.floor(Math.random() * words.length)]
}

export default getWord