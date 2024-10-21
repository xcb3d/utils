// Tìm button có thẻ span chứa "Grade on groupmates" và kích hoạt click
const gradeButton = [...document.querySelectorAll('button')].find(btn => {
  const span = btn.querySelector('span');
  return span && span.textContent.trim() === "Grade on groupmates";
});

if (gradeButton) {
  gradeButton.click();

  // Ấn vào tất cả các input có value "5"
  const inputs = document.querySelectorAll('input[value="5"]');
  inputs.forEach(input => {
      input.click();
  });

  // Hàm tìm button chứa "Grade"
  const findAndClickGradeButton = () => {
      const finalButton = [...document.querySelectorAll('button')].find(btn => {
          const span = btn.querySelector('span');
          return span && span.textContent.trim() === "Grade";
      });

      if (finalButton) {
          let count = 0;
          const intervalId = setInterval(() => {
              finalButton.click();
              count++;

              // Dừng lại sau 5 lần ấn (hoặc điều chỉnh số lần theo nhu cầu)
              if (count >= 5) {
                  clearInterval(intervalId);
              }
          }, 100); // 100ms giữa mỗi lần click
      } else {
          console.log("Không tìm thấy button có span chứa 'Grade', đang tìm lại...");
      }
  };

  // Tìm button chứa "Grade" với khoảng cách 100ms
  const searchInterval = setInterval(() => {
      const finalButton = [...document.querySelectorAll('button')].find(btn => {
          const span = btn.querySelector('span');
          return span && span.textContent.trim() === "Grade";
      });

      if (finalButton) {
          clearInterval(searchInterval);
          findAndClickGradeButton();
      }
  }, 100); // 100ms giữa mỗi lần tìm
} else {
  console.log("Không tìm thấy button có span chứa 'Grade on groupmates'.");
}
