import React from "react";

function Main() {
  const main_style = {
    backgroundColor: "rgb(13, 9, 26)",
    padding: "30px",
    color: "white",
    width: "100%",
  };
  const p_style = {
    marginTop: "20px",
    fontSize: "20px",
    fontFamily: "Arial, sans-serif",
    lineHeight: "1.6",
    textAlign: "justify",
  };
  return (
    <main style={main_style}>
      <div className="content">
        <h2>Beyond the Stars</h2>
      </div>
      <p style={p_style}>
        The Space Beyond the Stars When we look up at the night sky, we often
        see countless stars sprinkled across the velvet canvas of space. Some
        shine with the brilliance of ancient suns, while others twinkle faintly,
        whispering secrets from light-years away. But what lies beyond them—past
        the starlight, deeper into the cosmic dark? The answer is both haunting
        and beautiful: the unknown. Beyond the stars, there are voids vast
        enough to swallow galaxies. These are the great expanses of
        intergalactic space—oceans of nothingness, where light rarely travels
        and time feels frozen. But even in this emptiness, there is structure.
        Invisible webs of dark matter stretch like cosmic scaffolding, shaping
        the universe in silence. There are rogue planets drifting alone, without
        a sun to call home. Black holes, silent and invisible, distort time and
        space with their gravity. And then there’s dark energy, a force so
        mysterious that it drives the universe to expand faster and
        faster—pushing galaxies away from each other into infinite solitude. The
        space beyond the stars is not just a place. It's a reminder of how
        little we truly know. It humbles us, challenges us, and calls to the
        explorer in all of us. Every telescope we build, every mission we
        launch, brings us one step closer to understanding that great cosmic
        "beyond." So next time you gaze up at the stars, remember: they are not
        the end. They are just the beginning.
      </p>
    </main>
  );
}

export default Main;
