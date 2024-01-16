async function main() {
  const myVideo = document.getElementById("myVideo");
  const buttonStart = document.getElementById("start");
  const stopBtn = document.getElementById("offBtn");
  const startLiveBtn = document.getElementById("startLive");
  const stopLiveBtn = document.getElementById("offBtnLive");
  const recordedVideo = document.getElementById("recordedVideo");

  let stream = await navigator.mediaDevices.getUserMedia({
    video: {
      facingMode: {
        exact: "user",
      },
    },
    audio: true,
  });

  // First create stream object

  startLiveBtn.addEventListener("click", startLive);

  async function startLive() {
    if (!stream.active) {
      stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: {
            exact: "user",
          },
        },
        audio: true,
      });
    }
    myVideo.srcObject = stream;

    buttonStart.removeAttribute("disabled");
    stopLiveBtn.removeAttribute("disabled");
  }

  stopLiveBtn.addEventListener("click", stopLive);

  function stopLive() {
    const stream = myVideo.srcObject;
    var tracks = stream.getTracks();
    
    tracks.forEach((track) => {
      track.stop();
    });

    myVideo.srcObject = null;

    stopBtn.setAttribute("disabled", true);
    recordedVideo.setAttribute("controls", true);

    stopLiveBtn.setAttribute("disabled", true);
  }

  // myVideo.onloadedmetadata = (e) => {
  //   myVideo.play();
  // };

  // record the live video

  if (!MediaRecorder.isTypeSupported("video/webm")) {
    console.log("Not supported");

    alert("Not supported");
  }

  // let mediaRecoder = new MediaRecorder(stream, {
  //   mimeType: "video/webm",
  // });

  // This is it

  buttonStart.addEventListener("click", startBtnFn);

  function startBtnFn() {
    let mediaRecoder = new MediaRecorder(stream, {
      mimeType: "video/webm",
    });

    if (mediaRecoder.mimeType !== "video/webm") {
      mediaRecoder = new MediaRecorder(stream, {
        mimeType: "video/webm",
      });
    }

    mediaRecoder.start();

    mediaRecoder.addEventListener("dataavailable", (event) => {
      recordedVideo.src = URL.createObjectURL(event.data);
    });

    stopBtn.removeAttribute("disabled");
    buttonStart.setAttribute("disabled", true);
  }

  // stopBtn.addEventListener("click", stopBtnFn);

  // function stopBtnFn() {
  //   mediaRecoder.stop();
  //   buttonStart.setAttribute("disabled", true);
  //   stopBtn.setAttribute("disabled", true);
  //   if (!recordedVideo.hasAttribute("controls")) {
  //     recordedVideo.setAttribute("controls", true);
  //   }
  // }
}

main();
