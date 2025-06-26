document.addEventListener("DOMContentLoaded", function () {
    const style = document.createElement("style");

    style.textContent = `
        body {
            margin: 0;
            background-color: #000;
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

        img {
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
            background-color: #000;
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

        nav a, h1, .skill, .proyecto {
                display: inline-block;
                vertical-align: top;
                position: relative;
                color:  #fff;
                text-decoration: none;
                font-weight: bold;
                padding: 0.5rem 0.5rem;
                border: 2px solid transparent;
                border-radius: 8px;
                background: linear-gradient(#000, #000) padding-box,
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

        @keyframes neonBorde {
            0% {
                background-position: 0% 50%;
            }
            100% {
                background-position: 200% 50%;
            }
        }




        .Habilidades-contenedor, .proyectos-contenedor {
            display: flex;
            flex-wrap: wrap;
            gap: 2rem;
            justify-content: center;
            align-items:center;
            padding: 1rem;
        }

        .habilidad, Habilidades-contenedor > div, .proyecto, proyectos-contenedor > div {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 8rem;
            text-align: center;
        }


    
        `;
    document.head.appendChild(style);



});