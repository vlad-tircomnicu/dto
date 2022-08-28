import TiresStatus from "./TiresStatus";
import FleetItemDiagnostic from "./FleetItemDiagnostic";

const FleetItemDetails = ({item}) => {
    return (
        <div>
            <p>{item.km}</p>
            <h2>{item.id}</h2>
            <div>
                <h3>tires status</h3>
                <TiresStatus tires={item.tires}/>
            </div>
            <FleetItemDiagnostic item={item} />
        </div>
    )
}

export default FleetItemDetails;