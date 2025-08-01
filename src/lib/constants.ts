import path from "node:path";

export const paths = {
	projects: path.join(process.cwd(), "src", "content", "projects"),
	blogs: path.join(process.cwd(), "src", "content", "blog"),
};
export const baseUrl = "https://cartas.polgubau.com";
export const metadata = {
	title: "¿Cómo se jugaba? | Pol Gubau Amores",
	description: "Un sitio web para descubrir y aprender a jugar a juegos de cartas españoles tradicionales como el Cuadrado, la Brisca, el 5 vidas y muchos más.",
	name: "¿Cómo se jugaba?",
	longName: "¿Cómo se jugaba? Pol Gubau Amores",
	slogan: "Frontend Developer and UX Designer",
	picture: "/assets/blog/authors/pol.jpg",
	tags: [
		"Pol Gubau Amores",
		"Cartas",
		"Españolas",
		"Juego de cartas",
		"Juego de mesa",
		"Juego de mesa español",
		"Juego de mesa tradicional",
		"Poker",
		"Mus",
		"Brisca",
		"Juego de cartas español",
		"Cuadrado",
		"5 Vidas",
		"Juego de cartas cuadrado",
		"Juego de cartas 5 vidas",
	],

	links: {
		website: "https:/cartas.polgubau.com",
		github: "http://github.com/polgubau/como-se-jugaba",
		linkedin: "https://www.linkedin.com/in/polgubauamores/",
	},
	homeOgImage: "assets/thumbnail.png",
};
