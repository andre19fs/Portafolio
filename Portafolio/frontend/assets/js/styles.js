document.addEventListener("DOMContentLoaded", function () {
    const style = document.createElement("style");

    style.textContent = `
        body {
            margin: 0;
            font-family: "Calibri";
            background-color: #0a120d;
            color:  #fff;
        }
        .boxShadow {
            box-shadow: 0 1px 2px #00ffcc;
            margin: 1rem;   
            padding: 1rem;
            border-radius: 4px; 
        
            
        }
            

        main {
            margin-top: 12rem;
        }

        #habilidades img {
            max-width: 2rem;
        }

        h2 {
            text-align: center;
            justify-content: center;
            align-items: center;
        }

        header {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            background-color: #0a120d;
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 1rem; 
            
            z-index: 1000;
        }

        #sobreMi {
            text-align: center;
            padding: 2rem;
            background-color: #0e1912;
            
        }

        #Foto {
            max-width: 5rem;
            border-radius: 100%;
            margin-right: center;
            margin-bottom:1rem;
        }

        #sobreMi h2 {
            margin-bottom: 0.5rem;
        }

        #sobreMi p {
            max-width: 60rem;
            margin: 0 auto;
            font-size: 1.2rem;
        }

        header h1 {
            color: #fff;
            margin-bottom: 1.5rem;
        }

        header h2 {
            display: flex;
            align-items: center;

        }

        nav {
            display: flex;
            justify-content: center;
            gap: 2rem;
            flex-wrap: wrap;
        }

        /*marco con animacion*/
        nav a, h1, .skill, .proyecto, #contacto {
                display: inline-block;
                vertical-align: top;
                position: relative;
                color:  #fff;
                text-decoration: none;
                font-weight: bold;
                padding: 0.5rem 0.5rem;
                border: 2px solid transparent;
                border-radius: 8px;
                background: linear-gradient(#0a120d, #0a120d) padding-box,
                            linear-gradient(270deg, #00ffff, #00ff00, #00ffff) border-box;
                background-size: 400% 400%;
                background-clip: padding-box, border-box;
                animation: neonBorde 5s linear infinite;
                transition: 0.3s ease;
                box-shadow: 0 0 5px #00ffcc;
            
        }


        
        nav a:hover {
            color: #000;
            background: linear-gradient(#00ffcc, #00ffcc) padding-box, linear-gradient(270deg, #00ffff, #00ff00, #00ffff) border-box;
            ox-shadow: 0 0 15px #00ffcc, 0 0 25px #00ffcc;
        }

        /*animacio*/
        @keyframes neonBorde {
            0% {
                background-position: 0% 50%;
            }
            100% {
                background-position: 200% 50%;
            }
        }


        /* Seccion habilidades*/
        .Habilidades-contenedor {
            display: flex;
            flex-wrap: wrap;
            gap: 2rem;
            justify-content: center;
            align-items:center;
            padding: 2rem;
            
        }

        .habilidad, .Habilidades-contenedor > div {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 8rem;
            text-align: center;
        }



        /*seccion proyectos*/

        #proyectos {
            background-color: #0e1912;
            padding: 2rem;
        }
        
        .proyectos-contenedor {
            display: flex;
            flex-wrap: wrap;
            gap: 2rem;
            justify-content: center;
            align-items:center;
            padding: 2rem;
            
        }

        .proyectos-contenedor > div {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
        }

        .proyecto {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 50rem;
            height: 30rem;
            text-align: center;
        }

        .proyecto img {
            width: 25rem;
        }

        /*Poner gif del proyecto en la imagen del pc*/

        .contenedor-gif {
            position: relative;
            width: 25rem;
            height: 15rem;
            margin-bottom: 5rem;
        }

        .fondo, .gif {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: auto;
        }

        .fondo {
            z-index: 1;
        }

        .gif {
            z-index: 2;
            
        }


        /*seccion contacto*/
        #contacto {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 2rem;
        }

        #formulario {
            background-color: 1e1e1e;
            border-radius: 1.2rem;
            padding: 2rem 2.5rem;
            max-width: 50rem;
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 1.2rem;
        }

        #contacto h2 {
            text-align: center;
            margin-bottom: 2rem;
            color: #FFFFFF;
            padding: 2rem 0 0 0;
        }

        #formulario label {
            font-weight: bold;
            color: #FFFFFF;
            
        }

        #formulario button {
            background-color: #32cd32;
            color: #000;
            border: none;
            padding: 0.9rem 1.4rem;
            border-radius: 0.4rem;
            font-size: 1rem;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }

        #formulario button:hover {
            background-color: #228b22;
        }

    
        `;
    document.head.appendChild(style);



});