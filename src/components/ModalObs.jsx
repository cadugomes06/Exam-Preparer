import PropTypes from 'prop-types';
import styles from './ModalObs.module.css';
import closeIcon from '../assets/close.svg'

const ModalObs = ({ isOpen, onClose }) => {

  return (
isOpen && <div className={styles.containerModal}>
         <section className={styles.wrapperField}>
            <div>
                <div className={styles.wrapperTitle}>
                    <h3>Adicione uma observação</h3>
                    <img 
                       src={closeIcon} 
                       alt="icone-de-fechar-modal"
                       onClick={onClose} />
                </div>

                <div className={styles.wrapperTextarea}>
                <textarea maxLength='200' placeholder='Este campo irá aparecer no final do seu documento PDF'></textarea>
                </div>
            </div>
        </section>
    </div>
  )
}

ModalObs.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
  };
  

export default ModalObs