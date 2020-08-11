import React from 'react'
import toMoney from 'utils/money'
import api from 'services/api'

import whatsappIcon from 'assets/images/icons/whatsapp.svg'

import './styles.css'

export interface Teacher {
  id: number
  name: string
  avatar: string
  bio: string
  cost: number
  subject: string
  whatsapp: string
}

interface TeacherItemProps {
  teacher: Teacher
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  function createNewConnection() {
    api.post('connections', {
      user_id: teacher.id,
    })
  }

  return (
    <>
      <article className='teacher-item'>
        <header>
          <img src={teacher.avatar} alt={teacher.name} />
          <div>
            <strong>{teacher.name}</strong>
            <span>{teacher.subject}</span>
          </div>
        </header>

        <p>{teacher.bio}</p>

        <footer>
          <p>
            Preço/hora
            <strong>{toMoney(teacher.cost)}</strong>
          </p>
          <a
            onClick={createNewConnection}
            href={`https://api.whatsapp.com/send?phone=55${teacher.whatsapp}`}
            rel='noopener noreferrer '
            target='_blank'
          >
            <img src={whatsappIcon} alt='whatsapp' />
            Entrar em contato
          </a>
        </footer>
      </article>
    </>
  )
}

export default TeacherItem
