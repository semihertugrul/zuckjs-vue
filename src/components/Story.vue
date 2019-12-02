<template>
  <div id="stories">
    <!-- story -->
    <div
      class="story"
      :class="story.seen ? 'seen' : ''"
      :data-id="storyId"
      :data-last-updated="story.lastUpdated"
      :data-photo="story.photo"
    >
      <a class="item-link" :href="story.link">
        <span class="item-preview">
          <img :src="story.photo" />
        </span>
        <span
          class="info"
          itemProp="author"
          itemScope=""
          itemType="http://schema.org/Person"
        >
          <strong class="name" itemProp="name">{{ story.name }}</strong>
          <span class="time">{{ story.lastUpdated }}</span>
        </span>
      </a>

      <ul class="items">
        <!-- story item -->
        <li
          :data-id="storyItemId"
          :data-time="storyItem.time"
          :class="storyItem.seen"
        >
          <a
            :href="storyItem.src"
            :data-type="storyItem.type"
            :data-length="storyItem.length"
            :data-link="storyItem.link"
            :data-linkText="storyItem.linkText"
          >
            <img :src="storyItem.preview" />
          </a>
        </li>
        <!--/ story item -->
      </ul>
    </div>
    <!--/ story -->
  </div>
</template>

<script>
import Zuck from "zuck.js";
export default {
  name: "Story",
  data: function() {
    return { storiesElement: null, storiesApi: null };
  },
  methods: {},
  mounted() {
    this.storiesApi = new Zuck("stories", {
      skin: "snapgram", // container class
      avatars: true, // shows user photo instead of last story item preview
      list: false, // displays a timeline instead of carousel
      openEffect: true, // enables effect when opening story - may decrease performance
      cubeEffect: false, // enables the 3d cube effect when sliding story - may decrease performance
      autoFullScreen: false, // enables fullscreen on mobile browsers
      backButton: true, // adds a back button to close the story viewer
      backNative: false, // uses window history to enable back button on browsers/android
      previousTap: true, // use 1/3 of the screen to navigate to previous item when tap the story
      localStorage: true, // set true to save "seen" position. Element must have a id to save properly.
      reactive: true, // set true if you use frameworks like React to control the timeline (see react.sample.html)
      stories: [
        Zuck.buildTimelineItem(
          "ramon", // story id
          "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/users/1.jpg", // story dış img
          "Ramon", // story dış Altyzısı
          "https://ramon.codes", // story içindeki son itemdeki link url
          1492665454,
          [
            [
              "ramon-1", // sub story  id
              "photo", // sub story tipi
              50, // sub story saniye cinsinden uzunluğu
              "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/1.jpg", // sub story fotoğraf/video url
              "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/1.jpg", // sub story fotoğraf/video önizleme url
              "", // sub story linki url
              false, // sub story link yazısı
              false, // sub story boyunca sürenin gösterilip gösterilmemesi ile alakalı
              1492665454 // bu fonksiyonşimdiki zamanın 1574683755343 gibi bir değerini hesaplıyor ve ona göre story paylaşım zamanını belirtiyor
            ]
          ]
        )
      ]
    });
  },
  render: function() {
    const timelineItems = [];

    this.state.stories.forEach((story, storyId) => {
      const storyItems = [];

      story.items.forEach(storyItem => {
        storyItems.push(
          <li
            key={storyItem.id}
            data-id={storyItem.id}
            data-time={storyItem.time}
            className={storyItem.seen ? "seen" : ""}
          >
            <a
              href={storyItem.src}
              data-type={storyItem.type}
              data-length={storyItem.length}
              data-link={storyItem.link}
              data-linkText={storyItem.linkText}
            >
              <img src={storyItem.preview} />
            </a>
          </li>
        );
      });

      let arrayFunc = story.seen ? "push" : "unshift";
      timelineItems[arrayFunc](
        <div
          className={story.seen ? "story seen" : "story"}
          key={storyId}
          data-id={storyId}
          data-last-updated={story.lastUpdated}
          data-photo={story.photo}
        >
          <a className="item-link" href={story.link}>
            <span className="item-preview">
              <img src={story.photo} />
            </span>
            <span
              className="info"
              itemProp="author"
              itemScope=""
              itemType="http://schema.org/Person"
            >
              <strong className="name" itemProp="name">
                {story.name}
              </strong>
              <span className="time">{story.lastUpdated}</span>
            </span>
          </a>

          <ul className="items">{storyItems}</ul>
        </div>
      );
    });

    return (
      <div>
        <div
          ref={node => (this.storiesElement = node)}
          id="stories-react"
          className="storiesWrapper"
        >
          {timelineItems}
        </div>
      </div>
    );
  }
};
</script>

<style></style>
