// GA4
const ga_token = 'G-S05CZE167X'
let script = document.createElement('script');
script.src = "https://www.googletagmanager.com/gtag/js?id=" + ga_token;
document.body.append(script);
script.async = true;
// script(async='', src='https://www.googletagmanager.com/gtag/js?id=' + ga_token)
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', ga_token);