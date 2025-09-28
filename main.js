// 🎤 Play Button (TTS Example)
document.getElementById("playBtn").addEventListener("click", () => {
  let msg = new SpeechSynthesisUtterance("Hello! Ye demo voice test hai.");
  msg.lang = "hi-IN";
  window.speechSynthesis.speak(msg);
});

// ↗️ Share Button
document.getElementById("shareBtn").addEventListener("click", () => {
  if (navigator.share) {
    navigator.share({
      title: document.title,
      text: "Check out this awesome demo!",
      url: window.location.href
    }).catch(err => console.log("Share failed:", err));
  } else {
    alert("Browser share ko support nahi karta.");
  }
});
