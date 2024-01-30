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