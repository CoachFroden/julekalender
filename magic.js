/* Dekorative effekter; ingen endring av luker, lyd eller kalenderlogikk. */
(function(){
  const scene=document.getElementById('scene');
  if(!scene)return;
  const layer=document.createElement('div');
  layer.className='magic-atmosphere';
  layer.setAttribute('aria-hidden','true');
  layer.innerHTML='<div class="magic-vignette"></div><div class="magic-shimmer"></div>';
  // Seedet tilfeldig plassering, så prikker ikke hopper rundt ved omlasting.
  let seed=1748;function random(){seed=(seed*1664525+1013904223)>>>0;return seed/4294967296;}
  for(let i=0;i<34;i++){
    const f=document.createElement('i');f.className='firefly';
    const x=7+random()*86,y=12+random()*76;
    f.style.setProperty('--x',x+'%');f.style.setProperty('--y',y+'%');
    f.style.setProperty('--s',(1.4+random()*2.8)+'px');
    f.style.setProperty('--dx',(-25+random()*50)+'px');
    f.style.setProperty('--dy',(-24+random()*48)+'px');
    f.style.setProperty('--duration',(5+random()*8)+'s');
    f.style.setProperty('--delay',(-random()*12)+'s');
    layer.appendChild(f);
  }
  // Plassert etter bakgrunnen men under luker og panel.
  scene.appendChild(layer);
  const controls=document.querySelector('.controls');
  if(controls){
    const b=document.createElement('button');b.type='button';b.className='magic-toggle';
    const saved=localStorage.getItem('trolleliv-magic')!=='off';
    function setEnabled(on){scene.classList.toggle('magic-off',!on);b.textContent=on?'✨ Magi: På':'✨ Magi: Av';b.setAttribute('aria-pressed',String(on));}
    setEnabled(saved);
    b.addEventListener('click',()=>{const on=scene.classList.contains('magic-off');setEnabled(on);localStorage.setItem('trolleliv-magic',on?'on':'off');});
    controls.appendChild(b);
  }
})();
