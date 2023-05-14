import { h, text, patch } from "superfine"
const v = (t: string, p = {}) => (...c: any[]) => h(t, p, c); // another syntax of h
const u = (f: { (): void }) => () => { f(); update(); }; // update() after calling f

let n = ["あくたー", "じょぶ", "しすてむ"];

function doClick() {
	// n.push(n.length);
}

function sidebar() {
	return v("ul")(
		...n.map(e =>
			v("li", { onclick: u(doClick) })(text(e))
		),
	);
}

const title = () =>
	v("h1")(
		text("エディタっぽいの"),
	);

function root() {
	return [
		title(),
		sidebar(),
	];
}

function update() {
	patch(
		document.getElementById("app"),
		v("div", { id: "app" })(
			...root(),
		),
	)
}

update();