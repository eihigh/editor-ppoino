import { h, text, patch } from "superfine"
const v = (t: string, p = {}) => (...c: any[]) => h(t, p, c); // another syntax of h
const u = (f: { (): void }) => () => { f(); update(); }; // update() after calling f

let n = [0, 1, 2];

function doClick() {
	n.push(n.length);
}

function sidebar() {
	return v("ul")(
		...n.map(e =>
			v("li", { onclick: u(doClick) })(text(e))
		),
	);
}

function root() {
	return [
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