(function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{enumerable:!0,get:d})},b.r=function(a){'undefined'!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:'Module'}),Object.defineProperty(a,'__esModule',{value:!0})},b.t=function(a,c){if(1&c&&(a=b(a)),8&c)return a;if(4&c&&'object'==typeof a&&a&&a.__esModule)return a;var d=Object.create(null);if(b.r(d),Object.defineProperty(d,'default',{enumerable:!0,value:a}),2&c&&'string'!=typeof a)for(var e in a)b.d(d,e,function(b){return a[b]}.bind(null,e));return d},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='',b(b.s=0)})([function(a,b,c){'use strict';function d(a,b){let c=2<arguments.length&&arguments[2]!==void 0?arguments[2]:0;const d=document.querySelector('header').offsetHeight,e={top:window.pageYOffset+d+a.getBoundingClientRect().top+c,bottom:window.pageYOffset+a.getBoundingClientRect().bottom};return e.bottom>=b.top&&e.top<=b.bottom}function e(a,b){let c=2<arguments.length&&arguments[2]!==void 0?arguments[2]:0;const d=document.querySelector('header').offsetHeight,e={top:window.pageYOffset+d+a.getBoundingClientRect().top+c,bottom:window.pageYOffset+a.getBoundingClientRect().bottom};return e.bottom<=b.bottom}function f(a,b,c){d(a,b,c)?a.classList.add('visible'):a.classList.remove('visible')}function g(a,b){const c=document.querySelector('.videoRoundSection');if(c.classList.contains('visible')){let d=100*(a.bottom-c.offsetTop-b)/c.offsetHeight;document.documentElement.style.setProperty('--mask-radius',''.concat(d,'%'))}}function h(){const a=document.querySelector('.roadSection'),b=a.querySelectorAll('.road__item--reverse'),c=b.length,d=b[0].offsetHeight,e=document.querySelector('header').offsetHeight,f=a.getBoundingClientRect().top-e;let g=0;0>=f&&-2*f<d*(c+1)?g=-2*f:-2*f>=d*(c+1)&&(g=d*(c+1)),a.classList.contains('visible')&&b.forEach((a)=>{a.style.transform='translateY('.concat(g,'px)')})}function i(a,b,c){const d=a.querySelector('video');e(b,c)?(d.pause(),d.style.visibility='hidden',a.style.pointerEvents='none'):(d.play(),d.style.visibility='',a.style.pointerEvents='')}function j(a){const b='copied-text';a.preventDefault();const c=a.currentTarget,d=document.querySelector('[data-copy="'.concat(c.dataset.goal,'"]'));if(d){let a=document.querySelector('#'.concat(b));a?a.value=d.innerHTML:document.body.insertAdjacentHTML('beforeend','<textarea id="'.concat(b,'" style="position: fixed; opacity: 0; pointer-events: none">').concat(d.innerHTML,'</textarea>')),a=document.querySelector('#'.concat(b)),a.select(),document.execCommand('copy'),c.classList.add('active'),setTimeout(()=>{c.classList.remove('active')},3e3)}}c(1);c(3),c(8),c(10),c(12),document.addEventListener('DOMContentLoaded',function(){let a=.01*window.innerHeight;document.documentElement.style.setProperty('--vh',''.concat(a,'px'));let b={top:window.pageYOffset,bottom:window.pageYOffset+document.documentElement.clientHeight};const c=document.querySelector('header').offsetHeight,d=150,e=document.querySelector('.videoSection'),k=e.querySelector('video'),l=document.querySelector('.videoRoundSection'),m=document.querySelector('.roadSection'),n=document.querySelector('.playlistSection');992<window.innerWidth&&(window.pageYOffset<=.5*window.innerHeight&&setTimeout(()=>{document.querySelector('.topSection__content').classList.add('animate')},100),f(l,b,d),f(m,b),f(n,b),g(b,d),h(b),i(e,l,b),i(l,m,b)),window.addEventListener('scroll',function(){992<window.innerWidth&&(b={top:window.pageYOffset,bottom:window.pageYOffset+document.documentElement.clientHeight},f(l,b,d),f(m,b),f(n,b),g(b,d),h(b),i(e,l,b),i(l,m,b))});const o=document.querySelectorAll('.j-copy');0<o.length&&o.forEach((a)=>{a.addEventListener('click',j)}),document.addEventListener('click',(a)=>{let b=a.target;if(b.classList.contains('j-slow')){a.preventDefault();let d=document.querySelector(b.getAttribute('href'));const e=d.getBoundingClientRect().top;window.scrollBy({top:e-c,behavior:'smooth'})}})})},function(a,b,c){'use strict';Object.defineProperty(b,'__esModule',{value:!0}),b.hidePreloader=function(){document.querySelector('.preloader').classList.add('hiding'),setTimeout(()=>{document.querySelector('.preloader').classList.remove('hiding'),document.querySelector('.preloader').classList.remove('active'),document.body.classList.remove('locked')},250)},b.showPreloader=function(){document.body.classList.add('locked'),document.querySelector('.preloader').classList.add('active')},c(2)},function(){},function(a,b,c){'use strict';c(4),c(5),c(6),c(7)},function(){},function(){},function(){},function(){},function(a,b,c){'use strict';function d(a){const b=window.innerWidth,c=window.innerHeight,d=a.scrollWidth;return d-b+c+b/3}function e(){document.querySelector('.h-scroll').style.height=''.concat(d(document.querySelector('.h-scroll__body')),'px')}c(9),document.addEventListener('DOMContentLoaded',()=>{function a(){c.style.transform='translateX(-'.concat(f.offsetTop,'px)')}const b=document.querySelector('.h-scroll'),c=document.querySelector('.h-scroll__body'),f=document.querySelector('.h-scroll__container');let g=window.innerWidth;991<g&&setTimeout(()=>{e()},100),window.addEventListener('scroll',a),window.addEventListener('resize',()=>{let e=window.innerWidth;991>=g&&991<e?(b.style.height=''.concat(d(c),'px'),window.addEventListener('scroll',a)):991<g&&991>=e&&(window.removeEventListener('scroll',a),b.style.height=''),g=e})})},function(){},function(a,b,c){'use strict';c(11),document.addEventListener('DOMContentLoaded',()=>{function a(){let a='true'===b.getAttribute('aria-expanded');b.setAttribute('aria-expanded',!a),c.classList.toggle('menu__list--open')}const b=document.querySelector('.j-menu-btn'),c=document.querySelector('#menu__list');b.addEventListener('click',a);const d=document.querySelectorAll('.menu__link');d.forEach((b)=>{b.addEventListener('click',()=>{-1!==b.getAttribute('href').indexOf('#')&&a()})})})},function(){},function(a,b,c){'use strict';c(13)},function(){}]);