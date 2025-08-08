import { getPokemonEpisodes } from './api/hianime.js';
import { getStreamingLink } from './api/megaplay.js';

document.addEventListener('DOMContentLoaded', async () => {
  const episodesContainer = document.getElementById('episodes');
  
  const episodes = await getPokemonEpisodes();
  if (!episodes) {
    episodesContainer.innerHTML = '<p>Failed to load episodes.</p>';
    return;
  }

  episodes.forEach(ep => {
    const card = document.createElement('div');
    card.classList.add('episode-card');
    card.innerHTML = `
      <img src="${ep.thumbnail}" alt="${ep.title}">
      <h3>${ep.title}</h3>
      <button data-id="${ep.id}">Watch</button>
    `;
    episodesContainer.appendChild(card);
  });

  episodesContainer.addEventListener('click', async e => {
    if (e.target.tagName === 'BUTTON') {
      const epId = e.target.dataset.id;
      const streamUrl = await getStreamingLink(epId);
      if (streamUrl) {
        window.location.href = `watch.html?url=${encodeURIComponent(streamUrl)}`;
      } else {
        alert('Unable to fetch streaming link.');
      }
    }
  });
});
