const fs = require("fs");
const path = require("path");
const { minify: minifyHTML } = require("html-minifier");
const { minify: minifyJS } = require("terser");

function minifyHtmlFiles(srcDir, distDir) {
    const files = fs.readdirSync(srcDir);

    files.forEach((file) => {
        if (file.endsWith(".html")) {
            const filePath = path.join(srcDir, file);
            const html = fs.readFileSync(filePath, "utf8");

            const minified = minifyHTML(html, {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true,
                minifyCSS: true,
                minifyJS: true,
            });

            fs.writeFileSync(path.join(distDir, file), minified);
            console.log(`Minified: ${file}`);
        }
    });
}

if (!fs.existsSync("dist")) {
    fs.mkdirSync("dist");
}

minifyHtmlFiles("src", "dist");

if (fs.existsSync("src/styles")) {
    fs.cpSync("src/styles", "dist/styles", { recursive: true });
}
