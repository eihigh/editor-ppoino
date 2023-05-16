import { v, text } from "./index";
import { actor } from "./view/actor";
import { system } from "./view/system";

// データベースエディタのナビゲーションコンポーネント

const pages = [
	actor,
	system,
];

export const nav = {
	view: () =>
		v("nav")(
			v("div")(text("hoge")),
		),
};