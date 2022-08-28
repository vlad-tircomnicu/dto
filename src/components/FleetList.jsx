import { Link } from 'react-router-dom';
import TiresStatus from "./TiresStatus";


const FleetList = ({fleet}) => {
    const fleetList = fleet

    return (
        fleetList.map( (item) => {

            return (
                <div key={item.id} className="">
                    <h3 className="">
                        {item.id}
                    </h3>

                    <p className="">
                        {item.km}
                    </p>

                    <TiresStatus tires={item.tires} />

                    <Link to={`/fleet/${item.type}s/${item.id}`} item={item} >vezi detalii</Link>
                </div>
            )
        })
    )
}

export default FleetList