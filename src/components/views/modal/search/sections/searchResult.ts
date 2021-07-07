interface Person {
	id: number;
	nickname: string;
	email: string;
}

const searchResult: Array<Person> = [
	{ id: 1, nickname: 'jy', email: 'jy@gmail.com' },
	{ id: 2, nickname: 'qwert', email: 'qwert@gmail.com' },
	{ id: 3, nickname: 'quokka', email: 'quokka@gmail.com' },
	{ id: 4, nickname: 'jy', email: 'jy@gmail.com' },
	{ id: 5, nickname: 'qwert', email: 'qwert@gmail.com' },
	{ id: 6, nickname: 'quokka', email: 'quokka@gmail.com' },
];

export default searchResult;
