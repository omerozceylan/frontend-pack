const packages = [
    {
      name:"React",
      imgUrl:"https://pbs.twimg.com/card_img/1627660850495639552/2p5-fl2O?format=png&name=medium",
      key: 'react',
      info: 'Facebook tarafından geliştirilen bir JavaScript kütüphanesi, özellikle web arayüzleri oluşturmak için kullanılır.',
      isClicked:false 
    },
    {
      name:"Vue.js",
      imgUrl:"https://segwitz.com/wp-content/uploads/2021/06/vuejs-development-malaysia.jpeg",
      key: 'vue',
      info: 'Bir JavaScript framework\'ü, özellikle web arayüzleri oluşturmak için kullanılır.',
      isClicked:false 

    },
    {
      name:"Angular",
      imgUrl:"https://www.mobilhanem.com/wp-content/uploads/2019/01/angular-1024x410.png",
      key: '@angular/core',
      info: 'Google tarafından geliştirilen bir JavaScript framework\'ü, özellikle büyük ve karmaşık uygulamalar oluşturmak için kullanılır.',
      isClicked:false 
    },
    { 
      name: "Bootstrap",
      imgUrl:"https://smartstore.com/media/4771/content/Bootstrap_Logo_2000x615.jpg",
      key: 'bootstrap',
      info: 'Twitter tarafından geliştirilen bir CSS framework\'ü, özellikle mobil uyumlu web siteleri oluşturmak için kullanılır.',
      isClicked:false 
    },
    {
      name:"material ui",
      imgUrl:"https://cdn-media-1.freecodecamp.org/images/1*FDNeKIUeUnf0XdqHmi7nsw.png",
      key: '@material-ui/core',
      info: 'Google\'ın Material Design konseptine dayalı React bileşenleri koleksiyonu.',
      isClicked:false 
    },
    {
      name:"tailwind css",
      imgUrl:"https://miro.medium.com/max/1400/1*oPL8C-i04sqAUoOS_da9aA.jpeg",
      key: 'tailwindcss',
      info: 'CSS utility framework\'ü, hızlı bir şekilde özelleştirilebilir bileşenler oluşturmak için kullanılır.',
      isClicked:false 
    },
    {
      name:"next.js",
      imgUrl:"https://soshace.com/wp-content/uploads/2019/10/Getting-Started-with-NextJS.jpg",
      key: 'next',
      info: 'React tabanlı bir web framework\'ü, özellikle SEO dostu ve hızlı web siteleri oluşturmak için kullanılır.',
      isClicked:false 
    },
    {
      name:"gatsby",
      imgUrl:"https://images.ctfassets.net/4x6byznv2pet/4OW1X9ex1mImko8G4w4WAK/a16fceab310b718c7f375a760c4e1e16/logo-gatsby-0603eb9dd6bdfec9599dbc7590f891be-347ea.jpg",
      key: 'gatsby',
      info: 'React tabanlı bir web framework\'ü, özellikle statik web siteleri oluşturmak için kullanılır.',
      isClicked:false 
    },
    {
      name:"jquery",
      imgUrl:"https://www.alastyr.com/blog/wp-content/uploads/2021/04/Jquery-nedir.png",
      key: 'jquery',
      info: 'HTML belgesindeki elementleri manipüle etmek ve etkileşimli öğeler oluşturmak için kullanılan bir JavaScript kütüphanesi.',
      isClicked:false 
    },
    {
      name: "lodash",
      imgUrl:"https://miro.medium.com/max/800/1*3NrSA_osjPYn2rKVvjIGCw.png",
      key: 'lodash',
      info: 'JavaScript kütüphanesi, dizi, string, nesne vb. işlemleri yapmayı kolaylaştırır.',
      isClicked:false 
    },
    { 
      name:'redux',
      imgUrl:"https://miro.medium.com/max/1200/1*Uov-TfA20xfGqeIZyLWfnA.png",
      key: 'redux',
      info: 'JavaScript uygulamaları için bir state yönetim kütüphanesi.',
      isClicked:false 
    },
    {
      name: 'sass',
      imgUrl:"https://miro.medium.com/max/1366/1*HFYKWq92BcXJIdata7d-JQ.png",
      key: 'sass',
      info: 'CSS preprocessor\'ü, daha okunaklı ve yönetilebilir CSS kodları oluşturmayı sağlar.',
      isClicked:false 
    },
    {
      name:'styled-components',
      imgUrl:"https://i0.wp.com/css-tricks.com/wp-content/uploads/2020/11/styled-components-desert.png?fit=1200%2C600&ssl=1",
      key: 'styled-components',
      info: 'CSS-in-JS kütüphanesi, bileşenlerin stillerini içerikle birleştirir.',
      isClicked:false 
    },
    {
      name:'webpack',
      imgUrl:"https://raw.githubusercontent.com/webpack-contrib/awesome-webpack/master/media/awesome_webpack_branding.png",
      key: 'webpack',
      info: 'JavaScript dosyalarını birleştirmek, sıkıştırmak ve yönetmek için kullanılan bir araç.',
      isClicked:false 
    },
    {
      name: 'babel',
      imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY2oc6xY3RNnUPbyEPDCwgVn2Phq2qhl1gJ0Wd610tzqlVPtsUoYVWbi1XxoFerXsbg20&usqp=CAU",
      key: '@babel/core',
      info: 'JavaScript kodunu eski tarayıcılar için uyumlu hale getirmek için kullanılan bir transpiler.',
      isClicked:false 
    },
    {
      name:'eslint',
      imgUrl:"https://res.cloudinary.com/practicaldev/image/fetch/s--Z5fyN2Mm--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/q02cuualqoe470nis2my.png",
      key: "eslint",
      info: "JavaScript kodunu analiz ederek stil ve hata hatalarını bulmaya yarayan bir araç.",
      isClicked:false 
    },
    {
      name: 'prettier',
      imgUrl:"https://lh3.googleusercontent.com/sfHO5MKevLesNw1grlh21j0hgtH5IaMmASI5aVv_-gYyF7dvA96FlS7mdagWM6NDPxfEY2JwkArooEZZPOzXmu01-g=w640-h400-e365-rj-sc0x00ffffff",
      key: "prettier",
      info: "JavaScript kodunu otomatik olarak biçimlendiren bir araç.",
      isClicked:false 
    },
    {
      name: 'axios',
      imgUrl:"https://assets.axios.com/axios_logo_og.png",
      key: "axios",
      info: "JavaScript uygulamaları için HTTP istekleri göndermek için kullanılan bir kütüphane.",
      isClicked:false 
    },
    {
      name:'react native', 
      imgUrl:"https://www.appstud.com/wp-content/uploads/2018/03/React-Native-Titre.png",  
      key: "react-native",
      info: "React tabanlı mobil uygulama geliştirme framework'ü.",
      isClicked:false 
    },
    {
      name:'ionic',  
      imgUrl:"https://ionic.io/img/ionic-io-og-img.png",
      key: "@ionic/core",
      info: "Mobile uygulama geliştirme framework'ü, Angular veya React kullanarak mobil uygulamalar oluşturmak için kullanılır.",
      isClicked:false 
    },
    {
      name:'chart.js',  
      imgUrl:"https://miro.medium.com/max/1200/1*eCoqJKb-QnoxWFPsjyqU0g.png",
      key: "chart.js",
      info: "Grafik ve veri görselleştirmesi için kullanılan bir JavaScript kütüphanesi.",
      isClicked:false 
    },
    {
      name:'d3.js',  
      imgUrl:"https://www.vectorlogo.zone/logos/d3js/d3js-ar21.png",
      key: "d3",
      info: "Grafik ve veri görselleştirme için kullanılan bir JavaScript kütüphanesi.",
      isClicked:false 
    },
    {
      name:'three.js',  
      imgUrl:"https://miro.medium.com/max/724/1*6s_Dkfeldg35ySmAp0tPkQ.png",
      key: "three",
      info: "WebGL teknolojisi kullanarak 3D grafikler oluşturmak için kullanılan bir JavaScript kütüphanesi.",
      isClicked:false 
    },
    {
      name:'socket.io',  
      imgUrl:"https://ik.imagekit.io/ably/ghost/prod/2021/03/socket-io-logo-1.jpeg?tr=w-1728,q-50",
      key: "socket.io",
      info: "Websocket teknolojisi kullanarak gerçek zamanlı iletişim kurmak için kullanılan bir JavaScript kütüphanesi.",
      isClicked:false 
    },
    {
      name:'express',
      imgUrl:"https://miro.medium.com/max/1400/1*i2fRBk3GsYLeUk_Rh7AzHw.png",
      key: "express",
      info: "Node.js tabanlı bir web uygulama framework'ü.",
      isClicked:false 
    },
    {
      name:'koa',
      imgUrl:"https://miro.medium.com/max/1140/1*_SEhpSaIh7-l1jV-yFgeDQ.jpeg",
      key: "koa",
      info: "Node.js tabanlı bir web uygulama framework'ü.",
      isClicked:false 
    },{
      name:'passport',
      imgUrl:"https://res.cloudinary.com/practicaldev/image/fetch/s--kyypBiVD--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/9ngdmhfexbyafu2p5cll.png",
      key: "passport",
      info: "Node.js uygulamaları için kullanıcı kimlik doğrulama ve yetkilendirme için kullanılan bir kütüphane.",
      isClicked:false 
    },
    {
      name:'firebase',
      imgUrl:"https://firebase.google.com/images/social.png",
      key: "firebase",
      info: "Google tarafından sağlanan bir bulut tabanlı hizmet, özellikle mobil ve web uygulamaları için kullanılır.",
      isClicked:false 
    },
    {
      name:'aws sdk',
      imgUrl:"https://cdn.mindmajix.com/blog/images/aws-sdk-270420.png",
      key: "aws-sdk",
      info: "Amazon Web Services (AWS) için bir JavaScript kütüphanesi, bulut tabanlı uygulamalar oluşturmak için kullanılır.",
      isClicked:false 
    },
    {
      name:'jest',
      imgUrl:"https://miro.medium.com/max/796/1*VxBKV4bcUJ4M7WCuCNmHWw.png",
      key: "jest",
      info: "JavaScript uygulamaları için test framework'ü.",
      isClicked:false 
    },{
      name:'mocha',
      imgUrl:"https://pbs.twimg.com/media/Eh23ihMVoAEGbaf.jpg:large",
      key: "mocha",
      info: "JavaScript uygulamaları için test framework'ü.",
      isClicked:false 
    },
    {
      name:'chai',
      imgUrl:"https://miro.medium.com/max/1200/0*gV7fEaDKRGwpprdj.png",
      key: "chai",
      info: "JavaScript uygulamaları için bir test yazma kütüphanesi.",
      isClicked:false 
    },
    {
      name:'cypress',
      imgUrl:"https://pbs.twimg.com/media/DMqWohuXkAEBD1I.jpg",
      key: "cypress",
      info: "End-to-end testleri çalıştırmak için kullanılan bir JavaScript kütüphanesi.",
      isClicked:false 
    },
    {
      name:'puppeteer',
      imgUrl:"https://miro.medium.com/max/1400/1*9BG6g9a_2wGwAJVs5aAofg.png",
      key: "puppeteer",
      info: "Chromium tabanlı tarayıcıları otomatikleştirmek için kullanılan bir kütüphane.",
      isClicked:false 
    },
    {
      name:'storybook',
      imgUrl:"https://res.cloudinary.com/practicaldev/image/fetch/s--AU4TEK0l--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/9ype7suwe1wjzz4x3idl.png",
      key: "storybook",
      info: "React bileşenleri için bir UI geliştirme ortamı.",
      isClicked:false 
    },
    {
      name:'figma-api',
      imgUrl:"https://i0.wp.com/css-tricks.com/wp-content/uploads/2018/03/figma.jpg?fit=1200%2C600&ssl=1",
      key: "figma-api",
      info: "Tasarım araçlarıyla etkileşim kurmak için kullanılan bir API.",
      isClicked:false 
    },
    {
      name:'google-maps-api',
      imgUrl:"https://blog.isimtescil.net/wp-content/uploads/2018/11/google-maps-api.jpg",
      key: "google-maps-api",
      info: "Google Haritalar özelliklerine erişmek için kullanılan bir API.",
      isClicked:false 
    },
    {
      name:'stripe-api',
      imgUrl:"https://miro.medium.com/max/1024/1*m6pXBFDNitef-VSsgbWC2g.png",
      key: "stripe-api",
      info: "Online ödeme işlemleri için kullanılan bir API.",
      isClicked:false 
    },
    {
      name:'twilio-api',
      imgUrl:"https://arpost.co/wp-content/uploads/2017/10/twilio-logo-red.png",
      key: "twilio-api",
      info: "SMS, ses ve video iletişimleri için kullanılan bir API.",
      isClicked:false 
    },
    {
      name:'sendgrid-api',
      imgUrl:"https://d15tnd3q55f8nl.cloudfront.net/static/SG_Twilio_Lockup_Social-56f3cfd2f6b0c62422980170d57fac64.png",
      key: "sendgrid-api",
      info: "E-posta göndermek için kullanılan bir API.",
      isClicked:false 
    },
    {
      name:'nodemailer',
      imgUrl:"https://www.tatvasoft.com/outsourcing/wp-content/uploads/2022/10/Nodemailer.jpg",
      key: "nodemailer",
      info: "Node.js uygulamaları için e-posta göndermek için kullanılan bir kütüphane.",
      isClicked:false 
    },
    {
      name:'moment.js',
      imgUrl:"https://res.cloudinary.com/practicaldev/image/fetch/s--klS7tkQa--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/jrsh2skvurtyik8kb0e0.png",
      key: "moment.js",
      info: "JavaScript'te tarih ve saatlerle çalışmak için kullanılan bir kütüphane.",
      isClicked:false 
    },
    {
      name:'react-router',
      imgUrl:"https://reactrouter.com/ogimage.png",
      key: "react-router",
      info: "React uygulamalarında yönlendirme yapmak için kullanılan bir kütüphane.",
      isClicked:false 
    },
    {
      name:'formik',
      imgUrl:"https://miro.medium.com/max/1400/1*z9lOCDcy6KcBY_7qam436g.png",
      key: "formik",
      info: "React uygulamalarında form işlemleri yapmak için kullanılan bir kütüphane.",
      isClicked:false 
    }, 
    {
      name:'yup',
      imgUrl:"https://miro.medium.com/max/1200/1*4Apu-JRlee0VEJbQDplgPg.png",
      key: "yup",
      info: "JavaScript uygulamalarında veri doğrulama işlemleri yapmak için kullanılan bir kütüphane.",
      isClicked:false 
    },
    {
      name:"Grommet",
      imgUrl:"https://repository-images.githubusercontent.com/32787174/df991780-daec-11e9-8b9c-d5bcdc59fbad",
      key: "grommet",
      info: "React tabanlı bir UI bileşenleri kütüphanesi.",
      isClicked:false 
   }
  
  
  ]


  export {packages}


let containerNode = document.querySelector('.items-container')


//Print to html all items in obj
packages.forEach((item)=> {
 
  let html = `
            <div class="items">
                <div class="select-section">
                 <div class="items-img">
                      <img src=${item.imgUrl} class="img"/>
                  </div>
                </div>
                <div class="items-button-container">
                    <div class="items-title">${item.name}</div>
                    <img src="./src/info2.svg" class="items-info-button"/>
                </div>

            </div>
  `
  containerNode.innerHTML = containerNode.innerHTML + html

}
)

