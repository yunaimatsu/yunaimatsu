export function setupCopyButton(copyButtonId: string, contentToCopyId: string): void {
    // Check if the code is running in a browser environment
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
        const copyButton = document.getElementById(copyButtonId);

        if (copyButton) {
            copyButton.addEventListener('click', () => {
                const contentElement = document.getElementById(contentToCopyId);
                const content = contentElement ? contentElement.textContent : '';

                if (content) {
                    navigator.clipboard.writeText(content).then(() => {
                        alert('Content copied to clipboard!');
                    }).catch((err) => {
                        console.error('Failed to copy: ', err);
                    });
                } else {
                    console.error('Content to copy is not available.');
                }
            });
        } else {
            console.error(`Element with ID "${copyButtonId}" not found.`);
        }
    }
}
