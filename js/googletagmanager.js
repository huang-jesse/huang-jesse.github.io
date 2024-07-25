// GA4
// add js to head
const ga_token = 'G-S05CZE167X'
let script = document.createElement('script');
script.src = "https://www.googletagmanager.com/gtag/js?id=" + ga_token;
script.async = true;
document.head.append(script);

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', ga_token);