// Step 1: Initialize an asynchronous function to fetch and display user data
async function fetchUserData() {
    // Step 2: Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Step 3: Select the data container element
    const dataContainer = document.getElementById('api-data');

    try {
        // Step 4: Fetch data using try-catch
        const response = await fetch(apiUrl); // Fetch data from API
        const users = await response.json(); // Convert response to JSON

        // Step 5: Clear loading message
        dataContainer.innerHTML = ''; // Clear previous content

        // Step 6: Create and append user list
        const userList = document.createElement('ul'); // Create <ul> element

        users.forEach(user => {
            const listItem = document.createElement('li'); // Create <li> for each user
            listItem.textContent = user.name; // Set text content to user's name
            userList.appendChild(listItem); // Append <li> to <ul>
        });

        dataContainer.appendChild(userList); // Append <ul> to dataContainer
    } catch (error) {
        // Step 7: Error handling
        dataContainer.innerHTML = ''; // Clear previous content
        dataContainer.textContent = 'Failed to load user data.'; // Display error message
        console.error('Error fetching data:', error); // Log the error for debugging
    }
}

// Step 8: Invoke fetchUserData on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    fetchUserData(); // Call fetchUserData when DOM content is loaded
});