const attributes = {
    name: "loading",
    color: "Red",
    textAlign: "center",
}

const Shimmer = () => {
    return <div className="main-container">
        {Array(15).fill("").map((e, index) => <div key={index} className="shimmer-card"></div>)}

    </div>

    
}

export default Shimmer;