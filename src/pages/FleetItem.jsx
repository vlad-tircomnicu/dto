import {useParams} from 'react-router-dom';
import FleetItemDetails from "../components/FleetItemDetails";

function FleetItem() {
    const {id} = useParams();
    const item = {
        id: id,
        type: 'truck',
        km: 55000,
        tires: [
            {
                id: '312312',
                km: 2000,
                position: 'L1',
                depth: '10mm',
                mountDate: '20-07-2022',
                lastCheck: '30-08-2022'
            },
            {
                id: '312313',
                km: 4500,
                position: 'L2',
                depth: '14mm',
                mountDate: '16-07-2022',
                lastCheck: '24-08-2022'
            },
            {
                id: '312314',
                km: 18000,
                position: 'R1',
                depth: '5mm',
                mountDate: '25-07-2022',
                lastCheck: '19-08-2022'
            },
            {
                id: '312315',
                km: 4000,
                position: 'R2',
                depth: '7mm',
                mountDate: '1-07-2022',
                lastCheck: '5-08-2022'
            },
        ]
    }
    return (
        <div>
           <FleetItemDetails item={item}/>
        </div>
    );
}

export default FleetItem;
