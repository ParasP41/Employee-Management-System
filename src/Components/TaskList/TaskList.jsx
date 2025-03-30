import React from 'react'

export default function TaskList() {
  return (
    <div id='tasklist' className='h-[60%] mt-10 overflow-x-auto flex items-center justify-start gap-6 flex-nowrap py-5 w-full'>
        <div id='taskcard' className='h-full overflow-y-scroll  flex-shrink-0 w-[400px] p-5 bg-yellow-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm'>20 feb 2024</h4>
            </div>
            <h2 className='mt-5 text-xl font-semibold'>Make a Video</h2>
            <p className='text-lg mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum neque facilis itaque suscipit Losto sunt quam necessitatibus illo repudiandae illum voluptate sed doloremque. At voluptates facilis culpa Lo illo obcaecati tempora fugiat quam impedit accusantium doloremque ullam, deleniti aperiam saepe porro? consectetur., </p>
        </div>
        <div id='taskcard' className='h-full overflow-y-scroll  flex-shrink-0 w-[400px] p-5 bg-yellow-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm'>20 feb 2024</h4>
            </div>
            <h2 className='mt-5 text-xl font-semibold'>Make a Video</h2>
            <p className='text-lg mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum neque facilis itaque suscipit Losto sunt quam necessitatibus illo repudiandae illum voluptate sed doloremque. At voluptates facilis culpa Lo illo obcaecati tempora fugiat quam impedit accusantium doloremque ullam, deleniti aperiam saepe porro? consectetur., </p>
        </div>
        <div id='taskcard' className='h-full overflow-y-scroll  flex-shrink-0 w-[400px] p-5 bg-yellow-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm'>20 feb 2024</h4>
            </div>
            <h2 className='mt-5 text-xl font-semibold'>Make a Video</h2>
            <p className='text-lg mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum neque facilis itaque suscipit Losto sunt quam necessitatibus illo repudiandae illum voluptate sed doloremque. At voluptates facilis culpa Lo illo obcaecati tempora fugiat quam impedit accusantium doloremque ullam, deleniti aperiam saepe porro? consectetur., </p>
        </div>
    </div>
  )
}
