function Fruits() {
    const fruitNames = ["Melocotón", "Fresa", "Mango"]

    return (
        <>
            <h1>listado de frutas</h1>
            {
                fruitNames.map((item, index) => {
                    return <p key={index}>{item}</p>
                })
            }
        </>
    )
}
export default Fruits