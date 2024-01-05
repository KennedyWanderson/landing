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
                      <html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Teste</title>
    <style>
        @import url('https://fonts.googleapis.com/css?family=Bebas+Neue|Ubuntu|Raleway&display=swap');

        * {
            box-sizing: border-box;
        }

        body {
            height: 100vh;
            margin: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            background-color: #e5e5e5;
            font-family: ubuntu;
        }

        .container {
            width: 20%;
            min-width: 200px;
            max-width: 250px;
            height: 450px;
            float: left;
            margin: 0 10px;
        }

        .silhouette {
            position: relative;
            width: 100px;
            height: 100px;
            background-size: cover;
            margin: auto;
        }

        .silhouette .cover {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-size: cover;
        }

        .type {
            text-align: justify;
        }

        .card {
            background-color: white;
            height: calc(100% - 150px);
            align-self: center;
            border-radius: 10px;
            text-align: center;
            padding-top: 40%;
            box-shadow: 0px 0px 12px -1px black;
            margin: auto;
            overflow: hidden;
            position: relative;
        }

        h1 {
            font-family: Bebas Neue;
            letter-spacing: 2px;
            font-size: 30pt;
        }

        #Bulbasaur {
            background-image: url(https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png);
        }

        #Bulbasaur .cover {
            background-image: url(https://greensock.com/images/001-silhouette.png);
        }

        #Charmander {
            background-image: url(https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png);
        }

        #Charmander .cover {
            background-image: url(https://greensock.com/images/004-silhouette.png);
        }

        #Squirtle {
            background-image: url(https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png);
        }

        #Squirtle .cover {
            background-image: url(https://greensock.com/images/007-silhouette.png);
        }

        .information {
            background-color: white;
            height: 100%;
            border-radius: 10px;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 2;
            margin: auto;
            text-align: center;
        }

        #BulbasaurInfo {
            border-top: 10px solid #9Dcb58;
            border-bottom: 10px solid #9Dcb58;
        }

        #CharmanderInfo {
            border-top: 10px solid #FB7D34;
            border-bottom: 10px solid #FB7D34;
        }

        #SquirtleInfo {
            border-top: 10px solid #4993C2;
            border-bottom: 10px solid #4993C2;
        }

        h2 {
            text-align: center;
            padding-bottom: 10px;
        }

        #BulbasaurName {
            border-bottom: dashed 2px #9Dcb58;
        }

        #CharmanderName {
            border-bottom: dashed 2px #FB7D34;
        }

        #SquirtleName {
            border-bottom: dashed 2px #4993C2;
        }

        p {
            padding-left: 10px;
            padding-right: 10px;
            font-family: raleway;
            font-size: 10pt;
        }

        button {
            width: 60px;
            height: auto;
            border: none;
            color: white;
            border-radius: 10px;
            font-size: 10pt;
        }

        #grass {
            background-color: #9Dcb58;
        }

        #poison {
            background-color: #B881C8;
        }

        #fire {
            background-color: #FB7D34;
        }

        #water {
            background-color: #4993C2;
        }

        .instructions {
            width: 100%;
            text-align: center;
            font-size: 20pt;
            color: grey;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="silhouette" id="Bulbasaur">
            <div class="cover"></div>
        </div>
        <div class="card">
            <h1>Who's</h1>
            <div class="information" id="BulbasaurInfo">
                <h2 id="BulbasaurName">Bulbasaur</h2>
                <p>Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the
                    sun's rays, the seed grows progressively larger.</p>
                <p class="type">Type: <button id="grass">Grass</button> <button id=poison>Poison</button></p>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="silhouette" id="Charmander">
            <div class="cover"></div>
        </div>
        <div class="card">
            <h1>That</h1>
            <div class="information" id="CharmanderInfo">
                <h2 id="CharmanderName">Charmander</h2>
                <p>The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when
                    Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely.</p>
                <p class="type">Type: <button id="fire">Fire</button>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="silhouette" id="Squirtle">
            <div class="cover"></div>
        </div>
        <div class="card">
            <h1>Pokémon?</h1>
            <div class="information" id="SquirtleInfo">
                <h2 id="SquirtleName">Squirtle</h2>
                <p>Squirtle's shell is not merely used for protection. The shell's rounded shape and the grooves on its
                    surface help minimize resistance in water, enabling this Pokémon to swim at high speeds.</p>
                <p class="type">Type: <button id="water">Water</button>
            </div>
        </div>
    </div>

    <div class="instructions">Hover over a card to find out!</div>
</body>

<script>
    gsap.set(".information", { yPercent: 100 });

    gsap.utils.toArray(".container").forEach((container) => {
        let info = container.querySelector(".information"),
            silhouette = container.querySelector(".silhouette .cover"),
            tl = gsap.timeline({ paused: true });

        tl.to(info, { yPercent: 0 }).to(silhouette, { opacity: 0 }, 0);

        container.addEventListener("mouseenter", () => tl.timeScale(1).play());
        container.addEventListener("mouseleave", () => tl.timeScale(3).reverse());
    });

</script>

</html>
    </>
  );
}

export default Teste;
