// Show the popup when "Recommend Crops" button is clicked
document.querySelector('.donationBox button').onclick = function() {
    document.getElementById('cropPopup').style.display = 'block';
};

// Close the popup
function closePopup() {
    document.getElementById('cropPopup').style.display = 'none';
}

// Redirect to the full input page
function openFullInputPage() {
    window.location.href = "full-input.html"; // New page for full inputs
}

// Redirect to the soil type only page
function openSoilTypePage() {
    window.location.href = "soil-type-input.html"; // New page for soil type input
}
