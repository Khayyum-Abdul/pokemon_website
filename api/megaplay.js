// api/megaplay.js
import { MEGAPLAY_API_BASE } from "./config.js";
import { apiFetch } from "./utils.js";
// api/megaplay.js
export async function getStreamingLink(episodeId) {
    try {
        // This is a placeholder API URL - replace with actual MegaPlay API call
        const res = await fetch(`https://api.megaplay.com/stream/${episodeId}`);
        if (!res.ok) throw new Error("Failed to fetch streaming link");
        return await res.json();
    } catch (err) {
        console.error("Error fetching streaming link:", err);
        return null;
    }
}

// Get streaming link for a given episode ID
export async function getStreamingLink(episodeId) {
    const url = `${MEGAPLAY_API_BASE}/stream/${episodeId}`;
    return await apiFetch(url);
}
