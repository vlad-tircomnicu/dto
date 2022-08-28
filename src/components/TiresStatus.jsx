const tiresStatus = ({tires}) => {
    const tiresList = tires

    return (
        tiresList.map((tire) =>
            <div key={tire.id} className="">
                <p className="">
                    {tire.position}
                </p>
            </div>
        )
    )
}

export default tiresStatus;