import "./style.css"

function Header(){
    return(
      <div className="header">
        <div className="container-logo">
          <img src="../.././logo.png" alt="logo do studio ghibli" />
          </div>
        <div className="container-icones">
          <a> <img src="../.././vector.png" /> </a>
        <div className="container-icones">
          <a> <img src="../.././instagram.png" /> </a>
        </div>
        <div className="container-icones">
          <a> <img src="../.././vector2.png" /> </a>
        </div>
        <div className="container-icones">
          <a> <img src="../.././youtube.png" /> </a>
        </div>
        </div>
      </div>
 
    )
}

export default Header