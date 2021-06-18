import "./style.scss";

import { kebabCase } from "lodash";

// if we directly use this file we will get the error -
// ? Uncaught SyntaxError: Cannot use import statement outside a module
// so to get rid of the above error we have to use webpack which willbundle the files
// and creates a dist folder and compiled js file and that js file will be used
// in public/index.html instead of this src/index.js file.

console.log(kebabCase("lets use lodash package to convert this plain text to kebab-case text"));


// https://webpack.js.org/loaders/sass-loader/