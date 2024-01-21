async function main() {
  const myVideo = document.getElementById("myVideo");
  const buttonStart = document.getElementById("start");
  const stopBtn = document.getElementById("offBtn");

  const startLiveBtn = document.getElementById("startLive");
  const stopLiveBtn = document.getElementById("offBtnLive");

  const recordedVideo = document.getElementById("recordedVideo");

  let stream = await navigator.mediaDevices.getUserMedia({
    video: {
      facingMode:{
        exact: "user"
      }
    },
    audio: true,
  });

  // First create stream object

  startLiveBtn.addEventListener("click", startLive);

  async function startLive() {
    if (!stream.active) {
      console.log("inside");
      stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode:{
            exact: "user"
          }
        },
        audio: true,
      });
    }
    console.log(stream);
    myVideo.srcObject = stream;

    buttonStart.removeAttribute("disabled");
    stopLiveBtn.removeAttribute("disabled");
  }

  stopLiveBtn.addEventListener("click", stopLive);

  function stopLive() {
    const stream = myVideo.srcObject;
    var tracks = stream.getTracks();

    console.log(tracks);

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

  // function start() {
  //     navigator.mediaDevices.getUserMedia({video:true}).then((stream) => {
  //         myVideo.srcObject = stream;

  //         myVideo.onloadedmetadata = (e) => {
  //             myVideo.play()
  //         }
  //      })
  // }

  //  function stop(){
  //     const stream = myVideo.srcObject;
  //     var tracks = stream.getTracks();

  //     console.log(tracks)
  //     for (let i = 0; i < tracks.length; i++) {
  //         var track = tracks[i];
  //         track.stop();

  //     }

  //     myVideo.srcObject = null
  // }

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
      console.log("inside media recoder");
      mediaRecoder = new MediaRecorder(stream, {
        mimeType: "video/webm",
      });

      // recordedData();
    }

   

    console.log(mediaRecoder);

    mediaRecoder.start();

    // recordedData();

    mediaRecoder.addEventListener("dataavailable", (event) => {
      console.log("whats up guys i am here")
      recordedVideo.src = URL.createObjectURL(event.data)
    })

    stopBtn.removeAttribute("disabled");
    buttonStart.setAttribute("disabled", true);
  }

  stopBtn.addEventListener("click", stopBtnFn);

  function stopBtnFn() {
    //   const stream = myVideo.srcObject;
    //   var tracks = stream.getTracks();

    //   console.log(tracks);
    //   for (let i = 0; i < tracks.length; i++) {
    //     var track = tracks[i];
    //     track.stop();
    //   }

    //   myVideo.srcObject = null;

    mediaRecoder.stop();

    buttonStart.setAttribute("disabled", true);
    stopBtn.setAttribute("disabled", true);
    if (!recordedVideo.hasAttribute("controls")) {
      recordedVideo.setAttribute("controls", true);
    }
  }

  // function recordedData() {
  //   mediaRecoder.addEventListener("dataavailable", (event) => {
  //     console.log("whats up");
  //     recordedVideo.src = URL.createObjectURL(event.data);
  //   });
  // }

  // recordedData();
}

main();
