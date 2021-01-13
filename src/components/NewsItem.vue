<template>
    <div v-if="ne.important" class="row border-bottom pub-row important-news">
        <div class="col-12 col-lg-3 d-flex justify-content-center">
            <span class="date-news">{{ne.dateMonth}} {{ne.dateDay}}, {{ne.dateYear}}</span>
        </div>
        <div class="col-12 col-lg-9">
            <div v-if="ne.link">
                <a :href="ne.link" target="_blank" class="link-news">
                    <p class="pub-title link-news-text">{{ne.description}} <i class="fas fa-highlighter" title="Important"></i></p>
                </a>
            </div>
            <div v-else>
                <p class="pub-title">{{ne.description}} <i class="fas fa-highlighter" title="Important"></i></p>
            </div>
        </div>
    </div>
    <div v-else class="row border-bottom pub-row">
        <div class="col-12 col-lg-3 d-flex justify-content-center">
            <span class="date-news">{{ne.dateMonth}} {{ne.dateDay}}, {{ne.dateYear}}</span>
        </div>
        <div class="col-12 col-lg-9">
                        <div v-if="ne.link">
                <a :href="ne.link" target="_blank" class="link-news">
                    <p class="pub-title link-news-text">{{ne.description}}</p>
                </a>
            </div>
            <div v-else>
                <p class="pub-title">{{ne.description}}</p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  props: {
    ne: {
        type: Object,
        required: true
    }
  },
  data() {
    return {
    };
  }
};
</script>

<style>
.date-news {
    font-size: 16px;
    font-weight: bold;
}

.important-news {
    background-color: #f6f7f9;
}

.link-news-text {
    color: #0076aa;
}

.link-news {
    text-decoration: none;
}

.link-news:hover {
    text-decoration: underline;
}
</style>
