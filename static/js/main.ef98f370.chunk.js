(this.webpackJsonpautosuggest=this.webpackJsonpautosuggest||[]).push([[0],{10:function(a,e,n){"use strict";n.r(e);var i=n(1),t=n.n(i),r=n(4),o=n.n(r),s=n(2),u=["Afghanistan","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antarctica","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas (the)","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia (Plurinational State of)","Bonaire, Sint Eustatius and Saba","Bosnia and Herzegovina","Botswana","Bouvet Island","Brazil","British Indian Ocean Territory (the)","Brunei Darussalam","Bulgaria","Burkina Faso","Burundi","Cabo Verde","Cambodia","Cameroon","Canada","Cayman Islands (the)","Central African Republic (the)","Chad","Chile","China","Christmas Island","Cocos (Keeling) Islands (the)","Colombia","Comoros (the)","Congo (the Democratic Republic of the)","Congo (the)","Cook Islands (the)","Costa Rica","Croatia","Cuba","Cura\xe7ao","Cyprus","Czechia","C\xf4te d'Ivoire","Denmark","Djibouti","Dominica","Dominican Republic (the)","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Eswatini","Ethiopia","Falkland Islands (the) [Malvinas]","Faroe Islands (the)","Fiji","Finland","France","French Guiana","French Polynesia","French Southern Territories (the)","Gabon","Gambia (the)","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guernsey","Guinea","Guinea-Bissau","Guyana","Haiti","Heard Island and McDonald Islands","Holy See (the)","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran (Islamic Republic of)","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Korea (the Democratic People's Republic of)","Korea (the Republic of)","Kuwait","Kyrgyzstan","Lao People's Democratic Republic (the)","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macao","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands (the)","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Micronesia (Federated States of)","Moldova (the Republic of)","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands (the)","New Caledonia","New Zealand","Nicaragua","Niger (the)","Nigeria","Niue","Norfolk Island","Northern Mariana Islands (the)","Norway","Oman","Pakistan","Palau","Palestine, State of","Panama","Papua New Guinea","Paraguay","Peru","Philippines (the)","Pitcairn","Poland","Portugal","Puerto Rico","Qatar","Republic of North Macedonia","Romania","Russian Federation (the)","Rwanda","R\xe9union","Saint Barth\xe9lemy","Saint Helena, Ascension and Tristan da Cunha","Saint Kitts and Nevis","Saint Lucia","Saint Martin (French part)","Saint Pierre and Miquelon","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Sint Maarten (Dutch part)","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Georgia and the South Sandwich Islands","South Sudan","Spain","Sri Lanka","Sudan (the)","Suriname","Svalbard and Jan Mayen","Sweden","Switzerland","Syrian Arab Republic","Taiwan","Tajikistan","Tanzania, United Republic of","Thailand","Timor-Leste","Togo","Tokelau","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Turks and Caicos Islands (the)","Tuvalu","Uganda","Ukraine","United Arab Emirates (the)","United Kingdom of Great Britain and Northern Ireland (the)","United States Minor Outlying Islands (the)","United States of America (the)","Uruguay","Uzbekistan","Vanuatu","Venezuela (Bolivarian Republic of)","Viet Nam","Virgin Islands (British)","Virgin Islands (U.S.)","Wallis and Futuna","Western Sahara","Yemen","Zambia","Zimbabwe","\xc5land Islands"],l=function(a){return new Promise((function(e){var n=Math.floor(4e3*Math.random());console.log("delay: ",n),console.log("fetch: ",a),setTimeout((function(){var n=u.filter((function(e){return e.toLowerCase().includes(a.toLowerCase())}));e(n)}),n)}))},c=n(0),d=function(a){a.suggestions;var e=Object(i.useState)([]),n=Object(s.a)(e,2),t=n[0],r=n[1],o=Object(i.useState)(!1),u=Object(s.a)(o,2),d=u[0],h=u[1],b=Object(i.useState)(""),m=Object(s.a)(b,2),g=m[0],S=m[1],j=Object(i.useState)(!1),f=Object(s.a)(j,2),p=f[0],M=f[1];Object(i.useEffect)((function(){M(!0);var a=setTimeout((function(){r([]),l(g).then((function(a){r(a)}))}),1e3);return h(!0),function(){return clearTimeout(a)}}),[g]);var y=function(){return t.length&&d?Object(c.jsx)("ul",{children:t.map((function(a,e){return Object(c.jsx)("li",{children:a},a)}))}):Object(c.jsx)("div",{children:p&&Object(c.jsx)("p",{children:"Searching now..."})})};return Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{htmlFor:"query",children:"Search for country by name:"}),Object(c.jsx)("br",{}),Object(c.jsx)("input",{id:"query",onChange:function(a){S(a.target.value),h(!1),r([])},type:"text"}),d&&g&&Object(c.jsx)(y,{})]})};var h=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Auto-Suggest Demo"}),Object(c.jsx)(d,{suggestions:l})]})};o.a.render(Object(c.jsx)(t.a.StrictMode,{children:Object(c.jsx)(h,{})}),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.ef98f370.chunk.js.map