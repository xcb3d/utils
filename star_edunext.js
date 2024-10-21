// Tìm button có thẻ span chứa "Grade on groupmates" và kích hoạt click
const gradeButton = [...document.querySelectorAll('button')].find(btn => {
  const span = btn.querySelector('span');
  return span && span.textContent.trim() === "Grade on groupmates";
});

if (gradeButton) {
  gradeButton.click();

  // Hàm ấn vào tất cả các input có value "5"
  const clickInputs = () => {
      const inputs = document.querySelectorAll('input[value="5"]');
      inputs.forEach(input => {
          input.click();
      });
      console.log("Đã ấn vào tất cả các input có value '5'.");
  };

  // Hàm ấn vào button có span chứa "Grade"
  const clickGradeButton = () => {
      const finalButton = [...document.querySelectorAll('button')].find(btn => {
          const span = btn.querySelector('span');
          return span && span.textContent.trim() === "Grade";
      });

      if (finalButton) {
          finalButton.click();
          console.log("Đã ấn vào button chứa 'Grade'.");
      } else {
          console.log("Không tìm thấy button có span chứa 'Grade'.");
      }
  };

  // Lặp lại việc click vào input có value "5" và button "Grade" liên tục
  setInterval(() => {
      clickInputs();         // Click vào input có value "5"
      clickGradeButton();    // Click vào button chứa "Grade"
  }, 1000); // 1000ms giữa mỗi lần click
} else {
  console.log("Không tìm thấy button có span chứa 'Grade on groupmates'.");
}
