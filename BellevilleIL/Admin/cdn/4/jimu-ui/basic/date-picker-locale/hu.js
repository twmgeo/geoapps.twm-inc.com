System.register([],(function(e,t){return{execute:function(){e((()=>{"use strict";var e={d:(t,a)=>{for(var r in a)e.o(a,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:a[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{default:()=>b});var a={about:"körülbelül",over:"több mint",almost:"majdnem",lessthan:"kevesebb mint"},r={xseconds:" másodperc",halfaminute:"fél perc",xminutes:" perc",xhours:" óra",xdays:" nap",xweeks:" hét",xmonths:" hónap",xyears:" év"},n={xseconds:{"-1":" másodperccel ezelőtt",1:" másodperc múlva",0:" másodperce"},halfaminute:{"-1":"fél perccel ezelőtt",1:"fél perc múlva",0:"fél perce"},xminutes:{"-1":" perccel ezelőtt",1:" perc múlva",0:" perce"},xhours:{"-1":" órával ezelőtt",1:" óra múlva",0:" órája"},xdays:{"-1":" nappal ezelőtt",1:" nap múlva",0:" napja"},xweeks:{"-1":" héttel ezelőtt",1:" hét múlva",0:" hete"},xmonths:{"-1":" hónappal ezelőtt",1:" hónap múlva",0:" hónapja"},xyears:{"-1":" évvel ezelőtt",1:" év múlva",0:" éve"}};function i(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=t.width?String(t.width):e.defaultWidth,r=e.formats[a]||e.formats[e.defaultWidth];return r}}const s={date:i({formats:{full:"y. MMMM d., EEEE",long:"y. MMMM d.",medium:"y. MMM d.",short:"y. MM. dd."},defaultWidth:"full"}),time:i({formats:{full:"H:mm:ss zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},defaultWidth:"full"}),dateTime:i({formats:{full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},defaultWidth:"full"})};var d=["vasárnap","hétfőn","kedden","szerdán","csütörtökön","pénteken","szombaton"];function l(e){return function(t,a,r){var n=t.getUTCDay();return(e?"":"'múlt' ")+"'"+d[n]+"' p'-kor'"}}var o={lastWeek:l(!1),yesterday:"'tegnap' p'-kor'",today:"'ma' p'-kor'",tomorrow:"'holnap' p'-kor'",nextWeek:l(!0),other:"P"};function u(e){return function(t,a){var r,n=a||{};if("formatting"===(n.context?String(n.context):"standalone")&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,s=n.width?String(n.width):i;r=e.formattingValues[s]||e.formattingValues[i]}else{var d=e.defaultWidth,l=n.width?String(n.width):e.defaultWidth;r=e.values[l]||e.values[d]}return r[e.argumentCallback?e.argumentCallback(t):t]}}const m={ordinalNumber:function(e,t){return Number(e)+"."},era:u({values:{narrow:["ie.","isz."],abbreviated:["i. e.","i. sz."],wide:["Krisztus előtt","időszámításunk szerint"]},defaultWidth:"wide"}),quarter:u({values:{narrow:["1.","2.","3.","4."],abbreviated:["1. n.év","2. n.év","3. n.év","4. n.év"],wide:["1. negyedév","2. negyedév","3. negyedév","4. negyedév"]},defaultWidth:"wide",formattingValues:{narrow:["I.","II.","III.","IV."],abbreviated:["I. n.év","II. n.év","III. n.év","IV. n.év"],wide:["I. negyedév","II. negyedév","III. negyedév","IV. negyedév"]},argumentCallback:function(e){return Number(e)-1}}),month:u({values:{narrow:["J","F","M","Á","M","J","J","A","Sz","O","N","D"],abbreviated:["jan.","febr.","márc.","ápr.","máj.","jún.","júl.","aug.","szept.","okt.","nov.","dec."],wide:["január","február","március","április","május","június","július","augusztus","szeptember","október","november","december"]},defaultWidth:"wide"}),day:u({values:{narrow:["V","H","K","Sz","Cs","P","Sz"],short:["V","H","K","Sze","Cs","P","Szo"],abbreviated:["V","H","K","Sze","Cs","P","Szo"],wide:["vasárnap","hétfő","kedd","szerda","csütörtök","péntek","szombat"]},defaultWidth:"wide"}),dayPeriod:u({values:{narrow:{am:"de.",pm:"du.",midnight:"éjfél",noon:"dél",morning:"reggel",afternoon:"du.",evening:"este",night:"éjjel"},abbreviated:{am:"de.",pm:"du.",midnight:"éjfél",noon:"dél",morning:"reggel",afternoon:"du.",evening:"este",night:"éjjel"},wide:{am:"de.",pm:"du.",midnight:"éjfél",noon:"dél",morning:"reggel",afternoon:"délután",evening:"este",night:"éjjel"}},defaultWidth:"wide",defaultFormattingWidth:"wide"})};function f(e){return function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=a.width,n=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],i=t.match(n);if(!i)return null;var s,d=i[0],l=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],o=Array.isArray(l)?v(l,(function(e){return e.test(d)})):c(l,(function(e){return e.test(d)}));s=e.valueCallback?e.valueCallback(o):o,s=a.valueCallback?a.valueCallback(s):s;var u=t.slice(d.length);return{value:s,rest:u}}}function c(e,t){for(var a in e)if(e.hasOwnProperty(a)&&t(e[a]))return a}function v(e,t){for(var a=0;a<e.length;a++)if(t(e[a]))return a}var h,p={ordinalNumber:(h={matchPattern:/^(\d+)\.?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=e.match(h.matchPattern);if(!a)return null;var r=a[0],n=e.match(h.parsePattern);if(!n)return null;var i=h.valueCallback?h.valueCallback(n[0]):n[0];i=t.valueCallback?t.valueCallback(i):i;var s=e.slice(r.length);return{value:i,rest:s}}),era:f({matchPatterns:{narrow:/^(ie\.|isz\.)/i,abbreviated:/^(i\.\s?e\.?|b?\s?c\s?e|i\.\s?sz\.?)/i,wide:/^(Krisztus előtt|időszámításunk előtt|időszámításunk szerint|i\. sz\.)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/ie/i,/isz/i],abbreviated:[/^(i\.?\s?e\.?|b\s?ce)/i,/^(i\.?\s?sz\.?|c\s?e)/i],any:[/előtt/i,/(szerint|i. sz.)/i]},defaultParseWidth:"any"}),quarter:f({matchPatterns:{narrow:/^[1234]\.?/i,abbreviated:/^[1234]?\.?\s?n\.év/i,wide:/^([1234]|I|II|III|IV)?\.?\s?negyedév/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1|I$/i,/2|II$/i,/3|III/i,/4|IV/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:f({matchPatterns:{narrow:/^[jfmaásond]|sz/i,abbreviated:/^(jan\.?|febr\.?|márc\.?|ápr\.?|máj\.?|jún\.?|júl\.?|aug\.?|szept\.?|okt\.?|nov\.?|dec\.?)/i,wide:/^(január|február|március|április|május|június|július|augusztus|szeptember|október|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a|á/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s|sz/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^már/i,/^áp/i,/^máj/i,/^jún/i,/^júl/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:f({matchPatterns:{narrow:/^([vhkpc]|sz|cs|sz)/i,short:/^([vhkp]|sze|cs|szo)/i,abbreviated:/^([vhkp]|sze|cs|szo)/i,wide:/^(vasárnap|hétfő|kedd|szerda|csütörtök|péntek|szombat)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^v/i,/^h/i,/^k/i,/^sz/i,/^c/i,/^p/i,/^sz/i],any:[/^v/i,/^h/i,/^k/i,/^sze/i,/^c/i,/^p/i,/^szo/i]},defaultParseWidth:"any"}),dayPeriod:f({matchPatterns:{any:/^((de|du)\.?|éjfél|délután|dél|reggel|este|éjjel)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^de\.?/i,pm:/^du\.?/i,midnight:/^éjf/i,noon:/^dé/i,morning:/reg/i,afternoon:/^délu\.?/i,evening:/es/i,night:/éjj/i}},defaultParseWidth:"any"})};const b={code:"hu",formatDistance:function(e,t,i){i=i||{};var s,d,l,o,u,m,f=e.match(/about|over|almost|lessthan/i),c=e.replace(f,"");return d=t,l=i.addSuffix,o=c.toLowerCase(),u=i.comparison,m=l?n[o][u]:r[o],s="halfaminute"===o?m:d+m,f&&(s=a[f[0].toLowerCase()]+" "+s),s},formatLong:s,formatRelative:function(e,t,a,r){var n=o[e];return"function"==typeof n?n(t,a,r):n},localize:m,match:p,options:{weekStartsOn:1,firstWeekContainsDate:4}};return t})())}}}));