const createAlbumComponent = (album) => {
    // div.imggroup
    const albumComponent = document.createElement("div");
    albumComponent.classList.add("imggroup");
    //div.imggroup > img
    const img = document.createElement("img");
    img.src = album.cover_medium
    albumComponent.appendChild(img);

    //div.imggroup > figure
    const figure = document.createElement("figure");
    albumComponent.appendChild(figure);

    //div.imggroup > figure > blockquote
    const blockquote = document.createElement("blockquote");
    blockquote.innerHTML = album.title;
    figure.appendChild(blockquote);

    //div.imggroup > figure > blockquote <br>
    // const br = document.createElement("br");
    // figure.appendChild(br);

    //div.imggroup > figure > blockquote > img * 4
    for(i = 0; i < album.stars; i++) {
        const blockquoteImg = document.createElement("img");
        blockquoteImg.classList.add('star');
        blockquoteImg.src = 'https://assets.codepen.io/296057/fem-star.svg';
        figure.appendChild(blockquoteImg);
    }

    //div.imggroup > figure > figcaption
    const figcaption = document.createElement("figcaption");
    figure.appendChild(figcaption);

    //div.imggroup > figure > figcaption > cite
    const cite = document.createElement("cite");
    cite.innerText = new Date(album.release_date).toLocaleDateString("pt-BR");
    figcaption.appendChild(cite);

    return albumComponent;
} 

fetch('https://api.deezer.com/artist/1606874/albums')
.then(response => response.json())
.then(response => {
    response.data.forEach((album) => {
        const albumComponent = createAlbumComponent(album);

        // adicionar albumComponent ao albums
        const albums = document.getElementById("albums");
        albums.appendChild(albumComponent);
    })
})


