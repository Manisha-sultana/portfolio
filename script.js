const container = document.getElementById("projectContainer");

fetch('Project.json')
  .then(response => response.json())
  .then(projects => {
    projects.forEach(p => {
      const card = document.createElement("div");
      card.className = "project-card";

      card.innerHTML = `
        <h3>${p.title}</h3>
        <p class="tech">${p.tech}</p>
        <p>${p.desc}</p>
        <ul>
          ${p.points.map(pt => `<li>${pt}</li>`).join("")}
        </ul>
        <a href="${p.github}" target="_blank">GitHub</a>
      `;

      container.appendChild(card);
    });
  })
  .catch(error => console.error('Error loading projects:', error));

