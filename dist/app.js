'use strict';
const products = [
 ['iphone-11-64','iPhone 11','64GB',2200,'iphone','iphone-11'],
 ['iphone-11-128','iPhone 11','128GB',2500,'iphone','iphone-11'],
 ['iphone-12-64','iPhone 12','64GB',2400,'iphone','iphone-12'],
 ['iphone-12-128','iPhone 12','128GB',2800,'iphone','iphone-12'],
 ['iphone-12-pro-128','iPhone 12 Pro','128GB',3350,'iphone','iphone-12-pro'],
 ['iphone-13-128','iPhone 13','128GB',3600,'iphone','iphone-13'],
 ['iphone-13-pro-128','iPhone 13 Pro','128GB',4550,'iphone','iphone-13-pro'],
 ['iphone-13-pro-max-128','iPhone 13 Pro Max','128GB',5000,'iphone','iphone-13-pro-max'],
 ['iphone-14-128','iPhone 14','128GB',4000,'iphone','iphone-14'],
 ['iphone-15-128','iPhone 15','128GB',5700,'iphone','iphone-15'],
 ['iphone-15-pro-max-256','iPhone 15 Pro Max','256GB',8750,'iphone','iphone-15-pro-max'],
 ['iphone-16-pro-max-256','iPhone 16 Pro Max','256GB',11500,'iphone','iphone-16-pro-max'],
 ['iphone-17-pro-max-256','iPhone 17 Pro Max','256GB',17200,'sealed','iphone-17-pro-max'],
 ['iphone-18-pro-max-256','iPhone 18 Pro Max','256GB · Brown',24000,'sealed','iphone-18-pro-max'],
 ['watch-series-6','Apple Watch Series 6','44mm',1800,'watch','watch-series-6'],
 ['watch-series-7','Apple Watch Series 7','44mm',2050,'watch','watch-series-7'],
 ['watch-series-8','Apple Watch Series 8','45mm',2750,'watch','watch-series-8'],
 ['watch-series-10','Apple Watch Series 10','45mm',4000,'watch','watch-series-10']
].map(([id,name,spec,price,category,image])=>({id,name,spec,price,category,image}));
const $=id=>document.getElementById(id), money=n=>'GH₵ '+n.toLocaleString('en-GH'), bag=new Map();
let filter='all', toastTimer, lastTrigger;
const categoryLabel=p=>p.category==='sealed'?'New · Non-activated · Sealed':p.category==='watch'?'Charger included':'Battery health 87–100%';
const productNote=p=>p.category==='sealed'?'Listed as new, non-activated, and sealed. Confirm the exact colour, model number, stock, and sale terms in store.':p.category==='watch'?'Charger included. Size is supplied by the shop. Confirm exact case size, model number, condition, battery health, and GPS or cellular variant.':'Battery health range supplied: 87–100%. Confirm the exact unit’s battery percentage, condition, repair history, accessories, and sale terms.';
function renderProducts(){
 const query=$('search').value.trim().toLowerCase().replace(/\s+/g,' ');
 const cap=$('budget').value==='all'?Infinity:Number($('budget').value);
 let list=products.filter(p=>(filter==='all'||p.category===filter)&&p.price<=cap&&(p.name+' '+p.spec).toLowerCase().includes(query));
 if($('sort').value==='low')list.sort((a,b)=>a.price-b.price);
 if($('sort').value==='high')list.sort((a,b)=>b.price-a.price);
 $('result-count').textContent=list.length+' product'+(list.length===1?'':'s');
 $('clear-filters').hidden=filter==='all'&&!query&&$('budget').value==='all'&&$('sort').value==='featured';
 $('products').innerHTML=list.length?list.map(p=>`<article class="product"><span class="kind">${categoryLabel(p)}</span><img src="assets/${p.image}.jpg" alt="${p.name} representative model range" width="300" height="200" loading="lazy" decoding="async"><h3>${p.name}</h3><p class="spec">${p.spec}</p><p class="price">${money(p.price)}</p><button class="button" data-add="${p.id}" aria-label="Add ${p.name} ${p.spec} to bag">Add to bag <span aria-hidden="true">+</span></button><details class="product-details"><summary>Device details</summary><p>${productNote(p)}</p></details></article>`).join(''):'<div class="empty"><h3>No matching products</h3><p>Try another model, increase your budget, or reset the filters.</p><button class="outline" id="reset-search">Reset filters</button></div>';
}
function setFilter(value){filter=value;document.querySelectorAll('[data-filter]').forEach(b=>{const active=b.dataset.filter===filter;b.classList.toggle('selected',active);b.setAttribute('aria-pressed',String(active));});document.querySelectorAll('[data-category]').forEach(a=>{if(a.dataset.category===filter)a.setAttribute('aria-current','true');else a.removeAttribute('aria-current');});renderProducts();}
function announce(message){$('toast').textContent=message;$('toast').classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('toast').classList.remove('visible'),2800);}
function addItem(id){const p=products.find(p=>p.id===id);if(!p)return false;const qty=bag.get(id)||0;if(qty>=99){announce('Maximum of 99 per item. This is not available stock.');return false;}bag.set(id,qty+1);renderBag();announce(p.name+' added to your bag');return true;}
function subtotal(){return products.reduce((sum,p)=>sum+p.price*(bag.get(p.id)||0),0);}
function renderBag(){const entries=products.filter(p=>bag.has(p.id)),count=[...bag.values()].reduce((a,b)=>a+b,0);$('bag-count').textContent=count;$('bag-open').setAttribute('aria-label',`Open bag, ${count} item${count===1?'':'s'}`);$('bag-items').innerHTML=entries.length?entries.map(p=>`<div class="bag-row"><img class="bag-thumb" src="assets/${p.image}.jpg" alt="" width="62" height="72"><div><h3>${p.name}</h3><p class="small">${p.spec} · ${money(p.price)} each</p><button class="remove" data-remove="${p.id}" aria-label="Remove ${p.name} ${p.spec}">Remove</button></div><div class="bag-controls"><strong class="bag-line-total">${money(p.price*bag.get(p.id))}</strong><div class="quantity"><button data-change="${p.id}" data-delta="-1" aria-label="Decrease ${p.name} ${p.spec} quantity" ${bag.get(p.id)<=1?'disabled':''}>−</button><span aria-label="Quantity">${bag.get(p.id)}</span><button data-change="${p.id}" data-delta="1" aria-label="Increase ${p.name} ${p.spec} quantity" ${bag.get(p.id)>=99?'disabled':''}>+</button></div></div></div>`).join(''):'<div class="empty"><h3>Your next upgrade goes here.</h3><p>Add a product to compare your selection.</p></div>';$('bag-summary').innerHTML=`<div class="total"><span>Product subtotal</span><span>${money(subtotal())}</span></div><p class="small">Delivery charges are not calculated. Bag resets when this page reloads. The 99-unit limit is an interface limit, not stock availability.</p>`;$('review').disabled=!entries.length;}
function openBag(){if(!document.activeElement?.closest?.('dialog'))lastTrigger=document.activeElement;renderBag();$('bag').showModal();$('bag-close').focus();}
function closeBag(){$('bag').close();lastTrigger?.focus();}
function resetFilters(){$('search').value='';$('sort').value='featured';$('budget').value='all';setFilter('all');$('search').focus();}
$('products').addEventListener('click',e=>{const b=e.target.closest('[data-add]');if(b){addItem(b.dataset.add);b.classList.add('just-added');setTimeout(()=>b.classList.remove('just-added'),500);}if(e.target.closest('#reset-search'))resetFilters();});
$('clear-filters').addEventListener('click',resetFilters);
document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>setFilter(b.dataset.filter)));
document.querySelectorAll('[data-category]').forEach(a=>a.addEventListener('click',()=>setFilter(a.dataset.category)));
$('search').addEventListener('input',renderProducts);$('sort').addEventListener('change',renderProducts);$('budget').addEventListener('change',renderProducts);$('bag-open').addEventListener('click',openBag);$('bag-close').addEventListener('click',closeBag);$('continue').addEventListener('click',closeBag);
$('bag-items').addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;if(b.dataset.remove){const ids=[...bag.keys()],index=ids.indexOf(b.dataset.remove);bag.delete(b.dataset.remove);renderBag();const controls=$('bag-items').querySelectorAll('[data-remove]');(controls[Math.min(index,controls.length-1)]||$('bag-close')).focus();}if(b.dataset.change){const id=b.dataset.change,delta=Number(b.dataset.delta),next=(bag.get(id)||0)+delta;if(next<1||next>99)return;bag.set(id,next);renderBag();const target=$('bag-items').querySelector(`[data-change="${id}"][data-delta="${delta}"]`);if(target?.disabled)$('bag-items').querySelector(`[data-change="${id}"][data-delta="${-delta}"]`)?.focus();else target?.focus();}});
$('review').addEventListener('click',()=>{if(!bag.size)return;$('bag').close();$('review-items').innerHTML=products.filter(p=>bag.has(p.id)).map(p=>`<div class="bag-row"><img class="bag-thumb" src="assets/${p.image}.jpg" alt="" width="62" height="72"><div><h3>${p.name}</h3><p class="small">${p.spec} · Quantity ${bag.get(p.id)}</p></div><strong>${money(p.price*bag.get(p.id))}</strong></div>`).join('')+`<div class="total"><span>Product subtotal</span><span>${money(subtotal())}</span></div>`;$('review-dialog').showModal();$('review-title').focus();});
$('review-close').addEventListener('click',()=>{$('review-dialog').close();openBag();});$('review-stores').addEventListener('click',()=>{$('review-dialog').close();location.hash='stores';const link=document.querySelector('#stores a');link.focus({preventScroll:true});});
for(const id of ['bag','review-dialog'])$(id).addEventListener('cancel',()=>{setTimeout(()=>$('bag-open').focus(),0);});
window.shopTools=Object.freeze({readCatalog:()=>products.map(p=>({...p})),readBag:()=>({items:products.filter(p=>bag.has(p.id)).map(p=>({...p,quantity:bag.get(p.id)})),subtotal:subtotal(),currency:'GHS',orderSubmitted:false}),addItem});
const hashCollections={'#iphones':'iphone','#sealed':'sealed','#watches':'watch'};
function restoreCollection(){if(hashCollections[location.hash])setFilter(hashCollections[location.hash]);}
window.addEventListener('hashchange',restoreCollection);
renderProducts();renderBag();restoreCollection();
