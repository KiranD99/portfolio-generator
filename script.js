document.getElementById('generate-btn').addEventListener('click', () => {
    const name = document.getElementById('name').value;
    const bio = document.getElementById('bio').value;
    const skills = document.getElementById('skills').value.split(',');
    const projects = document.getElementById('projects').value.split(',');
    const contact = document.getElementById('contact').value;
  
    const portfolioHTML = `
      <h1>${name}</h1>
      <p>${bio}</p>
      <h2>Skills</h2>
      <ul>${skills.map(skill => `<li>${skill.trim()}</li>`).join('')}</ul>
      <h2>Projects</h2>
      <ul>${projects.map(project => `<li>${project.trim()}</li>`).join('')}</ul>
      <h2>Contact</h2>
      <p>${contact}</p>
    `;
  
    document.getElementById('portfolio-preview').innerHTML = portfolioHTML;
    document.getElementById('download-btn').style.display = 'block';
  });
  
  document.getElementById('download-btn').addEventListener('click', () => {
    const previewHTML = document.getElementById('portfolio-preview').innerHTML;
    const blob = new Blob([`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Portfolio</title>
      </head>
      <body>${previewHTML}</body>
      </html>
    `], { type: 'text/html' });
  
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'portfolio.html';
    link.click();
  });
  