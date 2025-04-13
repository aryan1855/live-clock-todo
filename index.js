function clock() {
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let date = time.getDate();
    let month = time.getMonth();
    let year = time.getFullYear();
    let dayName = time.toLocaleString('default', { weekday: 'long' });
  
    let ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
  
    document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
    document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
    document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
    document.getElementById("ampm").textContent = ampm;
  
    document.getElementById("date").textContent = date.toString().padStart(2, "0");
    document.getElementById("months").textContent = (month + 1).toString().padStart(2, "0");
    document.getElementById("year").textContent = year;
    document.getElementById("DAYNAME").textContent = dayName;
  
    const header = document.getElementById("header");
    if (time.getHours() < 12) {
      header.textContent = "Good Morning";
    } else if (time.getHours() < 17) {
      header.textContent = "Good Afternoon";
    } else {
      header.textContent = "Good Evening";
    }
  }
  
  clock();
  setInterval(clock, 1000);
  
  // To-Do List
  function addTask() {
    const input = document.getElementById("todo-input");
    const task = input.value.trim();
    if (task === "") return;
  
    const li = document.createElement("li");
    li.textContent = task;
  
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "X";
    removeBtn.onclick = () => li.remove();
  
    li.appendChild(removeBtn);
    document.getElementById("todo-list").appendChild(li);
    input.value = "";
  }
  