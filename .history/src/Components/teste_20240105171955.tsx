import React, { useEffect } from 'react';
import gsap from 'gsap'; // Certifique-se de ter gsap instalado e importado corretamente

function Teste() {
  useEffect(() => {
    gsap.set(".information", { yPercent: 100 });

    gsap.utils.toArray(".container").forEach((container) => {
      let info = container.querySelector(".information"),
          silhouette = container.querySelector(".silhouette .cover"),
          tl = gsap.timeline({ paused: true });

      tl.to(info, { yPercent: 0 }).to(silhouette, { opacity: 0 }, 0);

      container.addEventListener("mouseenter", () => tl.timeScale(1).play());
      container.addEventListener("mouseleave", () => tl.timeScale(3).reverse());
    });
  }, []);

  return (
    <>
      {/* Coloque todo o HTML dentro do retorno do componente */}
      {/* Coloque o HTML que estava no seu componente aqui */}
    </>
  );
}

export default Teste;
