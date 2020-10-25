"use strict";

(()=>{

  const btn = document.getElementById("button");

  btn.addEventListener("click", () => {
    const result = ["great", "good", "bad"];
    const n = Math.floor(Math.random() * result.length);
    btn.textContent=result[n];
  });
  
})();
