<template>
    <div class="jumbotron jumbotron-fluid text-white jumbotron-background" v-bind:style="{backgroundImage: 'url(' + poster + ')'}">
        <div class="container">
            <div class="breadcrumb-content section-before text-center bg-image">
                <div class="breadcrumb-info">
                    <div class="page-title">
                        <h1>{{ mainTitle }}</h1>
                        {{ description }}
                        <a :href="'#'+scrollLink" v-smooth-scroll="{ duration : 1000}" class="btn-circle btn-xl">
                            <i class="fas fa-angle-double-down scroll-down text-white"></i><span class="scroll-text">Scroll down</span>
                        </a>
                    </div>
                </div>
                <!-- /.breadcrumb-info -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        mainTitle: {
            type: String,
            required: true
        },
        poster: {
            type: String,
            required: true
        },
        scrollLink: {
            type: String,
            required: true
        },
        description: {
            type: String
        }
    },
    data() {
        return {
        };
    }
};
</script>

<style scoped>

/* Medium devices (tablets, 768px and down) */
@media (min-width: 768px) {
    .jumbotron-background{
        background-size: 100% 100%;
    }
}

.scroll-down {
    font-size: 20px;
}

.btn-circle.btn-xl {
    color: white;
    padding: 10px 16px;
    border-radius: 40px;
    border-color: white;
    font-size: 24px;
    line-height: 1.33;
    background-color: Transparent;
}

.btn-circle:hover, .btn-circle:focus {
    color: white;
    background: rgba(255,255,255,.1);
}

.scroll-text {
    color: white;
    padding-left: 5px;
}

</style>
