// Simple demo script for appointment form
document.addEventListener('DOMContentLoaded',function(){
  const form=document.getElementById('appointment-form');
  if(!form) return;
  form.addEventListener('submit',function(e){
    e.preventDefault();
    const data=new FormData(form);
    const name=data.get('name');
    alert('Thanks '+(name||'')+' — appointment request sent (demo).');
    form.reset();
  });
});
