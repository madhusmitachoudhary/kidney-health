function generateDietPlan() {
  const age = document.getElementById('age').value;
  const medication = document.getElementById('medication').value;
  const allergies = document.getElementById('allergies').value;

  let dietPlan = `Diet Plan for Age: ${age}<br>`;

  if (medication.toLowerCase().includes('blood pressure')) {
      dietPlan += 'Include foods rich in potassium, magnesium, and fiber.<br>';
  }

  if (allergies.toLowerCase().includes('dairy')) {
      dietPlan += 'Avoid dairy products.<br>';
  }

  dietPlan += 'Include plenty of fruits and vegetables, lean proteins, and whole grains.<br>';

  document.getElementById('diet-plan').innerHTML = dietPlan;
}