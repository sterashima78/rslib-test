import { getMsg } from "lib1";
import { increment } from "./number.js";

export const logging = (): void => console.log(getMsg());
export const incrementX = (n: number, x: number): number => x <= 0 ? x : incrementX(increment(n), x - 1)