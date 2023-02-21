# BlockyCVMaker

## About
Fillable Resumé with block layout, inspired by [Zety](https://zety.com/). Configurable and extendable,
it uses Vue + Typescript, Pinia as state management, SASS and PUG for templating.

The intended use of this tool is creating nice-looking PDFs using browser print tools. 
It's also handy for actual printing using Contrast theme.

Try it out at [Github Pages](https://d-klimenko.github.io/blocky-cv/).

## Features
* Add, modify or delete blocks related to your work experience, education, skills, contacts, etc.;
* Drag-and-drop support on any list element;
* Change CV layout, text font and size in page settings;
* Your settings persist between sessions in LocalStorage;
* ✨Colorful Themes✨and a printer-friendly BW Contrast theme;
* Multi-page print support;
* Lightweight: only 60kb-ish gzipped bundle size!

## Installation (Local)

### Docker

1. Run `docker build -t blockycv .` to compile the image;
2. Run `docker run -d --rm -p 80:4173 --name blockycv blockycv` to run preview server;
3. Access `localhost` in your browser.

### Local NPM

1. Run `npm run dev` to start development server on `localhost:5173`;
2. Run `npm run build && npm run preview` to compile the static bundle and access it on `localhost:4173`.

## Screenshots

### Blue Moon Theme
![Blue Moon Theme!](https://i.imgur.com/8bMK6N3.png)

### Daybreak Theme
![Daybreak Theme!](https://i.imgur.com/FR7o3hA.png)

### Contrast Theme
![Contrast Theme!](https://i.imgur.com/qTTpDs5.png)

## Miscellaneous

> Hey, why didn't you use the vue-***-library for drag-and-drop or ***UIKit for styling?
> Wouldn't it be way faster and easier?

Yes.
