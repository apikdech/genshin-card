import { writable, type Writable } from 'svelte/store';
import { type CharacterState, type Character, characters } from '../const/character';

export const parseMarginLeft = (distance: string | undefined) => {
	let dist = -100;
	if (distance !== undefined) {
		dist = Math.max(parseInt(distance) ?? 0, 0) - 100;
	}
	return dist + 'px';
};

export const parseTotalCards = (layout: string | undefined) => {
	let total = 1;
	if (layout !== undefined) {
		total = Math.min(Math.max(parseInt(layout), 1), 7);
	}

	return total;
};

export const parseTextSize = (textSize: string | undefined) => {
	return Math.min(Math.max(parseInt(textSize as string) ?? 20, 1), 25);
};

export const initState = (num: number) => {
	const state: CharacterState[] = Array.from(
		{ length: num },
		(v, k) =>
			({
				id: k,
				value: 'loading.gif',
				label: 'Loading...'
			}) as CharacterState
	);

	return state;
};

let stateHolder: Writable<CharacterState[]> | undefined = undefined;

export const getCharacterState = (num: number) => {
	if (stateHolder === undefined) {
		stateHolder = writable(initState(num));
	}
	return stateHolder;
};

export const resetStateHolder = () => {
	stateHolder = undefined;
};

export const getCharacters = (type: GameType, excluded: CharacterState[]) => {
	let result: Character[] = characters[type];

	for (let index = 0; index < excluded.length; index++) {
		const exChar: Character = { value: excluded[index].value, label: excluded[index].label };
		result = result.filter((item) => item.label !== exChar.label);
	}

	return result;
};

export const getCharactersViaSpreadsheet = (
	excluded: CharacterState[],
	characterStore: Character[]
) => {
	let result: Character[] = characterStore;

	for (let index = 0; index < excluded.length; index++) {
		const exChar: Character = { value: excluded[index].value, label: excluded[index].label };
		result = result.filter((item) => item.label !== exChar.label);
	}

	return result;
};

export type GameType = 'genshin' | 'hsr';

export type CellData = {
	c: Array<{ v: string }>;
};

const parseDriveImageId = (url: string) => {
	const regex = /\/file\/d\/([^/]+)/;
	const match = url.match(regex);
	if (match) {
		return match[1];
	}
	return null;
};

const initCharacter = (label: string, value: string) => {
	if (value.includes('drive.google.com')) {
		const id = parseDriveImageId(value);
		if (id !== null) {
			value = `https://lh3.googleusercontent.com/d/${id}`;
		}
	}
	return {
		label,
		value
	} as Character;
};

const fetchCharacterData = async (spreadsheetId: string) => {
	const url = `https://docs.google.com/spreadsheets/d/${spreadsheetId}/gviz/tq`;
	try {
		const response = await fetch(url);

		if (response && response.ok) {
			const data: Character[] = [];
			const regex = /google\.visualization\.Query\.setResponse\(({.*})\);/;
			const responseText = await response.text();
			const result = responseText.match(regex);
			if (result && result.length > 0) {
				const parsedJson = JSON.parse(result[1]);
				const rows = parsedJson.table.rows as Array<CellData>;
				for (let i = 1; i < rows.length; i++) {
					const char = initCharacter(rows[i].c[0].v, rows[i].c[1].v);
					data.push(char);
				}
			}
			return data.sort((a, b) => (a.label < b.label ? -1 : 1));
		}
	} catch (e) {
		console.error('Failed to fetch spreadsheet data', e);
	}
	return [];
};

export const initCharacterData = async (spreadsheetId: string) => {
	const response = await fetchCharacterData(spreadsheetId);
	return response;
};

export const characterDataStore: Writable<Character[]> = writable([]);
