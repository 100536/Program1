document.getElementById('budgetForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const educationBudget = parseFloat(document.getElementById('education').value) || 0;
    const healthBudget = parseFloat(document.getElementById('health').value) || 0;
    
  
    const totalBudget = 330;
  
    const totalSpent = educationBudget + healthBudget;
  
    const remainingBudget = totalBudget - totalSpent;
  
    const resultElement = document.getElementById('result');
    resultElement.textContent = `Overgebleven budget: ${remainingBudget} miljarden euro.`;
  });