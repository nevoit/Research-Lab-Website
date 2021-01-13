<template>
    <div>
        <!-- <a v-if="per.about" data-toggle="collapse" title="For more information" v-bind:href="'#info-'+per.id" role="button" aria-expanded="false" aria-controls="collapseExample">
            <img v-if="per.image" :src="'images/people-images/'+per.image" alt="Image" class="img-fluid rounded-circle img-thumbnail people-profile" @error="about" />
            <img v-else :src="'images/people-images/none.png'" alt="Image" class="img-fluid rounded-circle img-thumbnail people-profile" />
        </a>
        <img v-else :src="'images/people-images/'+per.image" alt="Image" class="img-fluid rounded-circle img-thumbnail people-profile"> -->
        <router-link :to="'people/' + per.id" @click.native="scrollToTop" exact class="people-link">
            <img v-if="per.image" :src="'images/people-images/'+per.image" alt="Image" class="img-fluid rounded-circle img-thumbnail people-profile" @error="about" />
            <img v-else :src="'images/people-images/none.png'" alt="Image" class="img-fluid rounded-circle img-thumbnail people-profile" />
            <p v-if="per.name" class="people-name">{{ per.name }}</p>
        </router-link>
        <p v-if="degree" class="people-academic-degree">{{ degree }} <span v-if="per.years">({{ per.years }})</span></p>

        <div class="social d-flex justify-content-center">
            <ul class="global-list">
                <li v-if="per.facebook">
                    <a v-bind:href="per.facebook" title="Facebook" target="_blank">
                        <i class="fab fa-facebook-square"></i>
                    </a>
                </li>
                <li v-if="per.twitter">
                    <a v-bind:href="per.twitter" title="Twitter" target="_blank">
                        <i class="fab fa-twitter"></i>
                    </a>
                </li>
                <li v-if="per.instagram">
                    <a v-bind:href="per.instagram" title="Instagram" target="_blank">
                        <i class="fab fa-instagram"></i>
                    </a>
                </li>
                <li v-if="per.linkedin">
                    <a v-bind:href="per.linkedin" title="Linkedin" target="_blank">
                        <i class="fab fa-linkedin"></i>
                    </a>
                </li>
                <li v-if="per.github">
                    <a v-bind:href="per.github" title="Github" target="_blank">
                        <i class="fab fa-github"></i>
                    </a>
                </li>
                <li v-if="per.googleScholar">
                    <a v-bind:href="per.googleScholar" title="Google Scholar" target="_blank">
                        <i class="fab fa-google"></i>
                    </a>
                </li>
                <li v-if="per.mail">
                    <a v-bind:href="'mailto:'+per.mail" title="Email" target="_blank">
                        <i class="far fa-envelope"></i>
                    </a>
                </li>
                <li v-if="per.about">
                    <a data-toggle="collapse" v-bind:href="'#info-'+per.id" title="Information" role="button" aria-expanded="false" aria-controls="collapseExample">
                    <i class="fas fa-info"></i>
                    </a>
                </li>
            </ul>
        </div>
        <div class="collapse" v-bind:id="'info-'+ per.id">
            <div class="card card-body">
                {{ per.about }}    
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        degree:{
            type: String,
            required: true
        },
        per: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
        };
    },
    methods: {
        about () {
            this.per.image = 'none.png'
        },
        scrollToTop() {
            window.scrollTo(0,0);
        }
    }
};
</script>

<style>
</style>
