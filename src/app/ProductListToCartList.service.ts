export class ProductListToCartListService
{
  serviceTotalCount = 0;
  filteredStatus : string = "";
  Carts = [];
  
  Products = [
    {
      image : 'https://rendering.documents.cimpress.io/v1/vp/preview?scene=https://scene.products.cimpress.io/v1/scenes/9ca8ee8f-e03a-4ddf-8e9c-2fdbe5f15e53&width=690&height=690&quality=80',
      name : 'Shirt',
      price : 529
    },
    {
      image : 'https://de9luwq5d40h2.cloudfront.net/catalog/product/large_image/05_407044.jpg',
      name : 'Shirt',
      price : 499
    },
    {
      image : 'https://static8.cilory.com/293996-large_default/nologo-blue-casual-shirt.jpg',
      name : 'Shirt',
      price : 349
    },
    {
      image : 'https://images.bewakoof.com/original/apna-time-ayega-half-sleeve-t-shirt-men-s-printed-t-shirts-208166-1547201568.jpg',
      name : 'Shirt',
      price : 499
    },
    {
      image : 'https://rukminim1.flixcart.com/image/714/857/jao8uq80/shoe/3/r/q/sm323-9-sparx-white-original-imaezvxwmp6qz6tg.jpeg?q=50',
      name : 'Shoes',
      price : 999
    },
    {
      image : 'https://n4.sdlcdn.com/imgs/h/s/4/Nike_Air_zoom_33_pegasus_SDL003861472_1_cd854-2a660.jpeg',
      name : 'Shoes',
      price : 1299
    },
    {
      image : 'https://images.josbank.com/is/image/JosBank/40KN_38_JOSEPH_ABBOUD_HERITAGE_BROWN_MAIN?$browse_thumbnail$?$browse_thumbnail$',
      name : 'Shoes',
      price : 699
    },
    {
      image : 'https://images.vans.com/is/image/Vans/D3HBKA-HERO?$583x583$',
      name : 'Shoes',
      price : 1599
    }
  ];

  pushToCart(CartsItem : {image : string , name : string , price : number})
  {
    this.Carts.push(CartsItem);
    this.serviceTotalCount += CartsItem.price;
  }

  cartCount()
  {
    return this.Carts.length;
  }

  setFilteredStatus(filteredStatus : string)
  {
    this.filteredStatus = filteredStatus;
  }

  getFilteredStatus()
  {
    return this.filteredStatus;
  }

  emptyCart()
  {
    this.Carts.splice(0,this.Carts.length);
  }

}