const createAlbumComponent = (album) => {
  console.log(album.stars)
  // div.imggroup
  const albumComponent = document.createElement("div");
  albumComponent.classList.add("imggroup");
  // div.imggroup > img
  const img = document.createElement("img");
  img.src = album.cover_medium;
  albumComponent.appendChild(img);

  // div.imggroup > figure
  const figure = document.createElement("figure");
  albumComponent.appendChild(figure);

  // div.imggroup > figure > blockquote
  const blockquote = document.createElement("blockquote");
  blockquote.innerText = new Date(album.release_date).toLocaleDateString(
    "pt-BR"
  );
  figure.appendChild(blockquote);

  // div.imggroup > figure > blockquote <br>
  const br = document.createElement("br");
  blockquote.appendChild(br);

  // div.imggroup > figure > blockquote > img
  for(i = 0; i < album.stars; i++) {
      const blockquoteImg = document.createElement("img");
      blockquoteImg.src = "https://assets.codepen.io/296057/fem-star.svg";
      blockquoteImg.classList.add("star");
      blockquote.appendChild(blockquoteImg);
  }

  // div.imggroup > figure > figcaption
  const figcaption = document.createElement("figcaption");
  figure.appendChild(figcaption);

  // div.imggroup > figure > figcaption > cite
  const cite = document.createElement("cite");
  cite.innerText = album.title;
  figcaption.appendChild(cite);

  return albumComponent;
};

fetch("https://api.deezer.com/artist/134790/albums")
  .then((response) => response.json())
  .then((response) => {
    const albums = response.data;

    console.log(albums);

    albums.forEach((album) => {
      const albumsContainer = document.getElementById("albums");
      albumsContainer.appendChild(createAlbumComponent(album));
    });
  });
