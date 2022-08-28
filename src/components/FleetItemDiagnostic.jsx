const FleetItemDiagnostic = ({item}) => {
    const tiresToChange = item.tires.filter( (tire) => {
        if (tire.km >= 15000 ) {
            return tire
        }
    })

    const tiresToChangeList = tiresToChange.map((tire) => {
        return (
            <div key={tire.id}>{tire.position}</div>
        )
    })

    const tiresToCheck = item.tires.filter( (tire) => {
        if (tire.km >= 12000 && tire.km < 15000) {
            return tire
        }
    })

    const tiresToCheckList = tiresToCheck.map( (tire) => {
        return (
            <div key={tire.id}>{tire.position}</div>
        )
    })

    console.log(tiresToCheckList)

    if(tiresToChangeList.length > 0 || tiresToCheckList.length > 0) {
        return (
            <div>
                <h3>{item.type} diagnostic</h3>
                <div>
                    <p>tires to change:</p>
                    {tiresToChangeList}
                </div>
                <div>
                    <p>tires to check:</p>
                    {tiresToCheckList}
                </div>
            </div>
        )
    }
}

export default FleetItemDiagnostic;