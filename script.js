window.onload = () =>{

    const photosButton = document.querySelector('#photos-button');
    const gifsButton = document.querySelector('#gifs-button');

    const photosPage = document.querySelector('#photos-page');
    const gifsPage = document.querySelector('#gifs-page');

    const wrap = document.querySelector('#wrap');


    gifsButton.onclick = () =>{

    wrap.style.transform = "translateX(-100%)";

    gifsButton.style.color = "#1da1f2";
    photosButton.style.color = "#8997A2";


        
    }

    photosButton.onclick = () =>{

        wrap.style.transform = "translateX(0%)";

        photosButton.style.color = "#1da1f2";
        gifsButton.style.color = "#8997A2";
    

    }

}