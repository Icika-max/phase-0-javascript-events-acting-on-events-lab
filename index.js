// Your code here
function moveDodgerleft(){
  const leftNumbers = dodger.style.replace("px", "");
  const left =perseInt(leftNumbers,10);
  if (left>0) {
    dodger.style.left= '${left -1'}
}
document.addEventListener("keydown", function(e){
  if (e.key=== "arrowleft") {
    moveDodgerleft();
  }
});
function moveDodgerRight()
{
  const rightNumbers =dodger.style.left.replace( "px", "");
  const right = parseInt( rightNumbers,10);
  if ( right>0)
  {
    dodger.style.left= '${right +1}px';
  }


}
document.addEventListener("keydown", function(e)
{
if (e.key==="ArrowRight")
{ moveDodgerRight()}
})
