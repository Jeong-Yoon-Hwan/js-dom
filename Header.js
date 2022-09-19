const Header = (element,text) =>{
  let temp = [];
  headerStyle.forEach(
    x=> temp.push(x)
  )
  let styling= temp.join(';');
  
  return (
    element.innerHTML=`<div style=${styling}>${text}</div>`
  ) 
  
}


const headerStyle = [
  "width:100vw",
  "height:100px",
  "background-color:red"
]
  

export default Header;