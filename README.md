# TypeScript for Node.js Develpment

This project contains the presentation and sample code for my "Introduction to TypeScript for JavaScript Developers" session at the [Atlanta JavaScript Meetup](https://www.meetup.com/AtlantaJavaScript/).

[Run the Presentation](./presentation/intrototypescript.html).

## Examples

The `samples` folder contains a simple project to illustrate various TypeScript features. The examples are best viewed from an IDE like [Visual Studio Code](https://code.visualstudio.com) for development-time feedback. From the folder, you can:

`npm install` to install pre-requisite dependencies.

`npm run-script tsc` builds JavaScript files from the examples.

`node 001-types` runs the first example.

`npm run-script tsc:w` builds and watches, useful for commenting/uncommenting code to walk through the example.

`npm run-script tsc:es6` builds for ECMAScript 2015 to illustrate differences in output despite the same TypeScript source.

Regards,

[@JeremyLikness](https://twitter.com/jeremylikness) | [Blog](https://blog.jeremylikenss.com)