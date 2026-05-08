import "./Instruction.css"

function Instruction(props) {

    return (
        <>
            { /* Title: */}
            <h3>{ props.title }</h3>
            { /* Steps: */}
            <ol>{ props.steps.map((item, index) => <li key={index}>{item}</li>) }</ol>
        </>
    )
}

export default Instruction