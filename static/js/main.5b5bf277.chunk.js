(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,a,t){},25:function(e,a,t){e.exports=t.p+"static/media/salon.6db37e50.png"},26:function(e,a,t){e.exports=t.p+"static/media/glynt.f7cf2132.png"},30:function(e,a,t){e.exports=t(45)},45:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(17),r=t.n(c),i=t(3),s=t(4),o=t(6),m=t(5),u=t(7),p=t(48),E=t(47),f=(t(12),function(e){return l.a.createElement("button",{onClick:e.handleClick,className:e.active?"btn active":"btn"},l.a.createElement("span",{className:"top bar"}),l.a.createElement("span",{className:"mid bar"}),l.a.createElement("span",{className:"bot bar"}))}),d=t(16),h=function(e){return l.a.createElement("nav",{className:e.active?"active":""},l.a.createElement("section",{className:"navList"},l.a.createElement(d.b,{onClick:e.handleClick,to:"/"},l.a.createElement("span",null,"Start"),l.a.createElement("span",null,"00")),l.a.createElement(d.b,{onClick:e.handleClick,to:"/offer"},l.a.createElement("span",null,"O mnie"),l.a.createElement("span",null,"01")),l.a.createElement(d.b,{to:"/"},l.a.createElement("span",null,"Um\xf3w si\u0119!"),l.a.createElement("span",null,"02"))))},y=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).state={active:!1},t.handleClick=function(){t.setState({active:!t.state.active})},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(h,{active:this.state.active,handleClick:this.handleClick}),l.a.createElement(f,{active:this.state.active,handleClick:this.handleClick}))}}]),a}(l.a.Component),w=t(25),b=t.n(w),v=function(){return l.a.createElement("section",{className:"home"},l.a.createElement("img",{src:b.a,alt:""}))},k=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).handleScroll=function(){window.scrollY>t.title.current.offsetTop+2*t.title.current.offsetHeight-window.innerHeight?t.title.current.classList.add("active"):t.title.current.classList.remove("active")},t.title=l.a.createRef(),t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){return l.a.createElement("main",{className:"offer"},l.a.createElement("h1",{ref:this.title,className:"title"},l.a.createElement("span",{className:"firstLetter"},"N"),"asza oferta"),l.a.createElement("section",{className:"priceList"},l.a.createElement("div",{className:"service"},l.a.createElement("h2",null,"Us\u0142uga"),l.a.createElement("p",null,"Strzy\u017cenie m\u0119skie"),l.a.createElement("p",null,"Strzy\u017cenie damskie"),l.a.createElement("p",null,"Strzy\u017cenie grzywki"),l.a.createElement("p",null,"Strzy\u017cenie Split-Ender"),l.a.createElement("p",null,"Modelowanie"),l.a.createElement("p",null,"Koloryzacja"),l.a.createElement("p",null,"Koloryzacja + strzy\u017cenie"),l.a.createElement("p",null,"Koloryzacja + strzy\u017cenie + modelowanie"),l.a.createElement("p",null,"Zabieg odm\u0142adziania w\u0142os\xf3w TRI JUVEN + step 3"),l.a.createElement("p",null,"Zabieg TURBO nawil\u017cania"),l.a.createElement("p",null,"Zabieg POPCORN"),l.a.createElement("p",null,"Prostowanie piel\u0119gnacyjne"),l.a.createElement("p",null,"Baleyage"),l.a.createElement("p",null,"Baleyage + strzy\u017cenie"),l.a.createElement("p",null,"Dekoloryzacja"),l.a.createElement("p",null,"Dekoloryzacja + koloryzacja"),l.a.createElement("p",null,"Pasemka"),l.a.createElement("p",null,"Pasemka + strzy\u017cenie"),l.a.createElement("p",null,"Pasemka + strzy\u017cenie + modelowanie"),l.a.createElement("p",null,"Sombre/Ombre"),l.a.createElement("p",null,"Sombre/Ombre + strzy\u017cenie"),l.a.createElement("p",null,"Refleksy"),l.a.createElement("p",null,"Refleksy + farba"),l.a.createElement("p",null,"Refleksy + farba + strzy\u017cenie"),l.a.createElement("p",null,"Upi\u0119cie okoliczno\u015bciowe"),l.a.createElement("p",null,"Upi\u0119cie \u015blubne"),l.a.createElement("p",null,"Upi\u0119cie pr\xf3bne")),l.a.createElement("div",{className:"price"},l.a.createElement("h2",null,"Cena"),l.a.createElement("p",null,"120-300z\u0142"),l.a.createElement("p",null,"120-300z\u0142"))))}}]),a}(l.a.Component),j=t(8),z=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).handleScroll=function(){var e=Object(j.a)(Object(j.a)(t)),a=e.footer,n=e.aside,l=e.aside2,c=e.title,r=e.title2,i=e.title3,s=window.scrollY;[n,l,c,r,i].forEach(function(e){s-a.current.offsetTop>e.current.offsetTop-window.innerHeight+e.current.offsetHeight?e.current.classList.add("active"):e.current.classList.remove("active")})},t.footer=l.a.createRef(),t.aside=l.a.createRef(),t.aside2=l.a.createRef(),t.title=l.a.createRef(),t.title2=l.a.createRef(),t.title3=l.a.createRef(),t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){console.log("xD"),window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){var e=this.footer,a=this.aside,t=this.aside2,n=this.title,c=this.title2,r=this.title3;return l.a.createElement("footer",{ref:e},l.a.createElement("aside",{ref:a,className:"media"},l.a.createElement("i",{className:"fab fa-instagram"})),l.a.createElement("aside",{ref:t,className:"media"},l.a.createElement("i",{className:"fab fa-facebook-f"})),l.a.createElement("section",{className:"visit"},l.a.createElement("h3",{ref:n,className:"title"},l.a.createElement("span",{className:"firstLetter"},"U"),"m\xf3w wizyt\u0119"),l.a.createElement("p",{className:"content"},"Je\u015bli Twoje w\u0142osy wymagaj\u0105 szczeg\xf3lnej opieki, s\u0105 zniszczone s\u0142o\u0144cem lub nieudanym zabiegiem kosmetycznym, je\u015bli wybierasz si\u0119 na uroczysto\u015b\u0107, kt\xf3ra wymaga pieknej stylizacji lub po prostu chcesz od\u015bwie\u017cy\u0107 fryzur\u0119 - zadzwo\u0144 do nas! Postaramy si\u0119 um\xf3wi\u0107 wizyt\u0119 w najbardziej dogodnym terminie. Aby um\xf3wi\u0107 wizyt\u0119 ",l.a.createElement("a",{href:"/start"},"Kliknij tutaj!")),l.a.createElement("section",{className:"contact"},l.a.createElement("h3",{className:"title"},l.a.createElement("span",{className:"firstLetter"},"L"),"ub skontaktuj si\u0119 poprzez:"),l.a.createElement("p",null,l.a.createElement("i",{className:"fas fa-phone-volume"}),"493 534 623"),l.a.createElement("p",null,l.a.createElement("i",{className:"far fa-envelope"}),"beatapatejuk@wp.pl"))),l.a.createElement("section",{className:"hours"},l.a.createElement("h3",{ref:c,className:"title"},l.a.createElement("span",{className:"firstLetter"},"G"),"odziny otwarcia"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("span",null,"Poniedzia\u0142ek:")," 09:00-17:00"),l.a.createElement("li",null,l.a.createElement("span",null,"Wtorek:")," 09:00-17:00"),l.a.createElement("li",null,l.a.createElement("span",null,"\u015aroda:")," Nieczynne"),l.a.createElement("li",null,l.a.createElement("span",null,"Czwartek:")," 10:00-18:00"),l.a.createElement("li",null,l.a.createElement("span",null,"Pi\u0105tek:")," 10:00-18:00"),l.a.createElement("li",null,l.a.createElement("span",null,"Sobota:")," 08:00-14:00"),l.a.createElement("li",null,l.a.createElement("span",null,"Niedziela:")," Nieczynne"))),l.a.createElement("section",{className:"place"},l.a.createElement("h3",{ref:r,className:"title"},l.a.createElement("span",{className:"firstLetter"},"J"),"ak dojecha\u0107?"),l.a.createElement("iframe",{"jsx-ally":"map",title:"map",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2454.8326413037253!2d23.143715015789184!3d52.02814647972414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472190d84182a933%3A0xceda46e5f60ef5a8!2sPracownia+Fryzjerska+Beata+Patejuk!5e0!3m2!1spl!2spl!4v1556474525223!5m2!1spl!2spl",allowFullScreen:!0})))}}]),a}(l.a.Component),N=t(26),g=t.n(N),O=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).state={},t.handleScroll=function(){var e=Object(j.a)(Object(j.a)(t)).item;window.scrollY>e.current.offsetTop-window.innerHeight+e.current.offsetHeight/2?e.current.classList.add("active"):e.current.classList.remove("active")},t.item=l.a.createRef(),t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){return l.a.createElement("section",{className:"partnership"},l.a.createElement("h2",null,"Pracujemy na najlepszej jako\u015bci kosmetykach marki ",l.a.createElement("span",null,l.a.createElement("span",{className:"firstLetter"},"G"),"lynt")),l.a.createElement("img",{ref:this.item,src:g.a,alt:""}),l.a.createElement("p",null,"Kosmetyki firmy ",l.a.createElement("span",null,"Glynt")," s\u0105 w 100% oparte na wega\u0144skich sk\u0142adnikach!"))}}]),a}(l.a.Component),L=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).state={},t.scrollTop=function(){window.scrollTo(0,0)},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){setTimeout(this.scrollTop,500)}},{key:"render",value:function(){return l.a.createElement("section",{className:"startPage"},l.a.createElement(v,null),l.a.createElement(k,null),l.a.createElement(O,null),l.a.createElement(z,null))}}]),a}(l.a.Component),C=t(13),S=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement(d.a,{basename:"/strona-salonu"},l.a.createElement(y,null),l.a.createElement(C.a,{render:function(e){var a=e.location;return l.a.createElement(l.a.Fragment,null,l.a.createElement(p.a,null,l.a.createElement(E.a,{key:a.key,classNames:"fade",timeout:1500},l.a.createElement(C.c,{location:a},l.a.createElement(C.a,{path:"/",exact:!0,component:L}),l.a.createElement(C.a,{path:"/offer",exact:!0,component:L})))))}}))}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,1,2]]]);
//# sourceMappingURL=main.5b5bf277.chunk.js.map