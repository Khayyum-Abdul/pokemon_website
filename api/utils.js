// api/utils.js
export async function apiFetch(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error("API Fetch Error:", error);
        return null;
    }
}
