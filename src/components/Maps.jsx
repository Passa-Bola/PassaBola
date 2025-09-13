import '../css/maps.css'

function Maps() {
  return (
    <div className="map">
        <h1>Quadras perto de mim</h1>
        <iframe width='90%' style={{border:'none'}} src="https://www.openstreetmap.org/export/embed.html?bbox=-47.53509521484375%2C-23.966191553486702%2C-45.76904296875001%2C-23.1605790877342&amp;marker=-23.56400285921981%2C-46.652069091796875"></iframe>
    </div>
  )
}

export default Maps
