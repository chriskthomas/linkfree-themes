const fs = require('fs');

const index_obj = {};

// Iterate through the themes folder and read the contents of each `NAME` file
// to get the theme name. Then output a JSON array of objects with the theme
fs.readdir('themes', (err, dirs) => {
    if (err) {
        console.error(err);
        return;
    }
    for (const dir of dirs) {
        const theme_name = fs.readFileSync(`themes/${dir}/NAME`, 'utf8')
        index_obj[dir] = { id: dir, name: theme_name.trim(), css: `themes/${dir}/style.css` };
    }

    // After the array is built, write it to the index.json file
    fs.writeFile('index.json', JSON.stringify(index_obj), 'utf8', (err) => {
        if (err) {
            console.error(err);
            return;
        }
    });
});

