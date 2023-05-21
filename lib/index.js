/*! Mouseee | (c) Pedro Isac and other contributors | www.pedroisac.dev/mouseee */

(function () {
  const defaults = {
    color: "#fff",
    size: 20,
    trailColor: "#fff",
    trailTime: 300,
    showTrail: true,
    clickAnimation: true,
  };

  let config = {};

  try {
    config = { ...defaults, ...mouseeeConfig };
  } catch (e) {
    config = defaults;
  }

  let size = config.size;

  // === CREATING CURSOR ===
  const cursor = document.createElement("div");
  const pointer = document.createElement("div");
  cursor.appendChild(pointer);
  document.body.appendChild(cursor);

  // === CURSOR STYLE ===
  cursor.style.position = "absolute";
  cursor.style.width = `${size}px`;
  cursor.style.height = `${size}px`;
  cursor.style.border = `1px solid ${config.color}`;
  cursor.style.borderRadius = "50%";
  cursor.style.display = "flex";
  cursor.style.justifyContent = "center";
  cursor.style.alignItems = "center";
  cursor.style.pointerEvents = "none";

  // === POINTER STYLE ===
  pointer.style.position = "absolute";
  pointer.style.width = `${size * 0.4}px`;
  pointer.style.height = `${size * 0.4}px`;
  pointer.style.borderRadius = "50%";
  pointer.style.backgroundColor = config.trailColor;

  // === MOVING CURSOR ===
  document.addEventListener("mousemove", (e) => {
    cursor.style.transition = "none";
    cursor.style.display = "flex";
    cursor.style.top = `${e.pageY - size / 2}px`;
    cursor.style.left = `${e.pageX - size / 2}px`;

    if (config.showTrail) {
      const trail = document.createElement("div");
      trail.style.backgroundColor = config.trailColor;
      trail.style.width = `${size * 0.4}px`;
      trail.style.height = `${size * 0.4}px`;
      trail.style.position = "absolute";
      trail.style.borderRadius = "50%";
      trail.style.top = `${e.pageY - (size * 0.4) / 2}px`;
      trail.style.left = `${e.pageX - (size * 0.4) / 2}px`;
      trail.style.pointerEvents = "none";
      document.body.appendChild(trail);

      setTimeout(() => {
        document.body.removeChild(trail);
      }, config.trailTime);
    }
  });

  document.addEventListener("scroll", (e) => {
    cursor.style.display = "none";
  });

  // === CLICK ANIMATION ===
  if (config.clickAnimation) {
    window.onmousedown = (e) => {
      size = size * 1.3;
      cursor.style.width = `${size}px`;
      cursor.style.height = `${size}px`;
      cursor.style.top = `${e.pageY - size / 2}px`;
      cursor.style.left = `${e.pageX - size / 2}px`;
      cursor.style.transition = `all 0.1s ease-in`;
    };

    window.onmouseup = (e) => {
      size = config.size;
      cursor.style.width = `${size}px`;
      cursor.style.height = `${size}px`;
      cursor.style.top = `${e.pageY - size / 2}px`;
      cursor.style.left = `${e.pageX - size / 2}px`;
      cursor.style.transition = `all 0.1s ease-in`;
    };
  }
})();
