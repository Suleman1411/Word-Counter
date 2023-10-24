import inquirer from "inquirer";
const promptUserForSentence = async () => {
    const { Sentence } = await inquirer.prompt([
        {
            name: "Sentence",
            type: "input",
            message: "Enter a sentence to count the words:"
        }
    ]);
    return Sentence;
};
const countWordsInSentence = (sentence) => {
    const words = sentence.trim().split(" ");
    return words.length;
};
const main = async () => {
    const sentence = await promptUserForSentence();
    const wordCount = countWordsInSentence(sentence);
    if (wordCount === 1) {
        console.log(`One word doesn't make a sentence: "${sentence}"`);
    }
    else if (wordCount == 2) {
        console.log(`Two words alone do not form a sentence: "${sentence}"`);
    }
    else {
        console.log(`Your sentence has ${wordCount} words: "${sentence}"`);
    }
};
main();
