(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[430],{72477:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/sell-nft",function(){return c(58416)}])},58416:function(d,b,a){"use strict";a.r(b),a.d(b,{default:function(){return o}});var e=a(47568),c=a(34051),f=a.n(c),g=a(85893);a(9008),a(25675);var h=a(34295),i=a(4672),j=a(67225),k=a(35553),l=a(83078),m=a(48036),n=a(67294);function o(){var t=(0,h.lm)(),a=(0,l.Nr)(),b=a.chainId,o=a.account,p=a.isWeb3Enabled,q=b?parseInt(b).toString():"31337",u=(0,l.JX)().runContractFunction,d=(0,n.useState)("0"),c=d[0],v=d[1];function w(){return(w=(0,e.Z)(f().mark(function a(){var b;return f().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,u({params:{abi:i,contractAddress:r,functionName:"getProceeds",params:{seller:o}},onError:function(a){return console.log(a)}});case 2:(b=a.sent)&&v(b.toString());case 4:case"end":return a.stop()}},a)}))).apply(this,arguments)}(0,n.useEffect)(function(){p&&function a(){return w.apply(this,arguments)}()},[c,o,p,b]);var r=m[q].NftMarketplace[0];function x(){return(x=(0,e.Z)(f().mark(function a(b){var c,d,e,g;return f().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return console.log("Approving..."),c=b.data[0].inputResult,d=b.data[1].inputResult,e=k.vz(b.data[2].inputResult,"ether").toString(),g={abi:j,contractAddress:c,functionName:"approve",params:{to:r,tokenId:d}},a.next=7,u({params:g,onSuccess:function(){y(c,d,e)},onError:function(a){console.log("error")}});case 7:case"end":return a.stop()}},a)}))).apply(this,arguments)}function y(a,b,c){return z.apply(this,arguments)}function z(){return(z=(0,e.Z)(f().mark(function a(b,c,d){var g,h,j;return f().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return h=function(a){return j.apply(this,arguments)},j=function(){return(j=(0,e.Z)(f().mark(function a(b){return f().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,b.wait(1);case 2:t({type:"success",message:"Successfully listed an NFT!",title:"Listing successful - please refresh(and move blocks)",position:"topR"});case 3:case"end":return a.stop()}},a)}))).apply(this,arguments)},console.log("NFT Approved! Listing..."),g={abi:i,contractAddress:r,functionName:"listItem",params:{nftAddress:b,tokenId:c,price:d}},a.next=8,u({params:g,onSuccess:h,onError:function(a){console.log(a)}});case 8:case"end":return a.stop()}},a)}))).apply(this,arguments)}console.log(r);var s,A=(s=(0,e.Z)(f().mark(function a(b){return f().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,b.wait(1);case 2:t({type:"success",message:"Withdrawing proceeds",position:"topR"});case 3:case"end":return a.stop()}},a)})),function(a){return s.apply(this,arguments)});return(0,g.jsxs)("div",{className:"items-start",children:[(0,g.jsx)(h.l0,{onSubmit:function(a){return x.apply(this,arguments)},data:[{name:"NFT Address",type:"text",inputWidth:"50%",value:"",key:"nftAddress"},{name:"Token Id",type:"number",value:"",inputWidth:"50%",key:"tokenId"},{name:"Price (in ETH)",type:"number",value:"",inputWidth:"50%",key:"price"}],title:"List your NFT!",id:"Main Form"}),(0,g.jsxs)("div",{className:"px-4",children:[(0,g.jsxs)("h2",{style:{color:"#68738D"},className:"text-2xl font-bold text-Gray-100 mb-3",children:["Withdraw ",k.dF(c)," ETH proceeds"]}),"0"!=c?(0,g.jsx)(h.zx,{onClick:function(){u({params:{abi:i,contractAddress:r,functionName:"withdrawProceeds",params:{}},onError:function(a){return console.log(a)},onSuccess:A})},text:"Withdraw",type:"button"}):(0,g.jsx)("div",{children:"No proceeds detected"})]})]})}},67225:function(a){"use strict";a.exports=JSON.parse('[{"type":"constructor","payable":false,"inputs":[]},{"type":"event","anonymous":false,"name":"Approval","inputs":[{"type":"address","name":"owner","indexed":true},{"type":"address","name":"approved","indexed":true},{"type":"uint256","name":"tokenId","indexed":true}]},{"type":"event","anonymous":false,"name":"ApprovalForAll","inputs":[{"type":"address","name":"owner","indexed":true},{"type":"address","name":"operator","indexed":true},{"type":"bool","name":"approved","indexed":false}]},{"type":"event","anonymous":false,"name":"DogMinted","inputs":[{"type":"uint256","name":"tokenId","indexed":true}]},{"type":"event","anonymous":false,"name":"Transfer","inputs":[{"type":"address","name":"from","indexed":true},{"type":"address","name":"to","indexed":true},{"type":"uint256","name":"tokenId","indexed":true}]},{"type":"function","name":"TOKEN_URI","constant":true,"stateMutability":"view","payable":false,"gas":29000000,"inputs":[],"outputs":[{"type":"string"}]},{"type":"function","name":"approve","constant":false,"payable":false,"gas":29000000,"inputs":[{"type":"address","name":"to"},{"type":"uint256","name":"tokenId"}],"outputs":[]},{"type":"function","name":"balanceOf","constant":true,"stateMutability":"view","payable":false,"gas":29000000,"inputs":[{"type":"address","name":"owner"}],"outputs":[{"type":"uint256"}]},{"type":"function","name":"getApproved","constant":true,"stateMutability":"view","payable":false,"gas":29000000,"inputs":[{"type":"uint256","name":"tokenId"}],"outputs":[{"type":"address"}]},{"type":"function","name":"getTokenCounter","constant":true,"stateMutability":"view","payable":false,"gas":29000000,"inputs":[],"outputs":[{"type":"uint256"}]},{"type":"function","name":"isApprovedForAll","constant":true,"stateMutability":"view","payable":false,"gas":29000000,"inputs":[{"type":"address","name":"owner"},{"type":"address","name":"operator"}],"outputs":[{"type":"bool"}]},{"type":"function","name":"mintNft","constant":false,"payable":false,"gas":29000000,"inputs":[],"outputs":[]},{"type":"function","name":"name","constant":true,"stateMutability":"view","payable":false,"gas":29000000,"inputs":[],"outputs":[{"type":"string"}]},{"type":"function","name":"ownerOf","constant":true,"stateMutability":"view","payable":false,"gas":29000000,"inputs":[{"type":"uint256","name":"tokenId"}],"outputs":[{"type":"address"}]},{"type":"function","name":"safeTransferFrom","constant":false,"payable":false,"gas":29000000,"inputs":[{"type":"address","name":"from"},{"type":"address","name":"to"},{"type":"uint256","name":"tokenId"}],"outputs":[]},{"type":"function","name":"safeTransferFrom","constant":false,"payable":false,"gas":29000000,"inputs":[{"type":"address","name":"from"},{"type":"address","name":"to"},{"type":"uint256","name":"tokenId"},{"type":"bytes","name":"data"}],"outputs":[]},{"type":"function","name":"setApprovalForAll","constant":false,"payable":false,"gas":29000000,"inputs":[{"type":"address","name":"operator"},{"type":"bool","name":"approved"}],"outputs":[]},{"type":"function","name":"supportsInterface","constant":true,"stateMutability":"view","payable":false,"gas":29000000,"inputs":[{"type":"bytes4","name":"interfaceId"}],"outputs":[{"type":"bool"}]},{"type":"function","name":"symbol","constant":true,"stateMutability":"view","payable":false,"gas":29000000,"inputs":[],"outputs":[{"type":"string"}]},{"type":"function","name":"tokenURI","constant":true,"stateMutability":"view","payable":false,"gas":29000000,"inputs":[{"type":"uint256","name":"tokenId"}],"outputs":[{"type":"string"}]},{"type":"function","name":"transferFrom","constant":false,"payable":false,"gas":29000000,"inputs":[{"type":"address","name":"from"},{"type":"address","name":"to"},{"type":"uint256","name":"tokenId"}],"outputs":[]}]')},4672:function(a){"use strict";a.exports=JSON.parse('[{"type":"error","name":"NftMarketplace__AlreadyListed","inputs":[{"type":"address","name":"nftAddress"},{"type":"uint256","name":"tokenId"}]},{"type":"error","name":"NftMarketplace__InvalidPrice","inputs":[]},{"type":"error","name":"NftMarketplace__NoProceeds","inputs":[]},{"type":"error","name":"NftMarketplace__NotApproved","inputs":[]},{"type":"error","name":"NftMarketplace__NotListed","inputs":[{"type":"address","name":"nftAddress"},{"type":"uint256","name":"tokenId"}]},{"type":"error","name":"NftMarketplace__NotOWner","inputs":[]},{"type":"error","name":"NftMarketplace__PriceNotMet","inputs":[{"type":"address","name":"nftAddress"},{"type":"uint256","name":"tokenId"},{"type":"uint256","name":"price"}]},{"type":"error","name":"NftMarketplace__TransferFailed","inputs":[]},{"type":"event","anonymous":false,"name":"ItemBought","inputs":[{"type":"address","name":"buyer","indexed":true},{"type":"address","name":"nftAddress","indexed":true},{"type":"uint256","name":"tokenId","indexed":true},{"type":"uint256","name":"price","indexed":false}]},{"type":"event","anonymous":false,"name":"ItemCancelled","inputs":[{"type":"address","name":"seller","indexed":true},{"type":"address","name":"nftAddress","indexed":true},{"type":"uint256","name":"tokenId","indexed":true}]},{"type":"event","anonymous":false,"name":"ItemListed","inputs":[{"type":"address","name":"seller","indexed":true},{"type":"address","name":"nftAddress","indexed":true},{"type":"uint256","name":"tokenId","indexed":true},{"type":"uint256","name":"price","indexed":false}]},{"type":"function","name":"buyItem","constant":false,"stateMutability":"payable","payable":true,"gas":29000000,"inputs":[{"type":"address","name":"nftAddress"},{"type":"uint256","name":"tokenId"}],"outputs":[]},{"type":"function","name":"cancelListing","constant":false,"payable":false,"gas":29000000,"inputs":[{"type":"address","name":"nftAddress"},{"type":"uint256","name":"tokenId"}],"outputs":[]},{"type":"function","name":"getListing","constant":true,"stateMutability":"view","payable":false,"gas":29000000,"inputs":[{"type":"address","name":"nftAddress"},{"type":"uint256","name":"tokenId"}],"outputs":[{"type":"tuple","components":[{"type":"uint256","name":"price"},{"type":"address","name":"seller"}]}]},{"type":"function","name":"getProceeds","constant":true,"stateMutability":"view","payable":false,"gas":29000000,"inputs":[{"type":"address","name":"seller"}],"outputs":[{"type":"uint256"}]},{"type":"function","name":"listItem","constant":false,"payable":false,"gas":29000000,"inputs":[{"type":"address","name":"nftAddress"},{"type":"uint256","name":"tokenId"},{"type":"uint256","name":"price"}],"outputs":[]},{"type":"function","name":"updateListing","constant":false,"payable":false,"gas":29000000,"inputs":[{"type":"address","name":"nftAddress"},{"type":"uint256","name":"tokenId"},{"type":"uint256","name":"newPrice"}],"outputs":[]},{"type":"function","name":"withdrawProceeds","constant":false,"payable":false,"gas":29000000,"inputs":[],"outputs":[]}]')},48036:function(a){"use strict";a.exports=JSON.parse('{"4":{"NftMarketplace":["0xFf193a61bEbAd3f8A4b937A400135330eE190AE8"]},"31337":{"NftMarketplace":[""]}}')}},function(a){a.O(0,[288,774,888,179],function(){var b;return a(a.s=72477)}),_N_E=a.O()}])