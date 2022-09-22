/* Desenvolva seu código aqui... 
<section class="modal">
        <div class="top-modal">
            <h3>Recupere sua senha</h3>
            <button class="close-modal">X</button>
        </div>
            <form class="form-login">
                <label for="E-mail">Digite o E-mail cadastrado na conta</label>
                <input type="text" placeholder="Digite o E-mail aqui...">
                <button id="recuperar-senha" class="esqueci-senha">Usar outro meio de recuperação</button>
                <button class="receber-email">Enviar para o E-mail</button>
            </form>

    </section>
    */
    function createModal(){
        const sectModal = document.createElement('section')
        const campModal = document.createElement('div')
        const divModal = document.createElement('div')
        const h3Modal = document.createElement('h3')
        const closeModal = document.createElement('button')
        const formModal = document.createElement('form')
        const labelModal = document.createElement('label')
        const inputModal = document.createElement('input')
        const outroModal = document.createElement('button')
        const recuperaModal = document.createElement('button')
    
        //class
        sectModal.classList = 'bg-black sect-modal'
        sectModal.id = 'modal_container'

        campModal.classList = 'modal'
    
        divModal.classList.add('top-modal')
    
        h3Modal.innerText = 'Recupere sua senha'
    
        closeModal.classList.add('close-modal')
        closeModal.id = 'close_modal'
        closeModal.innerText = 'X'
    
        formModal.classList.add('form-login')
    
        labelModal.innerText = 'Digite o E-mail cadastrado na conta'
    
        inputModal.placeholder = 'Digite o E-mail aqui...'
    
    
    
        recuperaModal.classList.add('receber-email')
        recuperaModal.innerText = 'Enviar para o E-mail'
    
        divModal.append(h3Modal, closeModal)
        formModal.append(labelModal, inputModal, outroModal, recuperaModal)
        campModal.append(divModal, formModal)
        sectModal.appendChild(campModal)
        
        return sectModal
    }
    
    function showModal(){
        const modalButton = document.getElementById('esqueceu')
        const mainContainer = document.getElementById('main-container')
    
        modalButton.addEventListener('click', (event) => {
            event.preventDefault()
            console.log("click")
            const telaModal = createModal()
            mainContainer.appendChild(telaModal)
            closeModal()
        })
    }
    
    function closeModal(){
        const modalClose = document.getElementById('close_modal')
        const campModal = document.getElementById('modal_container')
        modalClose.addEventListener('click', () =>{
            campModal.remove()
        })
    }
    showModal()