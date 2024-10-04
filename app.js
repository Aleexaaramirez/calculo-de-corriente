let resistanceCount = 1;

function addResistance() {
    resistanceCount++;
    const container = document.getElementById('resistancesContainer');
    
    const newLabel = document.createElement('label');
    newLabel.textContent = `Resistencia ${resistanceCount} (Ω):`;
    
    const newInput = document.createElement('input');
    newInput.type = 'number';
    newInput.className = 'resistanceInput';
    newInput.id = `resistance${resistanceCount}`;
    newInput.required = true;
    
    container.appendChild(newLabel);
    container.appendChild(newInput);
}

function calculateCurrent() {
    const voltage = parseFloat(document.getElementById('voltage').value);
    const resistanceInputs = document.querySelectorAll('.resistanceInput');
    
    let totalResistance = 0;
    
    resistanceInputs.forEach(input => {
        totalResistance += parseFloat(input.value);
    });
    
    if (totalResistance === 0) {
        alert("La resistencia total no puede ser 0.");
        return;
    }

    // Cálculo de la corriente usando la ley de Ohm
    const current = voltage / totalResistance;

    // Mostrar el resultado
    document.getElementById('currentOutput').textContent = `La corriente es: ${current.toFixed(2)} A`;
}
