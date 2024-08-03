const button = document.querySelector(".btn")
const input = document.querySelector('.input')
const lista = document.querySelector('.lista')
const trash = document.querySelector('.trash')

var cont = 0

const CreatDiv = () => {
    if (valueInput == '' || input.value == ''){
        alert("Digite algo para adicionar a lista.")
    } else {
        if (cont < 9 ) {
            const Ulelement = document.createElement('ul')
            Ulelement.classList.add('produtos')
            lista.appendChild(Ulelement);

            const Lielement = document.createElement('li')
            Lielement.textContent = `${valueInput}`
            Ulelement.appendChild(Lielement);
            input.value = ''
            cont++

            const trash = document.createElement("p")
            trash.textContent = '🗑️'
            trash.classList.add('trash');
            Ulelement.appendChild(trash);

            trash.addEventListener('click', () => {
                Ulelement.remove()
                cont--
            })
        } else {
            alert ('número máximo de compras ultrapassado ')
        }
        
    }
}

var valueInput = ''

const ContentInput = () => {
    valueInput = input.value
}

input.addEventListener('input', ContentInput)
button.addEventListener("click", CreatDiv)
