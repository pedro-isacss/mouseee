(function(){
  const defaults = {
    color: "#fff",
    size: 20,
    trailColor: "#fff",
    trailTime: 300
  }
  
  let config = {}
  
  try{
    config = {...defaults, ...mouseeeConfig}
  } catch(e){
    config = defaults
  }
  
  // === CREATING CURSOR ===
  const cursor = document.createElement("div")
  const pointer = document.createElement("div")
  cursor.appendChild(pointer)
  document.body.appendChild(cursor)
  
  // === CURSOR STYLE ===
  cursor.style.position = "absolute"
  cursor.style.width = `${config.size}px`
  cursor.style.height = `${config.size}px`
  cursor.style.border = `1px solid ${config.color}`
  cursor.style.borderRadius = "50%"
  cursor.style.display = "flex"
  cursor.style.justifyContent = "center"
  cursor.style.alignItems = "center"
  cursor.style.pointerEvents = "none"
  
  // === POINTER STYLE ===
  pointer.style.position = "absolute"
  pointer.style.width = `${config.size * 0.4}px`
  pointer.style.height = `${config.size * 0.4}px`
  pointer.style.borderRadius = "50%"
  pointer.style.backgroundColor = config.trailColor
  
  // === MOVING CURSOR ===
  document.addEventListener("mousemove", (e) => {
    cursor.style.top = `${e.pageY - config.size/2}px`
    cursor.style.left = `${e.pageX - config.size/2}px`
  
    const trail = document.createElement("div")
    trail.style.backgroundColor = config.trailColor
    trail.style.width = `${config.size * 0.4}px`
    trail.style.height = `${config.size * 0.4}px`
    trail.style.position = "absolute"
    trail.style.borderRadius = "50%"
    trail.style.top = `${e.pageY - (config.size * 0.4)/2}px`
    trail.style.left = `${e.pageX - (config.size * 0.4)/2}px`
    trail.style.pointerEvents = "none"
    document.body.appendChild(trail)
  
    setTimeout(() => {
      document.body.removeChild(trail)
    }, config.trailTime)
  })
  
  document.addEventListener("scroll", (e) => {
    cursor.style.top = "-100px"
  }) 
})()