(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{28474:function(e,n,t){"use strict";t.r(n);var r=t(85893),a=t(809),s=t.n(a),c=t(92447),i=t(74047),u=t(52700),l=t(8127),o=t(44102),d=t(20775),f=t(67294),p=t(8266),h=t(27904),m=t(68251),x=t(73657);function v(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=(0,d.Z)(e);if(n){var a=(0,d.Z)(this).constructor;t=Reflect.construct(r,arguments,a)}else t=r.apply(this,arguments);return(0,o.Z)(this,t)}}var g=function(e){(0,l.Z)(t,e);var n=v(t);function t(e){var r;return(0,i.Z)(this,t),(r=n.call(this,e)).state={campaigns:r.props.result},r}return(0,u.Z)(t,null,[{key:"getInitialProps",value:function(){var e=(0,c.Z)(s().mark((function e(){var n,t,r,a,c,i;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.Z.methods.getDeployedCampaigns().call();case 2:n=e.sent,t=[],r=0;case 5:if(!(r<n.length)){e.next=20;break}return a=(0,m.Z)(n[r]),e.next=9,a.methods.status().call();case 9:if(e.sent){e.next=17;break}return e.next=12,a.methods.owner().call();case 12:return c=e.sent,e.next=15,a.methods.campaign_Name().call();case 15:i=e.sent,t.push({owner:c,campaign_name:i,address:n[r]});case 17:r++,e.next=5;break;case 20:return e.abrupt("return",{result:t});case 21:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),(0,u.Z)(t,[{key:"render",value:function(){return(0,r.jsxs)(x.Z,{children:[(0,r.jsx)("h1",{children:"All Active Campaigns"}),(0,r.jsx)(h.Link,{route:"/campaigns/new",children:(0,r.jsx)("button",{type:"button",className:"btn btn-success",children:(0,r.jsx)("a",{children:"Create Campaign"})})}),(0,r.jsx)("div",{className:"container-fluid",children:this.state.campaigns.map((function(e,n){return(0,r.jsxs)("div",{className:"card mt-2 mb-2",children:[(0,r.jsx)("div",{className:"card-header",children:e.address}),(0,r.jsxs)("div",{className:"card-body",children:[(0,r.jsx)("h5",{className:"card-title",children:e.campaign_name}),(0,r.jsxs)("p",{className:"card-text",children:["Owner (",e.owner,")"]}),(0,r.jsx)(h.Link,{route:"/campaigns/".concat(e.address),children:(0,r.jsx)("a",{className:"btn btn-primary",children:"Visit Campaign"})})]})]},n)}))})]})}}]),t}(f.Component);n.default=g},78581:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(28474)}])}},function(e){e.O(0,[482,773,486,266,774,888,179],(function(){return n=78581,e(e.s=n);var n}));var n=e.O();_N_E=n}]);