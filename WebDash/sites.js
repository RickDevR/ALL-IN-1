// SUPER EASY WEBSITE LIST
// Just add:  Name | URL

const sites = `
Task challenge | https://rickdevr.github.io/Task/
Duck clicker | https://rickdevr.github.io/Duck-clicker/
`.trim().split("\n").map(line => {
    const [name, url] = line.split("|").map(x => x.trim());
    return { name, url };
});
