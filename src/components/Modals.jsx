import React from 'react'
import { useModal } from '../hooks/useModal';
import ContactForm from './ContactForm';
import { Modal } from './Modal'

const Modals = () => {

    const [isOpenModal1, openModal1, closeModal1] = useModal(true);
    const [isOpenModal2, openModal2, closeModal2] = useModal(false);
    const [isOpenContact, openContact, closeContact] = useModal(false);

  return (
    <div>
      <h2>Modales</h2>
      <button onClick={openModal1} >Modal 1</button>
      <Modal isOpen={isOpenModal1} closeModal={closeModal1} >
        <h3>Modal 1</h3>
        <p>Este es el contenido de mi modal</p>
        <img className='modal-img' src="https://placeimg.com/400/400/animals" alt="Animals" />
      </Modal>
      <button onClick={openModal2} >Modal 2</button>
      <Modal isOpen={isOpenModal2} closeModal={closeModal2} >
        <h3>Otro modal</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          quasi mollitia, unde earum veniam voluptatem officia saepe, illum
          fugit iusto aut! Modi, repellendus unde sed laboriosam iusto illo ipsa
          corrupti.
        </p>
        <img src="https://placeimg.com/400/400/nature" alt="Nature" />
      </Modal>

      <button onClick={openContact}>Modal Contacto</button>
      <Modal isOpen={isOpenContact} closeModal={closeContact}>
        <ContactForm/>
      </Modal>
    </div>
  );
}

export default Modals