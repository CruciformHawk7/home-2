# Vanilla HTML, CSS and Tailwind

A template to work with Vanilla HTML, CSS & JS with Tailwind enabled.

## Installation

1. Clone this repository using `git clone` or any other method.

2. Run `npm install` to fetch all modules.

3. Run `npm run build-fat-css` to build tailwind with all the required css. Re run this if you add custom styles onto styles.css

4. Edit the required files in `src` folder. Use Live Server or similar program to visualise changes via the index.html in src.


## Build

To build a production build, run `npm run build`.


## Directories

```
    |- dist - Distributable HTML files, CSS, and other stuff.
    |- node_modules
    |- src  - Readable HTML files
    \
     |- css/tailwind.fat.css - Contains all the Tailwind classes, for development only.
     |- css/styles.css - Add custom CSS classes here to be packaged with Tailwind.

```