AFRAME.registerComponent("poster", {
  init: function () {
    this.placesContainer = this.el;
    this.createCards()
  },

  createCards: function () {
    const thumbNailsRef = [
      {
        id: "batman",
        title: "Batman",
        url: "./assets/thumbnails/Batman.jpg",
      },
      {
        id: "nova",
        title: "Nova",
        url: "assets/thumbnails/Nova_Vol_1_1_B.jpg",
      },

      {
        id: "Shangchi",
        title: "Shang Chi",
        url: "./assets/thumbnails/Shang_Chi.jpg",
      },
      {
        id: "spiderman",
        title: "Spiderman",
        url: "assets/thumbnails/Spiderman.jpg",
      },
    ];
    let prevoiusXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;
      const borderEl= this.createBorder(position,item.id)
      const thumbNail= this.createThumbnail(item)
      borderEl.appendChild(thumbNail)
      const titleEl= this.createTitle(position,item)
      borderEl.appendChild(titleEl)
      this.placesContainer.appendChild(borderEl);
    }
  },
      // Border Element
      createBorder: function(position,id){
        const entityEl = document.createElement("a-entity")
        entityEl.setAttribute("id",id);
        entityEl.setAttribute("visible",true)
        entityEl.setAttribute("geometry", {
          primitive: "plane",
          height:40,
          width:22,
        })
        entityEl.setAttribute("position",position)
        entityEl.setAttribute("material",{
          color:"#FF5733",
          opacity:1,
        });
        return entityEl;
      },
      // Thumbnail Element
      createThumbnail: function(item){
        const entityEl = document.createElement("a-entity")
        entityEl.setAttribute("visible",true)
        entityEl.setAttribute("geometry",{
          primitive: "plane",
          height:24,
          width:20
        })
        entityEl.setAttribute("material",{src:item.url})
        return entityEl
      },
      // Title Text Element
        createTitle: function(position,item){
          const entityEl = document.createElement("a-entity")
          entityEl.setAttribute("text",{
            font: "exo2bold",
            align:"center",
            width:60,
            color:"black",
            value: item.title
          })
          const elPosition=position
          elPosition.y=-20
          elPosition.x=-1
          entityEl.setAttribute("position",elPosition)
          entityEl.setAttribute("visible",true)
          return entityEl
        }

  
});
