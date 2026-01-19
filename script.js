fetch("projects.json")
    .then(res => res.json())
    .then(data => {
        const container = document.getElementById("projects");
        data.forEach(p => {
            container.innerHTML += `
        <div class="project">
          <h3>${p.title}</h3>
          <p><b>Tech:</b> ${p.tech}</p>
          <ul>
            ${p.desc.map(d => `<li>${d}</li>`).join("")}
          </ul>
          <a href="${p.github}" target="_blank">GitHub</a>
        </div>
      `;
        });
    });
