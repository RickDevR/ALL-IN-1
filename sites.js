// SUPER EASY WEBSITE LIST
// Just add:  Name | URL

const sites = `
Task challenge | https://rickdevr.github.io/Task/
Duck clicker | https://rickdevr.github.io/Duck-clicker/
Secret coding language decode and Ecode | https://rickdevr.github.io/Secretcoder/
Satisfying squishy sound | https://rickdevr.github.io/squishy/
chat room | https://rickdevr.github.io/mini-chat/
`.trim().split("\n").map(line => {
    const [name, url] = line.split("|").map(x => x.trim());
    return { name, url };
});
