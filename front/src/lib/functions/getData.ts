import { fetchData } from './utils';

export async function getQuestions() {
    const data = await fetchData(`http://localhost:3000/question`);
    const questionsList = [];

    for (let i = 0; i < data.length; i++) {
        questionsList.push(data[i]);
    }

    return questionsList;
}

export async function getAnswers() {
    const data = await fetchData(`http://localhost:3000/answer`);
    const answersList = [];

    for (let i = 0; i < data.length; i++) {
        answersList.push(data[i]);
    }

    return answersList;
}

export async function getAnswerIsCorrect(questionIdAssociated: number) {
    const data = await fetchData(`http://localhost:3000/answer`);
    let rightAnswer = "";

    for (let i = 0; i < data.length; i++) {
        if ((data[i].questionIdAssociated === questionIdAssociated) && (data[i].correctAnswer === true)) {
            rightAnswer = data[i].answerContent;
            console.log(rightAnswer);
        }
    }

    return rightAnswer;
}