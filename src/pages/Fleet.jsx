import FleetList from "../components/FleetList";

const fleet = [
    {
        id: 'ag-20-dto',
        type: 'truck',
        km: 15000,
        tires: [
            {
                id: '312312',
                km: 12000,
                position: 'L1',
                depth: '10mm',
                mountDate: '20-07-2022',
                lastCheck: '30-08-2022'
            },
            {
                id: '312313',
                km: 8000,
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
                km: 19000,
                position: 'R2',
                depth: '7mm',
                mountDate: '1-07-2022',
                lastCheck: '5-08-2022'
            },
        ]
    },

    {
        id: 'ag-07-dto',
        type: 'trailer',
        km: 25000,
        tires: [
            {
                id: '312312',
                km: 12000,
                position: 'L1',
                depth: '10mm',
                mountDate: '20-07-2022',
                lastCheck: '30-08-2022'
            },
            {
                id: '312313',
                km: 8000,
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
                km: 19000,
                position: 'R2',
                depth: '7mm',
                mountDate: '1-07-2022',
                lastCheck: '5-08-2022'
            },
        ]
    },

    {
        id: 'ag-01-dto',
        type: 'truck',
        km: 55000,
        tires: [
            {
                id: '312312',
                km: 12000,
                position: 'L1',
                depth: '10mm',
                mountDate: '20-07-2022',
                lastCheck: '30-08-2022'
            },
            {
                id: '312313',
                km: 8000,
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
                km: 19000,
                position: 'R2',
                depth: '7mm',
                mountDate: '1-07-2022',
                lastCheck: '5-08-2022'
            },
        ]
    }
]


function Fleet() {
    return (
        <div>
            <FleetList fleet={fleet}/>
        </div>
    );
}

export default Fleet;
