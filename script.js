const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const esteticaInput = document.getElementById('estetica-input');
const vendasInput1 = document.getElementById('vendas-input1');
const vendasInput2 = document.getElementById('vendas-input2');
const totalValue = document.getElementById('total-value');

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', updateTotal);
});

esteticaInput.addEventListener('input', updateTotal);
vendasInput1.addEventListener('input', updateTotal);
vendasInput2.addEventListener('input', updateTotal);

function updateTotal() {
  let total = 0;

  checkboxes.forEach(checkbox => {
    if (checkbox.checked) {
      total += parseInt(checkbox.value);
    }
  });

  const esteticaValue = parseInt(esteticaInput.value);

  if (!isNaN(esteticaValue)) {
    total += esteticaValue * 4000;
  }

  const vendasValue1 = parseInt(vendasInput1.value);
  const vendasValue2 = parseInt(vendasInput2.value);

  if (!isNaN(vendasValue1)) {
    total += vendasValue1 * 4500;
  }

  if (!isNaN(vendasValue2)) {
    total += vendasValue2 * 500;
  }

  // Formatar o número para o padrão brasileiro
  const totalFormatado = total.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  // Adicionar o símbolo de R$ antes do valor
  const totalComSimbolo = `R$ ${totalFormatado}`;

  totalValue.textContent = totalComSimbolo;
}
const limparBtn = document.getElementById('limpar-btn');

// Adicionar um evento de clique para o botão de Limpar
limparBtn.addEventListener('click', limparCheckboxes);

// Função para desmarcar todas as checkboxes
function limparCheckboxes() {
  checkboxes.forEach(checkbox => {
    checkbox.checked = false;
  });

  // Após limpar as checkboxes, atualizar o total
  updateTotal();
}