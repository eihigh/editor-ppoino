import { v, u, text } from "./index";

let count = 0;

const onclick = () => count++;

const title = () =>
	v("h1", { onclick: u(onclick) })(
		text("エディタっぽいの"),
		v("p")(text(String(count))),
	);

export const root = () => [
	title(),
]