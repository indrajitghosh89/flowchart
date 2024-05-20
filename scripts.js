// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    // Initialize mermaid
    mermaid.initialize({ startOnLoad: true });

    // Handle submit button click
    document.getElementById('submit-button').addEventListener('click', () => {
        const description = document.getElementById('description').value.trim();

        // Validate the input before processing
        if (!description) {
            alert('Please enter a valid description.');
            return;
        }

        try {
            // Format the input as per Mermaid.js syntax
            const flowchartScript = `graph TB\n${description}`;

            // Display the flowchart
            const flowchartContainer = document.getElementById('flowchart');
            flowchartContainer.innerHTML = '';
            mermaid.render('flowchart-svg', flowchartScript, (svgCode) => {
                flowchartContainer.innerHTML = svgCode;
            });
        } catch (error) {
            console.error('Failed to render flowchart:', error);
            alert('There was an error rendering the flowchart. Please check your input and try again.');
        }
    });

    // Additional download button logic (PDF, Word doc) remains as before.
});
