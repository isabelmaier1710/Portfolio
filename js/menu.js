document.addEventListener('DOMContentLoaded',function(){
  var button=document.querySelector('.mobile-menu-toggle');
  var panel=document.querySelector('.mobile-menu-panel');
  if(!button||!panel) return;
  function closeMenu(){
    button.setAttribute('aria-expanded','false');
    button.setAttribute('aria-label','Menü öffnen');
    panel.classList.remove('is-open');
    panel.hidden=true;
    document.body.classList.remove('menu-open');
  }
  button.addEventListener('click',function(){
    var open=button.getAttribute('aria-expanded')==='true';
    if(open){ closeMenu(); }
    else{
      button.setAttribute('aria-expanded','true');
      button.setAttribute('aria-label','Menü schließen');
      panel.hidden=false;
      panel.classList.add('is-open');
      document.body.classList.add('menu-open');
    }
  });
  panel.querySelectorAll('a').forEach(function(a){a.addEventListener('click',closeMenu)});
  window.addEventListener('resize',function(){if(window.innerWidth>600) closeMenu()});
  document.addEventListener('keydown',function(e){if(e.key==='Escape') closeMenu()});
});
