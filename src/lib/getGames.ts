import { getCollection } from 'astro:content';

 

export const games = (await getCollection("games"))
	 
export type Game = (typeof games)[number];

export const getGames = (
	limit = Number.MAX_SAFE_INTEGER,
): Game[] => {
	return games.slice(0, limit);
 };