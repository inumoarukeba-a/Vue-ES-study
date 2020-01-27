'use strict'

import { Class01 } from "./module01.js";
import Class02 from "./module02.js";

const aaa = new Class01().MyMethod();
const bbb = new Class02().MyMethod();

console.log(aaa);
console.log(bbb);
