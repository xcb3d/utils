(function () {
  let lastUrl = location.href;

  // Hàm sẽ chạy khi URL thay đổi
  function onUrlChange() {
    if (location.href.split("/")[5] === "lecture") {
      onSkipVideo();
    } else {
      onSkipButton();
    }
  }

  function onSkipButton() {
    let currentUrl = window.location.href;
    let parts = currentUrl.split("/");
    let slug = parts[4];
    let buttonId = parts[6];
    let courseId;
    let userId;

    fetch(
      `https://www.coursera.org/api/onDemandCourses.v1?q=slug&slug=${slug}`,
      {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        courseId = data.elements[0].id;
        fetch("https://www.coursera.org/api/adminUserPermissions.v1?q=my", {
          method: "GET",
          credentials: "include",
          headers: {
            Accept: "application/json",
          },
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data.elements[0].id);
            userId = data.elements[0].id;
            fetch(
              "https://www.coursera.org/api/onDemandSupplementCompletions.v1",
              {
                method: "POST",
                credentials: "include",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  userId: parseInt(userId),
                  courseId: courseId,
                  itemId: buttonId,
                }),
              }
            )
              .then((response) => response.json())
              .then((data) => {
                console.log("Done");
              })
              .catch((error) => console.error("Lỗi:", error));
          })
          .catch((error) => console.error("Lỗi:", error));
      })
      .catch((error) => console.error("Lỗi:", error));
  }

  function onSkipVideo() {
    let currentUrl = window.location.href;
    let parts = currentUrl.split("/");
    let userId;
    let slug = parts[4];
    let videoId = parts[6];

    fetch("https://www.coursera.org/api/adminUserPermissions.v1?q=my", {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.elements[0].id);
        userId = data.elements[0].id;
        fetch(
          `https://www.coursera.org/api/opencourse.v1/user/${userId}/course/${slug}/item/${videoId}/lecture/videoEvents/ended?autoEnroll=false`,
          {
            method: "POST",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
              "X-CSRF3-Token": "1739252338.sAGeQyIjIAnlOrul",
            },
            body: JSON.stringify({ contentRequestBody: {} }),
          }
        )
          .then((response) => response.json())
          .then((data) => console.log("Done"))
          .catch((error) => console.error("Error:", error));
      })
      .catch((error) => console.error("Lỗi:", error));
  }

  // Sử dụng MutationObserver để theo dõi thay đổi trên <body>
  const observer = new MutationObserver(() => {
    if (location.href !== lastUrl) {
      lastUrl = location.href;
      onUrlChange();
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });

  // Kiểm tra thay đổi bằng pushState/replaceState
  (function (history) {
    const pushState = history.pushState;
    history.pushState = function () {
      pushState.apply(history, arguments);
      window.dispatchEvent(new Event("pushstate"));
    };
    const replaceState = history.replaceState;
    history.replaceState = function () {
      replaceState.apply(history, arguments);
      window.dispatchEvent(new Event("replacestate"));
    };
  })(window.history);

  window.addEventListener("pushstate", onUrlChange);
  window.addEventListener("replacestate", onUrlChange);
  window.addEventListener("popstate", onUrlChange); // Khi bấm Back/Forward

  console.log("URL Change Detector Started...");
})();
