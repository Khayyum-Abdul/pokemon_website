/**
 * Fetch Pokémon episode list from a local JSON file (episodes/pokemon.json).
 * This keeps things simple and avoids API hosting complications.
 */
export async function getPokemonEpisodes() {
  try {
    const res = await fetch('episodes/pokemon.json');
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error('Error in getPokemonEpisodes:', err);
    return null;
  }
}
