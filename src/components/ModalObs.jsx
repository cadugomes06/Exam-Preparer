import PropTypes from 'prop-types';
import styles from './ModalObs.module.css';
import closeIcon from '../assets/close.svg'

const ModalObs = ({ isOpen, onClose, onChange, text, cleanUpText }) => { 

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
                  <textarea 
                     maxLength='200' 
                     placeholder='Este campo irá aparecer no final do seu documento PDF'
                     onChange={onChange}
                     value={text}>                      
                  </textarea>
                </div>
            </div>

               <div className={styles.wrapperButtons}>
                  <button onClick={cleanUpText}>
                    Limpar
                  </button>
                  <button onClick={onClose}>
                    Salvar
                  </button>
               </div>
        </section>
    </div>
  )
}

ModalObs.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    cleanUpText: PropTypes.func.isRequired,
    text: PropTypes.string
  };
  

export default ModalObs