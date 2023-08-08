
export default function Carousel() {
  const imageArray = [
    'https://i.picsum.photos/id/1074/367/267.jpg?hmac=2YamGD7W1FNtp9UvAVUDdYUm44xzyHCthHqFl6jVT0M',
        'https://i.picsum.photos/id/237/367/267.jpg?hmac=9Xp8JrOngpF2E_G3tRKnJMhZu5AX8FimulIG_sLj1xg',
        'https://i.picsum.photos/id/1084/367/267.jpg?hmac=VaCZRCvuoubMR-S6bXItyxmDVwAaumZU2x1ulWE0faU',
  ]
  let index = 0
  return(
  <div id="carouselExample" className="carousel slide">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={imageArray[0]} className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src={imageArray[1]} className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src={imageArray[2]} className="d-block w-100" alt="..."/>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  )
}