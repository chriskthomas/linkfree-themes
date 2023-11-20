# LinkFree Themes

This is a collection of themes for [LinkFree Generator](https://github.com/writeplace/linkfree-generator). You can preview the themes [here](https://writeplace.github.io/linkfree-themes/).

## Development

Themes are contained in the `themes` directory. You can add your own themes by adding a new directory with a slug that represents the theme name and adding the following files:

- `NAME`: The theme's name. This is the name that will be displayed in the generator.
- `style.css`: The theme's css file. Technically optional, but you probably want one.
- `script.js`: Optional theme javascript file.
- `/images`: Optional directory for theme images. The theme's css file (and/or js file) should reference images in this directory.
- `/audio`: Optional directory for theme audio files. The theme's js file should reference audio files in this directory.
