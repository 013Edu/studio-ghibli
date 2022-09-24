import "./style.css"

function Main(){
    return(
       <div className="container">
        <div className="container-image">
          <img src="../.././image.png" alt="dois fantasminhas" />
         </div>
         <div className="container-text">
           <h3>HAYAO MIYAZAKI</h3>
           <h1>A VIAGEM<br /> DE CHIHIRO</h1>
           <p>Chihiro chega a um mundo mágico dominado por <br /> uma bruxa. Aqueles que a desobedecem <br /> transformados em animais.</p>
           <button className="play"> ASSISTA AGORA </button>
           <button className="trailler"> ASSISTA O TRAILER</button>
         </div>
       </div>
    )
}

export default Main