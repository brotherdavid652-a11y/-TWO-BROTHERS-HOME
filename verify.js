// Runtime checks in JavaScriptCore, with a minimal DOM harness.
var elements = new Map();
function element(id){if(!elements.has(id))elements.set(id,{value:id==='sort'?'featured':id==='budget'?'all':'',textContent:'',innerHTML:'',disabled:false,classList:{add(){},remove(){},toggle(){}},setAttribute(){},removeAttribute(){},listeners:{},addEventListener(name,fn){this.listeners[name]=fn;},querySelector(){return element('focus-target');},querySelectorAll(){return [];},focus(){},showModal(){},close(){}});return elements.get(id);}
var document={getElementById:element,querySelectorAll(){return [];},querySelector(){return element('focus-target');},activeElement:element('trigger')};
var window={addEventListener(){}},location={},setTimeout=function(){return 1;},clearTimeout=function(){};
load('dist/app.js');
function assert(value,message){if(!value)throw Error(message);print('PASS '+message);}
assert(window.shopTools.readCatalog().length===18,'18 catalog variants');
const expected=[2200,2500,2400,2800,3350,3600,4550,5000,4000,5700,8750,11500,17200,24000,1800,2050,2750,4000];
assert(window.shopTools.readCatalog().every((p,i)=>p.price===expected[i]),'all supplied prices preserved');
assert(!window.shopTools.addItem('invalid-id'),'invalid product rejected');
window.shopTools.addItem('iphone-13-128');window.shopTools.addItem('iphone-13-128');
assert(window.shopTools.readBag().subtotal===7200,'two iPhone 13 units subtotal 7200');
element('bag-items').listeners.click({target:{closest(){return {dataset:{change:'iphone-13-128',delta:'-1'}};}}});
assert(window.shopTools.readBag().subtotal===3600,'decreasing quantity updates subtotal to 3600');
element('search').value='iPhone 18';element('search').listeners.input();
assert(element('result-count').textContent==='1 product','model search');
element('search').value='no-match';element('search').listeners.input();
assert(element('products').innerHTML.includes('No matching products'),'empty search recovery');
element('search').value='';element('budget').value='3000';element('budget').listeners.change();
assert(element('result-count').textContent==='7 products','budget filter includes all seven options up to 3000');
element('clear-filters').listeners.click();
assert(element('result-count').textContent==='18 products'&&element('clear-filters').hidden,'reset restores complete catalog');
location.hash='#sealed';restoreCollection();
assert(element('result-count').textContent==='2 products','direct sealed collection link');
assert(element('products').innerHTML.includes('Device details'),'individual product details');
element('bag-items').listeners.click({target:{closest(){return {dataset:{remove:'iphone-13-128'}};}}});
assert(window.shopTools.readBag().subtotal===0&&element('review').disabled,'remove item and disable empty review');
for(let i=0;i<100;i++)window.shopTools.addItem('watch-series-6');
assert(window.shopTools.readBag().items[0].quantity===99,'quantity guard');
assert(window.shopTools.readBag().orderSubmitted===false,'no order submission');
