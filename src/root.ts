import { v, u, text } from "./index";

let count = 0;

const onclick = () => count++;

const title = () =>
	v("h1", { onclick: u(onclick) })(
		text("エディタっぽいの"),
		v("p")(text(String(count))),
	);

const sidebar = () =>
	v("div", { id: "sidebar" })(
		v("div", { class: "sidemenu-item" })(
			text("アクター"),
		),
		v("div", { class: "sidemenu-item" })(
			text("システム"),
		),
	);

export const root = () => [
	title(),
	sidebar(),
]