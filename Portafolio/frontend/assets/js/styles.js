document.addEventListener("DOMContentLoaded", function () {
    const style = document.createElement("style");

    style.textContent = `
        body {
            margin: 0;
            background-color: #000;
            color: #0f0;
        }

        header {
            background-color: #000;
            padding: 2rem;
            display: flex;
            aling-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 1rem; 
        }

        header h1 {
            color: #0f0;
            margin-bottom: 1.5rem;
        }

        nav {
            display: flex;
            justify-content: center;
            gap: 2rem;
            flex-wrap: wrap;
        }

        nav a {
                position: relative;
                color: #0ff;
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

       

    
        `;
    document.head.appendChild(style);



});