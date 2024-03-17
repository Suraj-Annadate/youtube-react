import React from 'react'
import Avatar from 'react-avatar'

const ChatMessage = ({item}) => {
  return (
    <div className='flex items-center'>
        <div>
        <Avatar
            src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            size={20}
            round={true} className="cursor-pointer"
          />
        </div>
        <div className='flex items-center'>
            <h1 className='ml-2 font-bold text-sm'>{item.name}</h1>
            <p className='ml-2 py-2 text-sm'>{item.message}</p>
        </div>
    </div>
  )
}

export default ChatMessage