let currentStep = 0;

const steps = document.querySelectorAll('.form-step');
const indicators = document.querySelectorAll('.step');

function showStep(step) {
  steps.forEach((s, index) => {
    s.classList.toggle('active', index === step);
    indicators[index].classList.toggle('active', index === step);
  });
}

function nextStep() {
  if (!validateStep()) return;
  currentStep++;
  showStep(currentStep);
}

function prevStep() {
  currentStep--;
  showStep(currentStep);
}

function validateStep() {
  if (currentStep === 0) {
    if (name.value === '' || email.value === '') {
      alert('Please fill all fields');
      return false;
    }
  }
  if (currentStep === 1) {
    if (password.value === '' || password.value !== confirmPassword.value) {
      alert('Passwords do not match');
      return false;
    }
  }
  return true;
}

showStep(currentStep);
