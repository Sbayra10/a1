// index.js
document.getElementById('downloadButton').addEventListener('click', async function() {
  try {
    const dashboard = tableau.extensions.dashboardContent.dashboard;
    const worksheets = dashboard.worksheets;
    for (let worksheet of worksheets) {
      const pdfBlob = await worksheet.getPDFAsync();
      const url = URL.createObjectURL(pdfBlob);
      const a = document.createElement('a');
      a.href = url;
      a.download = worksheet.name + '.pdf';
      document.body.appendChild(a);
      a.click();
      setTimeout(() => {
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      }, 100);
    }
    console.log('All workbooks downloaded as PDF.');
  } catch (error) {
    console.error('Error downloading workbooks as PDF:', error);
  }
});
