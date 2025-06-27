import './Explore.css'


function Ecard({ Image, Trip_name = "Dharamshala/ Mcleodganj" }) {
    const [part1, part2] = Trip_name.split(" ");

    return (

        <div className='Outer_Card' style={{
            background: `url(${Image})`, backgroundPosition: "center",
            backgroundRepeat: "no-repeat", backgroundSize: "cover"
        }}>
        <div className='Inner_Card'>
                {part1.trim()} <br />
                {part2.trim()}
        </div>
        </div>
    );
}

export default Ecard;