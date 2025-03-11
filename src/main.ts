import './style.css'

const examForm = document.getElementById('examForm') as HTMLFormElement
const examNumberInput = document.getElementById('examNumber') as HTMLInputElement
const errorMessageDiv = document.getElementById('errorMessage') as HTMLDivElement
const celebrationScreen = document.getElementById('celebrationScreen') as HTMLDivElement

function showError(message: string) {
  errorMessageDiv.textContent = message
  errorMessageDiv.classList.add('show')
  examNumberInput.classList.add('error')
}

function clearError() {
  errorMessageDiv.textContent = ''
  errorMessageDiv.classList.remove('show')
  examNumberInput.classList.remove('error')
}

function showCelebration() {
  celebrationScreen.classList.add('show')
  
  setTimeout(() => {
    celebrationScreen.classList.remove('show')
  }, 3000)
}

examForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const examNumber = examNumberInput.value.trim()
  
  if (examNumber === '') {
    showError('受験番号を入力してください')
    return
  }

  if (!/^\d{10}$/.test(examNumber)) {
    showError('受験番号は10桁の数字で入力してください')
    return
  }

  clearError()
  showCelebration()
})

examNumberInput.addEventListener('input', (e) => {
  const input = e.target as HTMLInputElement
  input.value = input.value.replace(/[^\d]/g, '')
  if (input.value.length > 10) {
    input.value = input.value.slice(0, 10)
  }
  
  clearError()
})