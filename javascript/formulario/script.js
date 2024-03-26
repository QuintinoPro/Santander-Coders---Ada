const validate = () => {
    let forms = document.querySelectorAll('.needs-validation');
    forms.forEach((form) => {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            if (form.checkValidity()) {
                const payload = {
                    name: form.querySelector('#nome').value,
                    surname: form.querySelector('#surname').value,
                    birthDate: form.querySelector('#birthday').value,
                    profession: form.querySelector('#profission').value,
                    documentNumber: form.querySelector('#cpf').value,
                    email: form.querySelector('#email').value,
                    password: form.querySelector('#pwd').value,
                    phone: form.querySelector('#telefone').value,
                    address: form.querySelector('#address').value,
                };
                localStorage.setItem('userData', JSON.stringify(payload));
                alert(`Cadastro realizado com sucesso!`);
                form.reset();
            } else {
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        });
    });
};


const showUser = () => {
    const userFromStorage = JSON.parse(localStorage.getItem('userData'));
    if(!userFromStorage) {
        alert('Sem usuário cadastrado');
        return;
    }
    const message = 
    `
     Nome do usuário: ${userFromStorage.name}
     Sobrenome do usuário: ${userFromStorage.surname} 
     Data de nascimento: ${userFromStorage.birthDate}
    `
    alert(message);
}

const removeUser = () => {
    const response = confirm('Você realmente deseja remover o usuário do storager? ');
    response ? localStorage.removeItem('userData') : '';
}
window.addEventListener('load', validate);