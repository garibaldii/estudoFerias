class cardNews extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });
        shadow.appendChild(this.build())
        shadow.appendChild(this.styles())
    }

    build() {

        //aqui será montada o esqueleto html do site pela função build()
        //é uma hierarquia, se passa pelo shadow>build & style

        //build>component_root(seria a div container do html)>leftCard & rightCard (com seus respectivos filhos)


        //component root content(especificação dos filhos e a qual classe pertence na versão JS!)//

        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");


        // [END] component root content//


        //left card content//
        const leftCard = document.createElement("div");

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url");

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content");

        leftCard.setAttribute("class", "left_card");
        leftCard.appendChild(autor);
        leftCard.appendChild(linkTitle);
        leftCard.appendChild(newsContent);

        // [END] left card content//



        //right card content//
        const rightCard = document.createElement("div");
        rightCard.setAttribute("class", "right_card");

        const newsImage = document.createElement("img");
        newsImage.src = this.getAttribute("photo");
        newsImage.alt = "foto-noticia";

        rightCard.appendChild(newsImage)


        // [END] right card content//

        componentRoot.appendChild(leftCard);
        componentRoot.appendChild(rightCard);

        return componentRoot;
    }

    styles() {
        const style = document.createElement("style");
        style.textContent = `
            * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', sans-serif;
        }
        
        .card {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            width: 80%;
            height: 40%;
            box-shadow: 9px 6px 41px -11px rgba(0, 0, 0, 0.78);
            -webkit-box-shadow: 9px 6px 41px -11px rgba(0, 0, 0, 0.78);
            -moz-box-shadow: 9px 6px 41px -11px rgba(0, 0, 0, 0.78);
        }
        
        .right_card{
            width: 40%;
        }
        
        
        .left_card {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;
        }
        
        .left_card>h1 {
            margin-top: 15px;
            font-size: 25px;
        }
        
        .left_card>p {
            color: gray;
        }
        
        .left_card>span {
            font-weight: 400;
        }
        
        
        img {
            width: 100%;
        }`


        return style
    }

}



customElements.define('card-news', cardNews)