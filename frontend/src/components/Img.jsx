export function Img({imgUrl}) {
    const src = `public/img/${imgUrl}.jpg`;
    return(
        <img src={src} alt="imagen del producto" />
    )
}