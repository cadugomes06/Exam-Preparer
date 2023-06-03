import React, { useState } from 'react'
import Header from '../../components/Header'
import Menu from '../../components/Menu';
import styles from './UserConfig.module.css'

const UserConfig = () => {
  const [name, setName] = useState('')
  const [unit, setUnit] = useState('unidade')
  const [open, setOpen] = useState('')
  const [close, setClose] = useState('')
  const [openSaturday, setOpenSaturday] = useState('')
  const [closeSaturday, setCloseSaturday] = useState('')

  function handleSaveDataLocalStorage(e) {
    e.preventDefault()

    if(name === '' || unit === 'unidade' || open === '' || close === '' || openSaturday === '' || closeSaturday === '') {
      alert('Preencha todos os campos corretamente!')
    } else {
      const data = {
         name,
         unit,
         open, 
         close,          
         openSaturday, 
         closeSaturday
        }
      window.localStorage.setItem('UserUnitData', JSON.stringify(data))
      window.alert("Seus dados foram salvos com sucesso!")
    }
  }

  return (
    <section>
        <Header />
        <Menu />


      <div className={styles.wrapper}>
        <div className={styles.termosContainer}>
          <div className={styles.titleTermos}>
            <h1> Configurações</h1>
          </div>

          <div className={styles.formContainer}>
            <div className={styles.form}>
            <form>
            <label htmlFor='name'>Meu nome</label>
            <input type="text"
                   name=""
                   id="name"
                   value={name}
                   onChange={(e) => setName(e.target.value)}
                    />

            <label htmlFor='unit'>Minha Unidade</label>
            <select 
               name=""
               id="unit"
               value={unit}
               onChange={(e) => setUnit(e.target.value)}
               >
              <option disabled value='unidade'>Unidade</option>
              <option value='cavaleiros'> Cavaleiros</option>
              <option value='matriz'> Matriz</option>
              <option value='solar'> Solar </option>
              <option value='aeroporto'> Aeroporto </option>
              <option value='saojoao'> São João </option>
              <option value='sus'> Velho Campos (SUS) </option>
            </select>

            <h4>Horário de segunda a sexta</h4>
            <label htmlFor='open'>Entrada</label>
            <input type="time"
                   name="" 
                   id="open" 
                   value={open}
                   onChange={(e) => setOpen(e.target.value)}
                    />
            <label htmlFor='close'>Saída</label>
            <input type="time"
                   name="" 
                   id="close"
                   value={close} 
                   onChange={(e) => setClose(e.target.value)}
                   />

            <h4>Horário no Sábado</h4>
            <label htmlFor='openS'>Entrada</label>
            <input type="time"
                   name=""
                   id="openS" 
                   value={openSaturday} 
                   onChange={(e) => setOpenSaturday(e.target.value)}
                   />
            <label htmlFor='closeS'>Saída</label>
            <input type="time" 
                   name=""
                   id="closeS" 
                   value={closeSaturday} 
                   onChange={(e) => setCloseSaturday(e.target.value)}
                   />

            <button className={styles.btnForm}
                    onClick={(e) => handleSaveDataLocalStorage(e)}>
                      Salvar dados
            </button>
            </form>
            </div>
          </div>

        </div>
      </div>
  

    </section>
  )
}

export default UserConfig