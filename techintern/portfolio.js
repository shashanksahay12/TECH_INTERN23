const downloadButton = document.getElementById('download-button');
const portfolioFile = 'myportfolio.pdf';

downloadButton.addEventListener('click', () => {
  fetch(portfolioFile)
    .then(response => response.blob())
    .then(blob => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'myportfolio.pdf';
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    });
});