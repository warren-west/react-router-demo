import { useState } from 'react'
import Instruction from '../Components/Instruction'
import WithAuth from '../Auth/WithAuth'

function InstructionsPage() {
    // Hooks:
    const [showInstructions, setShowInstructions] = useState(true)

    // Local variables:
    let insOneSteps = [
        'Create a JSX file. (Using pascal casing)',
        'Create a function within that file.',
        'Ensure the function returns valid JSX. (Only one root element)',
        'Export (default) the function.',
        'Import the function as  a component throughout your project.',
    ]

    let insTwoSteps = ['Step 1', 'Step 2', 'Step 3']

    // Handlers:
    function showHideHandler() {
        console.log("Button clicked")
        // Update the values of the pieces of state:
        setShowInstructions(!showInstructions) // toggle logic
    }

    return (
        <>
            <h1>Instructions page</h1>
            <button onClick={showHideHandler}>Show / Hide Instructions</button>
            {
                // conditional rendering in React:
                showInstructions && <> {/* React fragment to group the things we want to hide together */}
                    <Instruction title="Creating your first React component" steps={insOneSteps} />
                    <Instruction title="Using Routing in React" steps={insTwoSteps} />
                </>
            }
        </>
    )
}

export default WithAuth(InstructionsPage)