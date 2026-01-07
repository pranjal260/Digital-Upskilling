// Language selection + saving
function changeLanguage() {
  const lang = document.getElementById("language").value;
  localStorage.setItem("preferredLang", lang); // 🔒 Save preference

  const courseSection = document.getElementById("course-section");
  if (courseSection) {
    courseSection.style.display = "block";
  }

  // 🔄 Language-wise text update
  if (lang === "hi") {
    document.getElementById("course-heading").textContent = "📘 उपलब्ध पाठ्यक्रम";
    document.getElementById("course-title").textContent = "बेसिक आईटी स्किल्स";
    document.getElementById("course-desc").textContent = "कंप्यूटर चलाना, टाइपिंग और इंटरनेट सेफ़्टी सीखें।";
  } else if (lang === "bn") {
    document.getElementById("course-heading").textContent = "📘 উপলব্ধ কোর্স";
    document.getElementById("course-title").textContent = "বেসিক আইটি স্কিলস";
    document.getElementById("course-desc").textContent = "কম্পিউটার, টাইপিং এবং ইন্টারনেট নিরাপত্তা শিখুন।";
  } else if (lang === "pa") {
    document.getElementById("course-heading").textContent = "📘 ਉਪਲਬਧ ਕੋਰਸ";
    document.getElementById("course-title").textContent = "ਬੇਸਿਕ ਆਈਟੀ ਸਕਿਲਸ";
    document.getElementById("course-desc").textContent = "ਕੰਪਿਊਟਰ, ਟਾਈਪਿੰਗ ਅਤੇ ਇੰਟਰਨੈੱਟ ਸੁਰੱਖਿਆ ਸਿੱਖੋ।";
  } else {
    document.getElementById("course-heading").textContent = "📘 Available Course";
    document.getElementById("course-title").textContent = "Basic IT Skills";
    document.getElementById("course-desc").textContent = "Learn how to use computers, type, and surf safely.";
  }
}

// Start Learning button logic
function startModule() {
  window.location.href = "course-list.html"; // 🚀 Goes to course list
}
