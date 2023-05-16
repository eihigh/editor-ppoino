import { v, text, willRender } from "../index";

let count = 0;

const clk = (e: Event) => {
	willRender();

	e.preventDefault();
	count++;
};

export const root = () =>
	v("div", { id: "app" })(
		v("h1", { onclick: clk })(
			text(`Hello, ${count}!`),
		),
	);