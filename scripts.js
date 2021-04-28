const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo() {
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then((localMediaStream) => {
      video.srcObject = localMediaStream;
      video.play();
    })
    .catch((err) => {
      console.log('webcam error', err);
    });
}

function paintToCanvas() {
  const width = video.videoWidth;
  const height = video.videoHeight;

  [canvas.width, canvas.height] = [width, height];

  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);
  }, 16);
}

function takePhoto() {}

function wait() {
  console.log(video.srcObject);
  if (video.srcObject === null) {
    setTimeout(() => {
      console.log('waiting');
      wait();
    }, 500);
  } else {
    setTimeout(() => {
      console.log('printing');
      paintToCanvas();
    }, 500);
  }
}

getVideo();
wait();
