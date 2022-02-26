import { writable } from "svelte/store";

const pollStore = writable ([
    {
		id: 1,
		question: 'Python or Javascript?',
		answerA: 'Python',
		answerB: 'Javascript',
		votesA: 9,
		votesB: 15
	},
    {
		id: 2,
		question: 'Buenos Aires or La Plata?',
		answerA: 'La Plata',
		answerB: 'Buenos Aires',
		votesA: 90,
		votesB: 65
	},
    {
		id: 3,
		question: 'React or Svelte?',
		answerA: 'React',
		answerB: 'Svelte',
		votesA: 69,
		votesB: 69
	}
])

export default pollStore