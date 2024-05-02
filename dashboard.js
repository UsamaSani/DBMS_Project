// papersetting.html page script
const urlParams = new URLSearchParams(window.location.search);
const cardKey = urlParams.get('key');
const rulesString = urlParams.get('rules');

if (cardKey && rulesString) {
    const rules = JSON.parse(decodeURIComponent(rulesString));

    // Use rules to set access controls and save/fetch papers data
    // ...

    // Example: Check if the student's department, section, and ID match the rules
    if (
        user.department === rules.department &&
        user.section === rules.section &&
        rules.allowedStudentIds.includes(user.uid)
    ) {
        // Allow access
    } else {
        // Deny access
        alert("You don't have permission to access this page.");
        window.close();  // Close the window/tab
    }
}
