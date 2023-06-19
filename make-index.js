const fs = require("fs");

const index_obj = {};

// Iterate through the themes folder and read the contents of each `NAME` file
// to get the theme name. Then output a JSON array of objects with the theme
fs.readdir("themes", (err, dirs) => {
  if (err) {
    console.error(err);
    return;
  }
  for (const dir of dirs) {
    // Add the theme name to the object
    const theme_name = fs.readFileSync(`themes/${dir}/NAME`, "utf8");
    index_obj[dir] = { id: dir, name: theme_name.trim() };

    // Check if the css and js files exist and add them to the object if they do
    const potential_css_path = `themes/${dir}/style.css`;
    const potential_js_path = `themes/${dir}/script.js`;
    if (fs.existsSync(potential_css_path)) {
      index_obj[dir].css = potential_css_path;
    }
    if (fs.existsSync(potential_js_path)) {
      index_obj[dir].js = potential_js_path;
    }
  }

  // After the array is built, write it to the index.json file
  fs.writeFile("index.json", JSON.stringify(index_obj), "utf8", (err) => {
    if (err) {
      console.error(err);
      return;
    }
  });
});
