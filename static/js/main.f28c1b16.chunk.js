(window.webpackJsonpluxus=window.webpackJsonpluxus||[]).push([[0],{10:function(e,a,t){e.exports=t(15)},15:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(7),s=t.n(l),i=t(1),r=t(2),m=t(4),o=t(3),u=t(5),d=t(8),N=t.n(d),E=function(e){function a(){return Object(i.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(r.a)(a,[{key:"showMobileNav",value:function(){N()(".mainList").toggleClass("showMenu")}},{key:"render",value:function(){return c.a.createElement("div",{className:"mainNavigation"},c.a.createElement("div",{className:"mainNavLogo"}),c.a.createElement("ul",{className:"mainList"},c.a.createElement("li",{className:"mainList-name mainList__active"},"Gama modeli"),c.a.createElement("li",{className:"mainList-name"},"Oferty"),c.a.createElement("li",{className:"mainList-name"},"Odkryj Lexusa"),c.a.createElement("li",{className:"mainList-name"},"Uzywane"),c.a.createElement("li",{className:"mainList-name"},"Posiadanie Lexusa")),c.a.createElement("div",{className:"mainNavUser"},c.a.createElement("div",{className:"mainNavUser__icon"},c.a.createElement("i",{className:"far fa-user"})),c.a.createElement("div",{className:"mainNavUser__icon"},c.a.createElement("i",{className:"fas fa-search"})),c.a.createElement("div",{className:"mainNavUser__icon mainNavUser__icon-mobile "},c.a.createElement("i",{id:"phoneNav",className:"fas fa-bars",onClick:this.showMobileNav}))))}}]),a}(c.a.Component),b=function(e){function a(){return Object(i.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"blackNavigation"},c.a.createElement("ul",{className:"blackList"},c.a.createElement("li",{className:"blackList-item"},c.a.createElement("div",{className:"blackList-icon"},c.a.createElement("i",{className:"fas fa-car "})),c.a.createElement("div",{className:"blackList-text"},"Skonfiguruj sw\xf3j samoch\xf3d")),c.a.createElement("li",{className:"blackList-item"},c.a.createElement("div",{className:"blackList-icon"},c.a.createElement("i",{className:"fas fa-list-ul"})),c.a.createElement("div",{className:"blackList-text"},"Szybki dostep")),c.a.createElement("li",{className:"blackList-item"},c.a.createElement("div",{className:"blackList-icon"},"            ",c.a.createElement("i",{className:"fas fa-map-marked-alt"})),c.a.createElement("div",{className:"blackList-text"},"M\xf3j diler lexusa")),c.a.createElement("li",{className:"blackList-item"},c.a.createElement("div",{className:"blackList-icon"},c.a.createElement("i",{className:"fas fa-car"})),c.a.createElement("div",{className:"blackList-text"},"Moje por\xf3wnania samochod\xf3w")),c.a.createElement("li",{className:"blackList-item"},c.a.createElement("div",{className:"blackList-icon"},c.a.createElement("i",{className:"far fa-envelope"})),c.a.createElement("div",{className:"blackList-text"},"Kontakt ")),c.a.createElement("li",{className:"blackList-item"},c.a.createElement("div",{className:"blackList-icon"},c.a.createElement("i",{className:"far fa-credit-card"})),c.a.createElement("div",{className:"blackList-text"},"Finansowanie"))))}}]),a}(c.a.Component),p=function(e){function a(){return Object(i.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"smallTopNav"},c.a.createElement("ul",{className:"smallList"},c.a.createElement("li",{className:"smallList-name smallList__active"},"Cennik"),c.a.createElement("li",{className:"smallList-name"},"Finansowanie"),c.a.createElement("li",{className:"smallList-name"},"Jazda testowa"),c.a.createElement("li",{className:"smallList-name"},"Znajdz dilera")))}}]),a}(c.a.Component),v=function(e){function a(){return Object(i.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement("nav",{className:"navigation grid"},c.a.createElement(E,null),c.a.createElement(b,null),c.a.createElement(p,null))}}]),a}(c.a.Component),f=function(e){function a(){return Object(i.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){var e=this.props.modeldata;return c.a.createElement("div",{className:"carCard"},c.a.createElement("div",{className:"carCard__header"},c.a.createElement("div",{className:"carCard__header-name"},e.name),c.a.createElement("div",{className:"carCard__header-price"}," OD: ",e.price," zl ")),c.a.createElement("div",{className:"carCard__headerSmall"}," ",e.smallHeader),c.a.createElement("div",{className:"carCard__headerSmall"}," Juz od ",e.leasingPrice," zl netto/misiac  w leasingu smartplan"),c.a.createElement("img",{className:"carCard__picture",src:e.picture,alt:"picture name"}),c.a.createElement("div",{className:"carCard__headerEngine"},e.engine," "))}}]),a}(c.a.Component),y=t(9),g=t.n(y),k=function(){var e=g.a.modelsCar.map(function(e){return c.a.createElement(f,{modeldata:e,key:e.name})});return c.a.createElement("section",{className:"carModels"},e)},j=function(){return c.a.createElement("footer",{className:"footer"}," footer")};var L=function(){return c.a.createElement("div",{className:"app grid"},c.a.createElement(v,null),c.a.createElement(k,null),c.a.createElement(j,null))};s.a.render(c.a.createElement(L,null),document.querySelector("#root"))},9:function(e,a){a.modelsCar=[{name:"CT",price:"109 900,00",smallHeader:"luksusowy kompakt",leasingPrice:"1235",picture:"/img/cars/CT.jpg",engine:"Hybrydowy 136 KM"},{name:"ES",price:"214 900,00",smallHeader:"elegancja w biznesie",leasingPrice:"2379",picture:"/img/cars/ES.jpg",engine:"Benzynowy 171 KM lub hybrydowy 184 KM"},{name:"LC",price:"537 000,00",smallHeader:"nowy symbol awangardy",leasingPrice:"5370",picture:"/img/cars/LC.jpg",engine:"Benzynowy 464 KM lub hybrydowy 359 KM"},{name:"LS",price:"490 000,00",smallHeader:"wrcydzielo absolutne",leasingPrice:"4900",picture:"/img/cars/LS.jpg",engine:"Benzynowy 417 KM lub hybryfowy 359 KM"},{name:"NX",price:"169 900,00",smallHeader:"miejski suv",leasingPrice:"1390",picture:"/img/cars/NX.jpg",engine:"Benzynowy 357 KM"},{name:"RC",price:"208 640,00",smallHeader:"dynamika elegancja",leasingPrice:"2087",picture:"/img/cars/RC.jpg",engine:"Hybrydowy 223KM"}]}},[[10,1,2]]]);
//# sourceMappingURL=main.f28c1b16.chunk.js.map