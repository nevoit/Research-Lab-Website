<template>
<div>
  <jumbotronImage mainTitle="Contact Us" poster="images/contact.jpg" scrollLink="main-contact"></jumbotronImage>
  <main class="content" id="main-contact">
    <div class="section-div">
      <div class="our-team section-padding">
           
            <div class="contact-content">                
                                <div class="contact-info">
                                    <h3>Contact Details</h3>
                                    <div class ="row contact-row">
                                        <div class="col-12 col-md-6 media">
                                            <div class="icon mr-5">
                                                <i class="fas fa-at"></i>
                                            </div>
                                            <div class="media-body">
                                                <span>
                                                    LAB-NAME                                                
                                                    <br />
                                                    <br />
                                                    <a href="mailto:" target="_blank" class="btn btn-service">Send me an email</a>                                        
                                                </span>
                                            </div>
                                        </div><!-- /.media -->
                                        <div class="col-12 col-md-6 media">
                                            <div class="icon mr-5">
                                                <i class="fas fa-building"></i>
                                            </div>
                                            <div class="media-body">
                                                <span>
                                                    LAB ADDRESS
                                                    <br />
                                                    LAB ADDRESS
                                                    <br />
                                                    LAB ADDRESS
                                                    <br />
                                                    LAB ADDRESS
                                                    <br />
                                                </span>
                                            </div>
                                        </div><!-- /.media -->                                        


                                    </div>
                                </div><!-- /.contact-info -->
                    </div>
            
            <div class="map-responsive">
             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3410.394744867429!2d34.80204747634136!3d31.26517450887808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x150267bcb1b99561%3A0x6daadde170014e37!2sBen+Gurion+University+Software+and+Information+Systems+Engineering!5e0!3m2!1siw!2sil!4v1535059040480" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
            </div>
      </div>
    </div>
  </main>
</div>
</template>

<script>
import JumbotronComp from "./JumbotronComp.vue";
import JumbotronImage from "./JumbotronImage.vue";

export default {
  metaInfo: {
    title: 'Contact Us',
    titleTemplate: '%s - CDALab',
    htmlAttrs: {
      lang: 'en',
      amp: true
    },
    meta: [
      { name: 'keywords', content: 'email, bgu'},
      { name: 'description', content: 'If you have any questions regarding our projects or are for something else, we are waiting for your email.'}
    ]
  },
  components: {
    "jumbotrom-comp": JumbotronComp,
    "jumbotronImage": JumbotronImage
  },
  data() {
    return {
    };
  },
  methods: {
  },
  computed: {
  }
};
</script>

<style scoped>
.map-responsive{
    overflow:hidden;
    padding-bottom:56.25%;
    position:relative;
    height:0;
}
.map-responsive iframe{
    left:0;
    top:0;
    height:100%;
    width:100%;
    position:absolute;
}
.jumbotron{
     background-color:#0076aa;
}
.photo-credit {
    margin-top: 20px;
}

.contact-row{
    margin-bottom: 10px;
}

</style>
