const Header = (element,text) =>{
  let temp = [];
  headerStyle.forEach(
    x=> temp.push(x)
  )
  let styling= temp.join(';');
  // headerSyle 객체를 forEach로 반복시키고 temp에 저장함, styling이라는 객체를 만들어서 join()사용하여 세미콜론으로 이어붙임

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