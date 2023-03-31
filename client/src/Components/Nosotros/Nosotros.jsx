import React from "react";

export const Nosotros = () => {
  return (
    <>
      <h1 className="d-flex align-items-center justify-content-center m-5">
        Sobre Nosotros
      </h1>
      <div className="d-flex align-items-center m-3 columna">
        <h4 className="textMargin">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni velit
          fuga, culpa molestias error nostrum veniam, quod quibusdam vitae
          nihil, a possimus molestiae eligendi accusamus iure assumenda in rem
          sint!
        </h4>
        <img src="../cocina.jpg" className="rounded-3 imagen" />
      </div>
      <div className="d-flex justify-content-center align-items-center flex-column flex-wrap m-5">
        <h5>Mision</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          soluta harum quaerat, neque dolorem officiis. Dolore, maiores!
          Accusamus omnis animi ipsam placeat consequuntur reiciendis, ut
          excepturi tempora laudantium voluptatibus corrupti?{" "}
        </p>

        <h5>Vision</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          soluta harum quaerat, neque dolorem officiis. Dolore, maiores!
          Accusamus omnis animi ipsam placeat consequuntur reiciendis, ut
          excepturi tempora laudantium voluptatibus corrupti?{" "}
        </p>
      </div>
      <div>
        <h3 className="d-flex justify-content-center m-3">Nuestro Equipo</h3>
        <div className="centering">
            <div className="d-flex flex-column align-items-center m-2"> 
            <p>Pedro</p>
            <img src="../cocinero.jpg" alt="" className="imgSize" />
            </div>
            <div className="d-flex flex-column align-items-center m-2"> 
            <p>Laura</p>
            <img src="../cocinero.jpg" alt="" className="imgSize"/>
            </div><div className="d-flex flex-column align-items-center m-2"> 
            <p>Juan</p>
            <img src="../cocinero.jpg" alt="" className="imgSize"/>
            </div>
        </div>
      </div>
    </>
  );
};
