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

  // Click vào input có value "5" lần đầu
  clickInputs();

  // Lặp lại việc click vào các input có value "5" với khoảng delay 1000ms
  const inputInterval = setInterval(() => {
      clickInputs();
  }, 600); // 1000ms giữa mỗi lần click

  // Tìm lại button chứa "Grade" sau mỗi 1000ms
  const searchInterval = setInterval(() => {
      const finalButton = [...document.querySelectorAll('button')].find(btn => {
          const span = btn.querySelector('span');
          return span && span.textContent.trim()// Tìm button có thẻ span chứa "Grade on groupmates" và kích hoạt click
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
           === "Grade";
      });

      if (finalButton) {
          clearInterval(searchInterval);
          let count = 0;
          const clickGradeInterval = setInterval(() => {
              finalButton.click();
              count++;

              // Dừng lại sau 5 lần click (hoặc điều chỉnh theo nhu cầu)
          }, 400); // 100ms giữa mỗi lần click
      }
  }, 1000); // 1000ms giữa mỗi lần tìm
} else {
  console.log("Không tìm thấy button có span chứa 'Grade on groupmates'.");
}
