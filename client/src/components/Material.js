const Material = ({cislovporadi, name, eventklik}) => {
    return (
        <div>
            {cislovporadi} - {name}
            <div className="btn" onClick={() => {
                eventklik(name)
            }}>Zobraz detail</div>
        </div>
    )
}

export default Material
