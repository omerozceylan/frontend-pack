import './style.css'

let itemArray = []
let theCode = ""

const packages = [
      {
        name:"React",
        key: 'react',
        info: 'Facebook tarafından geliştirilen bir JavaScript kütüphanesi, özellikle web arayüzleri oluşturmak için kullanılır.',
        isClicked:false 
      },
      { name:"Vue.js",
        key: 'vue',
        info: 'Bir JavaScript framework\'ü, özellikle web arayüzleri oluşturmak için kullanılır.',
        isClicked:false 

      },
      {
        name:"Angular",
        key: '@angular/core',
        info: 'Google tarafından geliştirilen bir JavaScript framework\'ü, özellikle büyük ve karmaşık uygulamalar oluşturmak için kullanılır.',
        isClicked:false 
      },
      { name: "Bootstrap",
        key: 'bootstrap',
        info: 'Twitter tarafından geliştirilen bir CSS framework\'ü, özellikle mobil uyumlu web siteleri oluşturmak için kullanılır.',
        isClicked:false 
      },
      {
        name:"material ui",
        key: '@material-ui/core',
        info: 'Google\'ın Material Design konseptine dayalı React bileşenleri koleksiyonu.',
        isClicked:false 
      },
      {
        name:"tailwind css",
        key: 'tailwindcss',
        info: 'CSS utility framework\'ü, hızlı bir şekilde özelleştirilebilir bileşenler oluşturmak için kullanılır.',
        isClicked:false 
      },
      {
        name:"next.js",
        key: 'next',
        info: 'React tabanlı bir web framework\'ü, özellikle SEO dostu ve hızlı web siteleri oluşturmak için kullanılır.',
        isClicked:false 
      },
      {
        name:"gatsby",
        key: 'gatsby',
        info: 'React tabanlı bir web framework\'ü, özellikle statik web siteleri oluşturmak için kullanılır.',
        isClicked:false 
      },
      {
        name:"jquery",
        key: 'jquery',
        info: 'HTML belgesindeki elementleri manipüle etmek ve etkileşimli öğeler oluşturmak için kullanılan bir JavaScript kütüphanesi.',
        isClicked:false 
      },
      {
        name: "lodash",
        key: 'lodash',
        info: 'JavaScript kütüphanesi, dizi, string, nesne vb. işlemleri yapmayı kolaylaştırır.',
        isClicked:false 
      },
      { 
        name:'redux',
        key: 'redux',
        info: 'JavaScript uygulamaları için bir state yönetim kütüphanesi.',
        isClicked:false 
      },
      {
        name: 'sass',
        key: 'sass',
        info: 'CSS preprocessor\'ü, daha okunaklı ve yönetilebilir CSS kodları oluşturmayı sağlar.',
        isClicked:false 
      },
      {
        name:'styled-components',
        key: 'styled-components',
        info: 'CSS-in-JS kütüphanesi, bileşenlerin stillerini içerikle birleştirir.',
        isClicked:false 
      },
      {
        name:'webpack',
        key: 'webpack',
        info: 'JavaScript dosyalarını birleştirmek, sıkıştırmak ve yönetmek için kullanılan bir araç.',
        isClicked:false 
      },
      {
        name: 'babel',
        key: '@babel/core',
        info: 'JavaScript kodunu eski tarayıcılar için uyumlu hale getirmek için kullanılan bir transpiler.',
        isClicked:false 
      },
      {
        name:'eslint',
        key: "eslint",
        info: "JavaScript kodunu analiz ederek stil ve hata hatalarını bulmaya yarayan bir araç.",
        isClicked:false 
      },
      {
        name: 'prettier',
        key: "prettier",
        info: "JavaScript kodunu otomatik olarak biçimlendiren bir araç.",
        isClicked:false 
      },
      {
        name: 'axios',
        key: "axios",
        info: "JavaScript uygulamaları için HTTP istekleri göndermek için kullanılan bir kütüphane.",
        isClicked:false 
      },
      {
        name:'react native',   
        key: "react-native",
        info: "React tabanlı mobil uygulama geliştirme framework'ü.",
        isClicked:false 
      },
      {
        name:'ionic',  
        key: "@ionic/core",
        info: "Mobile uygulama geliştirme framework'ü, Angular veya React kullanarak mobil uygulamalar oluşturmak için kullanılır.",
        isClicked:false 
      },
      {
        name:'chart.js',  
        key: "chart.js",
        info: "Grafik ve veri görselleştirmesi için kullanılan bir JavaScript kütüphanesi.",
        isClicked:false 
      },
      {
        name:'d3.js',  
        key: "d3",
        info: "Grafik ve veri görselleştirme için kullanılan bir JavaScript kütüphanesi.",
        isClicked:false 
      },
      {
        name:'three.js',  
        key: "three",
        info: "WebGL teknolojisi kullanarak 3D grafikler oluşturmak için kullanılan bir JavaScript kütüphanesi.",
        isClicked:false 
      },
      {
        name:'phaser',  
        key: "phaser",
        info: "JavaScript tabanlı bir oyun geliştirme framework'ü.",
        isClicked:false 
      },
      {
        name:'socket.io',  
        key: "socket.io",
        info: "Websocket teknolojisi kullanarak gerçek zamanlı iletişim kurmak için kullanılan bir JavaScript kütüphanesi.",
        isClicked:false 
      },
      {
        name:'express',
        key: "express",
        info: "Node.js tabanlı bir web uygulama framework'ü.",
        isClicked:false 
      },
      {
        name:'koa',
        key: "koa",
        info: "Node.js tabanlı bir web uygulama framework'ü.",
        isClicked:false 
      },{
        name:'passport',
        key: "passport",
        info: "Node.js uygulamaları için kullanıcı kimlik doğrulama ve yetkilendirme için kullanılan bir kütüphane.",
        isClicked:false 
      },
      {
        name:'firebase',
        key: "firebase",
        info: "Google tarafından sağlanan bir bulut tabanlı hizmet, özellikle mobil ve web uygulamaları için kullanılır.",
        isClicked:false 
      },
      {
        name:'aws sdk',
        key: "aws-sdk",
        info: "Amazon Web Services (AWS) için bir JavaScript kütüphanesi, bulut tabanlı uygulamalar oluşturmak için kullanılır.",
        isClicked:false 
      },
      {
        name:'jest',
        key: "jest",
        info: "JavaScript uygulamaları için test framework'ü.",
        isClicked:false 
      },{
        name:'mocha',
        key: "mocha",
        info: "JavaScript uygulamaları için test framework'ü.",
        isClicked:false 
      },
      {
        name:'chai',
        key: "chai",
        info: "JavaScript uygulamaları için bir test yazma kütüphanesi.",
        isClicked:false 
      },
      {
        name:'cypress',
        key: "cypress",
        info: "End-to-end testleri çalıştırmak için kullanılan bir JavaScript kütüphanesi.",
        isClicked:false 
      },
      {
        name:'puppeteer',
        key: "puppeteer",
        info: "Chromium tabanlı tarayıcıları otomatikleştirmek için kullanılan bir kütüphane.",
        isClicked:false 
      },
      {
        name:'storybook',
        key: "storybook",
        info: "React bileşenleri için bir UI geliştirme ortamı.",
        isClicked:false 
      },
      {
        name:'figma-api',
        key: "figma-api",
        info: "Tasarım araçlarıyla etkileşim kurmak için kullanılan bir API.",
        isClicked:false 
      },
      {
        name:'google-maps-api',
        key: "google-maps-api",
        info: "Google Haritalar özelliklerine erişmek için kullanılan bir API.",
        isClicked:false 
      },
      {
        name:'stripe-api',
        key: "stripe-api",
        info: "Online ödeme işlemleri için kullanılan bir API.",
        isClicked:false 
      },
      {
        name:'twilio-api',
        key: "twilio-api",
        info: "SMS, ses ve video iletişimleri için kullanılan bir API.",
        isClicked:false 
      },
      {
        name:'sendgrid-api',
        key: "sendgrid-api",
        info: "E-posta göndermek için kullanılan bir API.",
        isClicked:false 
      },
      {
        name:'nodemailer',
        key: "nodemailer",
        info: "Node.js uygulamaları için e-posta göndermek için kullanılan bir kütüphane.",
        isClicked:false 
      },
      {
        name:'moment.js',
        key: "moment.js",
        info: "JavaScript'te tarih ve saatlerle çalışmak için kullanılan bir kütüphane.",
        isClicked:false 
      },
      {
        name:'react-router',
        key: "react-router",
        info: "React uygulamalarında yönlendirme yapmak için kullanılan bir kütüphane.",
        isClicked:false 
      },
      {
        name:'reach-router',
        key: "reach-router",
        info: "React uygulamalarında erişilebilir yönlendirme yapmak için kullanılan bir kütüphane.",
        isClicked:false 
      },
      {
        name:'formik',
        key: "formik",
        info: "React uygulamalarında form işlemleri yapmak için kullanılan bir kütüphane.",
        isClicked:false 
      }, 
      {
        name:'yup',
        key: "yup",
        info: "JavaScript uygulamalarında veri doğrulama işlemleri yapmak için kullanılan bir kütüphane.",
        isClicked:false 
      },
      {
        name:"Grommet",
        key: "grommet",
        info: "React tabanlı bir UI bileşenleri kütüphanesi.",
        isClicked:false 
     }
    
    
    ]




let containerNode = document.querySelector('.items-container')


//Print to htm all items in obj


const items = document.querySelectorAll('.items')

items.forEach(element => {
    element.addEventListener('click', returnEqual)
    element.addEventListener('dblclick',returnEqualForDeleting)
})

function returnEqual(){
    const clickedElement = this.innerHTML
    const objReturn = itemsObj[clickedElement]
    createNpmCode(objReturn)
}

function returnEqualForDeleting(){
    const clickedElement = this.innerHTML
    const objReturn = itemsObj[clickedElement]
    deleteItemInNpmCode(objReturn)
}


function createNpmCode(value){
    if(itemArray.includes(value)) return
    itemArray.push(value)
    console.log(itemArray)
    updateTheCodeAndArray()
}

function deleteItemInNpmCode(value){
    if(!itemArray.includes(value)) return
    console.log(itemArray.indexOf(value))
    const i = itemArray.indexOf(value)
    itemArray.splice(i,1)
    updateTheCodeAndArray()
}

function updateTheCodeAndArray(){
    //theCode value reset everytime. That's because it have to be not reprinting every time
    theCode= ""
    for(let i=0; i<itemArray.length;i++){
        theCode+= ` ${itemArray[i]}`
    }
    let theNpmOut = `{theCode}`
    console.log('npm code: ' + theNpmOut)
}

