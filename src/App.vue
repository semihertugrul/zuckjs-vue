<template>
  <!-- <div></div> -->
  <div id="stories">
    <!-- <story :storyData="this.storyData" /> -->
  </div>
</template>

<script>
import { story } from "socialstory";
export default {
  name: "app",
  // components: {
  //   story
  // },
  data() {
    return {
      storyData: [
        {
          id: "ramon",
          photo:
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/users/1.jpg",
          name: "Soçi 2019",
          link: "",
          lastUpdated: 1575637794.095,
          category: "DÜNYA & POLİTİKA",
          seen: false,
          items: [
            {
              id: "ramon-1",
              type: "photo",
              length: 200,
              src:
                "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/1.jpg",
              preview:
                "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/1.jpg",
              link: "",
              linkText: false,
              seen: false,
              time: 1575042980.713
            },
            {
              id: "ramon-2",
              type: "video",
              length: 3,
              src:
                "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/2.mp4",
              preview:
                "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/2.jpg",
              link: "",
              linkText: false,
              seen: false,
              time: 1574956580.713
            },
            {
              id: "ramon-3",
              type: "photo",
              length: 3,
              src:
                "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/3.png",
              preview:
                "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/3.png",
              link: "",
              linkText: false,
              seen: false,
              time: 1574956580.713
            }
          ]
        },
        {
          id: "semih",
          photo:
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/users/1.jpg",
          name: "semih sffd",
          link: "",
          lastUpdated: 1575637794.095,
          category: "Ekonomi",
          seen: false,
          items: [
            {
              id: "ramon-1",
              type: "photo",
              length: 200,
              src:
                "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/1.jpg",
              preview:
                "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/1.jpg",
              link: "",
              linkText: false,
              seen: false,
              time: 1575042980.713
            },
            {
              id: "ramon-2",
              type: "video",
              length: 3,
              src:
                "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/2.mp4",
              preview:
                "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/2.jpg",
              link: "",
              linkText: false,
              seen: false,
              time: 1574956580.713
            },
            {
              id: "ramon-3",
              type: "photo",
              length: 3,
              src:
                "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/3.png",
              preview:
                "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/3.png",
              link: "",
              linkText: false,
              seen: false,
              time: 1574956580.713
            }
          ]
        }
      ]
    };
  },
  mounted() {
    story(this.storyData);
  }
};
</script>

<style></style>
