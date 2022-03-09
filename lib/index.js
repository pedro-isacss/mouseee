const cursor = document.createElement("div")
const pointer = document.createElement("div")
cursor.appendChild(pointer)
document.body.appendChild(cursor)

// === CURSOR STYLE ===
cursor.style.position = "absolute"
cursor.style.width = "20px"
cursor.style.height = "20px"
cursor.style.border = "1px solid #fff"
cursor.style.borderRadius = "50%"
cursor.style.display = "flex"
cursor.style.justifyContent = "center"
cursor.style.alignItems = "center"
cursor.style.pointerEvents = "none"

// === POINTER STYLE ===
pointer.style.position = "absolute"
pointer.style.width = "8px"
pointer.style.height = "8px"
pointer.style.borderRadius = "50%"
pointer.style.backgroundColor = "#fff"

// === CURSOR TRAIL ===

// === MOVING CURSOR ===
document.addEventListener("mousemove", (e) => {
  cursor.style.top = `${e.pageY - 10}px`
  cursor.style.left = `${e.pageX - 10}px`
})

document.addEventListener("scroll", (e) => {
  cursor.style.top = `${window.screenY - 10}px`
  console.log(window.screen.height)
})