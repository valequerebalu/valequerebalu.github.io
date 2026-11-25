export function renderProjects(projects, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = projects.map(project => `
    <article class="project-card">
      <div class="project-card__arch">
        <div class="arch-placeholder">
          <span>${project.architectureSummary}</span>
        </div>
      </div>
      <div class="project-card__body">
        <span class="project-card__status">🚧 ${project.status}</span>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-card__tech">
          ${project.techStack.map(tech => `<span>${tech}</span>`).join('')}
        </div>
        <div class="project-card__links">
          ${project.repoUrl
            ? `<a href="${project.repoUrl}" target="_blank" rel="noopener">Ver en GitHub →</a>`
            : `<span class="link-secondary">Repositorio en preparación</span>`}
        </div>
      </div>
    </article>
  `).join('');
}