<template>
    <div class="row border-bottom pub-row">
        <div class="col-12">
            <div v-if="pub.link">
                <a :href="'publications/'+pub.link" class="pub-link" target="_blank">
                    <span class="pub-title pub-link-text">{{pub.name}}</span>
                </a>
            </div>
            <div v-else>
                <span class="pub-title">{{pub.name}}</span>
            </div>

            <p class="pub-authors">{{pub.authors}} In {{pub.journal}}, {{pub.year}}</p>
        </div>
    </div>
</template>

<script>

export default {
  props: {
    pubType:{
        type: String,
        required: true
    },
    pub: {
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

.pub-link-text {
    color: #0076aa;
}

</style>
