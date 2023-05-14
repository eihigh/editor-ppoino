import './index.css';

import { h, patch } from "superfine";
import { root } from "./root";

export const v = (t: string, p = {}) => (...c: any[]) => h(t, p, c); // another syntax of h
export const u = (f: { (): void }) => () => { f(); update(); }; // update() after f

export { text } from "superfine";

export const update = () => {
	patch(
		document.getElementById("app"),
		v("div", { id: "app" })(
			...root(),
		),
	)
}

update();