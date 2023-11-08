// "",
  
const pages = [
  "slope.html",
  "tunnel-rush.html",
  "retro-bowl.html",
  "minecraft.html",
  "drive-mad.html",
  "GD.html",
  "OvO.html",
  "1v1.lol.html",
  "basketball-stars.html",
  "cookie-clicker.html",
  "drive-mad.html",
  "paper-io-2.html",
  "stickman-hook.html",
  "tomb-of-the-mask.html",
  "time-shooter-2.html",
  "subway-surfers-sf.html",
  "among-us.html",
  "chrome-dino.html",
  "core-ball.html",
  "crossy-road.html",
  "death-run-3d.html",
  "drift-boss.html",
  "flappy-bird.html",
  "fnaw.html",
  "fruit-ninja.html",
  "justfall.lol.html",
  "minecraft-1.5.2.html",
  "rolly-vortex.html",
  "stack.html",
  "vex-3.html",
  "vex-4.html",
  "vex-5.html",
  "vex-6.html",
  "vex-7.html", 
  "orb-farm.html",
  "soccer-random.html",
  "boxing-random.html",
  "pixel-shooter.html",
  "elastic-man.html",
  "red-button.html",
  "FNF.html",
  "GDscratch.html",
  "SSNY.html",
  "CKC.html",
  "csgo-clicker.html",
  "stick-merge.html",
  "baldi-basics.html",
  "monkeytype.html",
  "fireboy-watergirl.html",
  "OvO-dimensions.html",
  
];

const pickLink = document.getElementById("pickLink");

pickLink.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent the default link behavior
    const randomIndex = Math.floor(Math.random() * pages.length);
    const randomPage = pages[randomIndex];
    window.location.href = randomPage;
});
