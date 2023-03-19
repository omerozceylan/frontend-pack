const packages = [
  {
    name: "React",
    imgUrl:
      "https://itsg-global.com/wp-content/uploads/2016/09/react-js-to-use-or-not-to-use.png",
    key: "react",
    enInfo:'A JavaScript library developed by Facebook is used particularly for creating web interfaces.',
    info: "Facebook tarafından geliştirilen bir JavaScript kütüphanesi, özellikle web arayüzleri oluşturmak için kullanılır.",
  },
  {
    name: "Vue.js",
    imgUrl:
      "https://segwitz.com/wp-content/uploads/2021/06/vuejs-development-malaysia.jpeg",
    key: "vue",
    enInfo:'A JavaScript framework is used specifically for creating web interfaces.',
    info: "Bir JavaScript framework'ü, özellikle web arayüzleri oluşturmak için kullanılır.",
  },
  {
    name: "Angular",
    imgUrl:
      "https://www.mobilhanem.com/wp-content/uploads/2019/01/angular-1024x410.png",
    key: "@angular/core",
    enInfo:'A JavaScript framework developed by Google is used particularly for creating large and complex applications.',
    info: "Google tarafından geliştirilen bir JavaScript framework'ü, özellikle büyük ve karmaşık uygulamalar oluşturmak için kullanılır.",
  },
  {
    name: "Bootstrap",
    imgUrl:
      "https://smartstore.com/media/4771/content/Bootstrap_Logo_2000x615.jpg",
    key: "bootstrap",
    enInfo:'"A CSS framework developed by Twitter is used particularly for creating mobile-responsive websites.',
    info: "Twitter tarafından geliştirilen bir CSS framework'ü, özellikle mobil uyumlu web siteleri oluşturmak için kullanılır.",
  },
  {
    name: "material ui",
    imgUrl:
      "https://cdn-media-1.freecodecamp.org/images/1*FDNeKIUeUnf0XdqHmi7nsw.png",
    key: "@material-ui/core",
    enInfo:"A collection of React components based on Google's Material Design concept.",
    info: "Google'ın Material Design konseptine dayalı React bileşenleri koleksiyonu.",
  },
  {
    name: "tailwind css",
    imgUrl: "https://miro.medium.com/max/1400/1*oPL8C-i04sqAUoOS_da9aA.jpeg",
    key: "tailwindcss",
    enInfo:"A CSS utility framework is used to create easily customizable components quickly.",
    info: "CSS utility framework'ü, hızlı bir şekilde özelleştirilebilir bileşenler oluşturmak için kullanılır.",
  },
  {
    name: "next.js",
    imgUrl:
      "https://soshace.com/wp-content/uploads/2019/10/Getting-Started-with-NextJS.jpg",
    key: "next",
    enInfo:"A web framework based on React is used particularly for creating SEO-friendly and fast websites.",
    info: "React tabanlı bir web framework'ü, özellikle SEO dostu ve hızlı web siteleri oluşturmak için kullanılır.",
  },
  {
    name: "gatsby",
    imgUrl:
      "https://images.ctfassets.net/4x6byznv2pet/4OW1X9ex1mImko8G4w4WAK/a16fceab310b718c7f375a760c4e1e16/logo-gatsby-0603eb9dd6bdfec9599dbc7590f891be-347ea.jpg",
    key: "gatsby",
    enInfo:'A web framework based on React is used particularly for creating static websites.',
    info: "React tabanlı bir web framework'ü, özellikle statik web siteleri oluşturmak için kullanılır.",
  },
  {
    name: "jquery",
    imgUrl:
      "https://www.alastyr.com/blog/wp-content/uploads/2021/04/Jquery-nedir.png",
    key: "jquery",
    enInfo:"A JavaScript library used to manipulate elements in an HTML document and create interactive components.",
    info: "HTML belgesindeki elementleri manipüle etmek ve etkileşimli öğeler oluşturmak için kullanılan bir JavaScript kütüphanesi.",
  },
  {
    name: "lodash",
    imgUrl: "https://miro.medium.com/max/800/1*3NrSA_osjPYn2rKVvjIGCw.png",
    key: "lodash",
    enInfo:"A JavaScript library that simplifies operations on arrays, strings, objects, etc.",
    info: "JavaScript kütüphanesi, dizi, string, nesne vb. işlemleri yapmayı kolaylaştırır.",
  },
  {
    name: "redux",
    imgUrl: "https://miro.medium.com/max/1200/1*Uov-TfA20xfGqeIZyLWfnA.png",
    key: "redux",
    enInfo:"A state management library for JavaScript applications.",
    info: "JavaScript uygulamaları için bir state yönetim kütüphanesi.",
  },
  {
    name: "sass",
    imgUrl: "https://miro.medium.com/max/1366/1*HFYKWq92BcXJIdata7d-JQ.png",
    key: "sass",
    enInfo:"A CSS preprocessor that enables creating more readable and manageable CSS code.",
    info: "CSS preprocessor'ü, daha okunaklı ve yönetilebilir CSS kodları oluşturmayı sağlar.",
  },
  {
    name: "styled-components",
    imgUrl:
      "https://i0.wp.com/css-tricks.com/wp-content/uploads/2020/11/styled-components-desert.png?fit=1200%2C600&ssl=1",
    key: "styled-components",
    enInfo:"A CSS-in-JS library that combines the styles of components with content.",
    info: "CSS-in-JS kütüphanesi, bileşenlerin stillerini içerikle birleştirir.",
  },
  {
    name: "webpack",
    imgUrl:
      "https://raw.githubusercontent.com/webpack-contrib/awesome-webpack/master/media/awesome_webpack_branding.png",
    key: "webpack",
    enInfo:"A tool used to combine, compress, and manage JavaScript files.",
    info: "JavaScript dosyalarını birleştirmek, sıkıştırmak ve yönetmek için kullanılan bir araç.",
  },
  {
    name: "babel",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY2oc6xY3RNnUPbyEPDCwgVn2Phq2qhl1gJ0Wd610tzqlVPtsUoYVWbi1XxoFerXsbg20&usqp=CAU",
    key: "@babel/core",
    enInfo:"A transpiler used to make JavaScript code compatible with older browsers.",
    info: "JavaScript kodunu eski tarayıcılar için uyumlu hale getirmek için kullanılan bir transpiler.",
  },
  {
    name: "eslint",
    imgUrl:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--Z5fyN2Mm--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/q02cuualqoe470nis2my.png",
    key: "eslint",
    enInfo:"A tool used to analyze JavaScript code and find style and error mistakes.",
    info: "JavaScript kodunu analiz ederek stil ve hata hatalarını bulmaya yarayan bir araç.",
  },
  {
    name: "prettier",
    imgUrl:
      "https://lh3.googleusercontent.com/sfHO5MKevLesNw1grlh21j0hgtH5IaMmASI5aVv_-gYyF7dvA96FlS7mdagWM6NDPxfEY2JwkArooEZZPOzXmu01-g=w640-h400-e365-rj-sc0x00ffffff",
    key: "prettier",
    enInfo:"A tool that automatically formats JavaScript code.",
    info: "JavaScript kodunu otomatik olarak biçimlendiren bir araç.",
  },
  {
    name: "axios",
    imgUrl: "https://assets.axios.com/axios_logo_og.png",
    key: "axios",
    enInfo:"A library used to send HTTP requests for JavaScript applications.",
    info: "JavaScript uygulamaları için HTTP istekleri göndermek için kullanılan bir kütüphane.",
  },
  {
    name: "react native",
    imgUrl:
      "https://www.appstud.com/wp-content/uploads/2018/03/React-Native-Titre.png",
    key: "react-native",
    enInfo:"A React-based framework for developing mobile applications.",
    info: "React tabanlı mobil uygulama geliştirme framework'ü.",
  },
  {
    name: "ionic",
    imgUrl: "https://ionic.io/img/ionic-io-og-img.png",
    key: "@ionic/core",
    enInfo:"A mobile application development framework used to create mobile applications using Angular or React.",
    info: "Mobile uygulama geliştirme framework'ü, Angular veya React kullanarak mobil uygulamalar oluşturmak için kullanılır.",
  },
  {
    name: "chart.js",
    imgUrl: "https://miro.medium.com/max/1200/1*eCoqJKb-QnoxWFPsjyqU0g.png",
    key: "chart.js",
    enInfo:"A JavaScript library used for graphics and data visualization.",
    info: "Grafik ve veri görselleştirmesi için kullanılan bir JavaScript kütüphanesi.",
  },
  {
    name: "d3.js",
    imgUrl: "https://www.vectorlogo.zone/logos/d3js/d3js-ar21.png",
    key: "d3",
    enInfo:"A JavaScript library used for graphics and data visualization.",
    info: "Grafik ve veri görselleştirme için kullanılan bir JavaScript kütüphanesi.",
  },
  {
    name: "three.js",
    imgUrl: "https://miro.medium.com/max/724/1*6s_Dkfeldg35ySmAp0tPkQ.png",
    key: "three",
    enInfo:"A JavaScript library used to create 3D graphics using WebGL technology.",
    info: "WebGL teknolojisi kullanarak 3D grafikler oluşturmak için kullanılan bir JavaScript kütüphanesi.",
  },
  {
    name: "socket.io",
    imgUrl:
      "https://ik.imagekit.io/ably/ghost/prod/2021/03/socket-io-logo-1.jpeg?tr=w-1728,q-50",
    key: "socket.io",
    enInfo:'A JavaScript library used to establish real-time communication using WebSocket technology',
    info: "Websocket teknolojisi kullanarak gerçek zamanlı iletişim kurmak için kullanılan bir JavaScript kütüphanesi.",
  },
  {
    name: "express",
    imgUrl: "https://miro.medium.com/max/1400/1*i2fRBk3GsYLeUk_Rh7AzHw.png",
    key: "express",
    enInfo:'',
    info: "Node.js tabanlı bir web uygulama framework'ü.",
  },
  {
    name: "koa",
    imgUrl: "https://miro.medium.com/max/1140/1*_SEhpSaIh7-l1jV-yFgeDQ.jpeg",
    key: "koa",
    enInfo:'A web application framework based on Node.js.',
    info: "Node.js tabanlı bir web uygulama framework'ü.",
  },
  {
    name: "passport",
    imgUrl:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--kyypBiVD--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/9ngdmhfexbyafu2p5cll.png",
    key: "passport",
    enInfo:"A library used for user authentication and authorization in Node.js applications.",
    info: "Node.js uygulamaları için kullanıcı kimlik doğrulama ve yetkilendirme için kullanılan bir kütüphane.",
  },
  {
    name: "firebase",
    imgUrl: "https://firebase.google.com/images/social.png",
    key: "firebase",
    enInfo:'A cloud-based service provided by Google, used especially for mobile and web applications.',
    info: "Google tarafından sağlanan bir bulut tabanlı hizmet, özellikle mobil ve web uygulamaları için kullanılır.",
  },
  {
    name: "aws sdk",
    imgUrl: "https://cdn.mindmajix.com/blog/images/aws-sdk-270420.png",
    key: "aws-sdk",
    enInfo:'A JavaScript library for building user interfaces, especially for creating web interfaces.',
    info: "Amazon Web Services (AWS) için bir JavaScript kütüphanesi, bulut tabanlı uygulamalar oluşturmak için kullanılır.",
  },
  {
    name: "jest",
    imgUrl: "https://miro.medium.com/max/796/1*VxBKV4bcUJ4M7WCuCNmHWw.png",
    key: "jest",
    enInfo:'A test framework for JavaScript applications.',
    info: "JavaScript uygulamaları için test framework'ü.",
  },
  {
    name: "mocha",
    imgUrl: "https://pbs.twimg.com/media/Eh23ihMVoAEGbaf.jpg:large",
    key: "mocha",
    enInfo:'A test framework for JavaScript applications.',
    info: "JavaScript uygulamaları için test framework'ü.",
  },
  {
    name: "chai",
    imgUrl: "https://miro.medium.com/max/1200/0*gV7fEaDKRGwpprdj.png",
    key: "chai",
    enInfo:'A test writing library for JavaScript applications.',
    info: "JavaScript uygulamaları için bir test yazma kütüphanesi.",
  },
  {
    name: "cypress",
    imgUrl: "https://pbs.twimg.com/media/DMqWohuXkAEBD1I.jpg",
    key: "cypress",
    enInfo:'A JavaScript library used for running end-to-end tests.',
    info: "End-to-end testleri çalıştırmak için kullanılan bir JavaScript kütüphanesi.",
  },
  {
    name: "puppeteer",
    imgUrl: "https://miro.medium.com/max/1400/1*9BG6g9a_2wGwAJVs5aAofg.png",
    key: "puppeteer",
    enInfo:'A library used to automate Chromium-based browsers.',
    info: "Chromium tabanlı tarayıcıları otomatikleştirmek için kullanılan bir kütüphane.",
  },
  {
    name: "storybook",
    imgUrl:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--AU4TEK0l--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/9ype7suwe1wjzz4x3idl.png",
    key: "storybook",
    enInfo:'An UI development environment for React components.',
    info: "React bileşenleri için bir UI geliştirme ortamı.",
  },
  {
    name: "figma-api",
    imgUrl:
      "https://i0.wp.com/css-tricks.com/wp-content/uploads/2018/03/figma.jpg?fit=1200%2C600&ssl=1",
    key: "figma-api",
    enInfo:"An API used for interacting with design tools.",
    info: "Tasarım araçlarıyla etkileşim kurmak için kullanılan bir API.",
  },
  {
    name: "google-maps-api",
    imgUrl:
      "https://blog.isimtescil.net/wp-content/uploads/2018/11/google-maps-api.jpg",
    key: "google-maps-api",
    enInfo:"An API used to access Google Maps features.",
    info: "Google Haritalar özelliklerine erişmek için kullanılan bir API.",
  },
  {
    name: "stripe-api",
    imgUrl: "https://miro.medium.com/max/1024/1*m6pXBFDNitef-VSsgbWC2g.png",
    key: "stripe-api",
    enInfo:"An API used for online payment transactions.",
    info: "Online ödeme işlemleri için kullanılan bir API.",
  },
  {
    name: "twilio-api",
    imgUrl: "https://arpost.co/wp-content/uploads/2017/10/twilio-logo-red.png",
    key: "twilio-api",
    enInfo:"A JavaScript API used for SMS, voice, and video communication.",
    info: "SMS, ses ve video iletişimleri için kullanılan bir API.",
  },
  {
    name: "sendgrid-api",
    imgUrl:
      "https://d15tnd3q55f8nl.cloudfront.net/static/SG_Twilio_Lockup_Social-56f3cfd2f6b0c62422980170d57fac64.png",
    key: "sendgrid-api",
    enInfo:"An API used for sending emails.",
    info: "E-posta göndermek için kullanılan bir API.",
  },
  {
    name: "nodemailer",
    imgUrl:
      "https://www.tatvasoft.com/outsourcing/wp-content/uploads/2022/10/Nodemailer.jpg",
    key: "nodemailer",
    enInfo:"A library used to send emails for Node.js applications.",
    info: "Node.js uygulamaları için e-posta göndermek için kullanılan bir kütüphane.",
  },
  {
    name: "moment.js",
    imgUrl:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--klS7tkQa--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/jrsh2skvurtyik8kb0e0.png",
    key: "moment.js",
    enInfo:"A JavaScript library used to work with dates and times.",
    info: "JavaScript'te tarih ve saatlerle çalışmak için kullanılan bir kütüphane.",
  },
  {
    name: "react-router",
    imgUrl: "https://reactrouter.com/ogimage.png",
    key: "react-router",
    enInfo:"A library used for routing in React applications.",
    info: "React uygulamalarında yönlendirme yapmak için kullanılan bir kütüphane.",
  },
  {
    name: "formik",
    imgUrl: "https://miro.medium.com/max/1400/1*z9lOCDcy6KcBY_7qam436g.png",
    key: "formik",
    enInfo:"A library used for handling form operations in React applications.",
    info: "React uygulamalarında form işlemleri yapmak için kullanılan bir kütüphane.",
  },
  {
    name: "yup",
    imgUrl: "https://miro.medium.com/max/1200/1*4Apu-JRlee0VEJbQDplgPg.png",
    key: "yup",
    enInfo:"A JavaScript library used for data validation in JavaScript applications.",
    info: "JavaScript uygulamalarında veri doğrulama işlemleri yapmak için kullanılan bir kütüphane.",
  },
  {
    name: "Grommet",
    imgUrl:
      "https://repository-images.githubusercontent.com/32787174/df991780-daec-11e9-8b9c-d5bcdc59fbad",
    key: "grommet",
    enInfo:"A UI component library based on React.",
    info: "React tabanlı bir UI bileşenleri kütüphanesi.",
  },
];

export { packages };

let containerNode = document.querySelector(".items-container");

//Print to html all items in obj
packages.forEach((item) => {
  
  let html = `
            <div class="items">
                <div class="select-section">
                 <div class="items-img">
                      <img src=${item.imgUrl} class="img"/>
                  </div>
                </div>
                <div class="items-button-container">
                    <div class="items-title">${item.name}</div>
                    <img src="info2.svg" class="items-info-button"/>
                </div>
            </div>
  `;
  containerNode.innerHTML = containerNode.innerHTML + html;
});
