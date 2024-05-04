import React from 'react'

function ChatItem({ item , selected, setSelected}) {

  return (
    <div className={`flex px-4 py-4  ${selected === item ? "bg-blue-600 text-white" : " bg-white text-black"} hover:bg-blue-100 hover:text-black  `}onClick={ () => setSelected(item)} >

      <div className='flex-2 relative'>
        <img width={50} height={50} src={item.image? item.image : "./Avatar.png"} alt="ImageItem" />
        {
    item.active && <div className='bg-green-400 w-3 h-3 flex  rounded-full absolute right-1 bottom-0'></div>
        }
      </div>

      <div className='flex-1 pl-4 '>
        <h6 className=' font-semibold text-lg '>{item.heading? item.heading : "Unknown"}</h6>
        <p className=''>{item.para ? item.para : ""}</p>
      </div>

      <div className='flex-2 flex flex-col justify-between items-end'>
      <p className=' text-sm'>{item.time? item.time : "00:00mm"}</p>
      {
        item.messages && <div className='bg-green-400 text-white w-5 h-5 flex items-center justify-center rounded-full '>{item.messages}</div>
      }
      </div>

    </div>
  )
}

export default ChatItem
