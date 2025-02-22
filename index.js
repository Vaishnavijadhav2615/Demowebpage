let totalPrice = 0;
let selectedBoxId = null;

// Function to toggle box visibility
function toggleBox(boxId, price) {
    const box = document.getElementById(boxId);

    // Collapse previously selected box
    if (selectedBoxId && selectedBoxId !== boxId) {
        document.getElementById(selectedBoxId).classList.remove('expanded');
    }

    // Toggle clicked box
    box.classList.toggle('expanded');

    // If box is expanded, update selectedBoxId
    if (box.classList.contains('expanded')) {
        selectedBoxId = boxId;
    } else {
        selectedBoxId = null;
    }
}

// Function to update total price when selecting a radio button
function selectBox(event, boxId, price) {
    event.stopPropagation(); // Prevents `toggleBox` from triggering

    document.getElementById("totalPrice").textContent = price.toFixed(2);
}
