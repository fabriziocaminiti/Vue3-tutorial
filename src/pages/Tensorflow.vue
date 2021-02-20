<template>
  <div>
    <section class="flex w-full">
      <div class="m-auto">
        <div class="text-center w-full">
          <small class="text-center">Prova solo con il cellulare</small>
          <h1 class="text 2xl my-4">Tensorflow Object Detention</h1>
        </div>
        <div class="flex flex-wrap justify-center my-2">
          <div class="w-full flex justify-center">
            <button
              v-if="!isStreaming"
              class="flex w-32 rounded bg-yellow-400 justify-center px-2 py-1"
              @click="openCamera"
            >Open Camera</button>
            <div v-else class="flex justify-between">
              <button
                class="flex w-32 rounded bg-yellow-400 justify-center px-2 py-1"
                @click="stopStreaming"
              >Stop Video</button>
              <button
                class="flex w-32 rounded bg-yellow-400 justify-center px-2 py-1"
                @click="Snapshot"
              >Snapshot</button>
            </div>
          </div>
          <video ref="videoRef" autoplay="true" width="100" />
        </div>
        <div class="flex flex-wrap justify-center">
          <img
            ref="imgRef"
            src="https://images.unsplash.com/photo-1528795259021-d8c86e14354c"
            width="200"
            crossorigin="anonymous"
          />
          <div class="w-full text-center my-4">
            <button @click="detect" class="w-32 rounded bg-yellow-400">
              <span v-if="isLoading">Loading ...</span>
              <span v-else>Detect Object</span>
            </button>
            <div v-if="result.length > 0">
              <p>{{result[0].class}}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from "vue";
require("@tensorflow/tfjs-backend-cpu");
require("@tensorflow/tfjs-backend-webgl");
const cocoSsd = require("@tensorflow-models/coco-ssd");
export default {
  setup() {
    const videoRef = ref("");
    const imgRef = ref("");
    const isLoading = ref(false);
    const isStreaming = ref(false);
    const result = ref([]);
    async function detect() {
      const img = imgRef.value;
      isLoading.value = true;
      const model = await cocoSsd.load();
      const predictions = await model.detect(img);
      result.value = predictions;
      isLoading.value = false;
    }
    async function openCamera() {
      if (navigator.mediaDevices.getUserMedia) {
        const devices = await navigator.mediaDevices.enumerateDevices();
        const cams = devices.filter(device => device.kind === "videoinput");
        const camId = cams[0].deviceId;

        navigator.mediaDevices
          .getUserMedia({ video: { deviceId: { exact: camId } } })
          .then(stream => {
            isStreaming.value = true;
            videoRef.value.srcObject = stream;
          });
      }
    }
    function stopStreaming() {
      const stream = videoRef.value.srcObject;
      const tracks = stream.getTracks();
      tracks.map(track => track.stop());
      isStreaming.value = false;
    }
    function Snapshot() {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      ctx.drawImage(videoRef.value, 0, 0, 200, 200);
      const data = canvas.toDataURL("image/png");
      imgRef.value.setAttribute("src", data);
    }
    return {
      imgRef,
      result,
      detect,
      isLoading,
      openCamera,
      videoRef,
      isStreaming,
      stopStreaming,
      Snapshot
    };
  }
};
</script>

<style>
</style>