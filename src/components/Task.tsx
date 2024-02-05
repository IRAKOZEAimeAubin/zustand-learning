import {useStore} from '../store/store'

export default function Task({title}: {title: string}) {
  const task = useStore((store) =>
    store.tasks.find((task) => task.title === title),
  )
  return (
    <div className='bg-[#22272B] rounded p-2 flex flex-col justify-between'>
      <div className='font-medium'>{task?.title}</div>
      <div className='flex justify-between'>
        <div></div>
        <div
          className={`text-xs p-1 rounded-[0.25rem] ${
            task?.state === 'PLANNED'
              ? 'bg-blue-400'
              : task?.state === 'ONGOING'
              ? 'bg-orange-400'
              : 'bg-green-400'
          }`}
        >
          {task?.state}
        </div>
      </div>
    </div>
  )
}
