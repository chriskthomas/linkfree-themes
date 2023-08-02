#!/bin/sh

API_URL="https://linkfree.ckt.im/api.php"
THEMES_SOURCE="https://cdn.jsdelivr.net/npm/linkfree-themes@$(jq -r '.version' 'package.json')"

rm -rf "preview"
mkdir "preview"

# Generate index header
cat <<EOF >"preview/index.html"
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>LinkFree Theme Preview</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            overflow-x: clip;
        }

        iframe {
            border: 0;
            width: 100vw;
            height: 100vh;
            overflow: clip;
        }
    </style>
</head>
<body>
EOF

# Generate theme previews and add them to index
jq -c '.[]' 'index.json' | while read theme; do
    theme_name="$(echo "$theme" | jq -r '.name')"
    theme_id="$(echo "$theme" | jq -r '.id')"

    # Generate preview of theme
    curl -s "https://via.placeholder.com/200x200" |
        curl -s \
            -F "name=$theme_name" \
            -F "url=#" \
            -F "description=Just Another LinkFree Theme" \
            -F "photo=@-" \
            -F "email=example@example.org" \
            -F "links[1][name]=LinkedIn" \
            -F "links[1][icon]=linkedin-square" \
            -F "links[1][url]=https://linkedin.com" \
            -F "links[2][name]=GitHub" \
            -F "links[2][icon]=github" \
            -F "links[2][url]=https://github.com" \
            -F "links[3][name]=Mastodon" \
            -F "links[3][icon]=mastodon" \
            -F "links[3][url]=https://joinmastodon.org" \
            -F "theme=$theme" \
            -F "themes-source=$THEMES_SOURCE" \
            "$API_URL" >"preview/$theme_id.html"

    # Add theme preview to index
    echo "<iframe scrolling='no' src='$theme_id.html' title='$theme_name' id="$theme_id"></iframe>" >>"preview/index.html"

    # Tell the user what's going on
    echo "Generated preview for $theme_name"

    # Wait a bit to avoid rate limiting
    sleep 1
done

# Close index tags
echo "</body></html>" >>"preview/index.html"
