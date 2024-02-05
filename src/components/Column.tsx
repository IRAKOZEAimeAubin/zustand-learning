import {useStore} from '../store/store'
import Task from './Task'

export default function Column({state}: {state: string}) {
  const tasks = useStore((store) =>
    store.tasks.filter((task) => task.state === state),
  )

  return (
    <div className='text-white bg-black/30 min-h-80 w-[33%] max-w-80 rounded-md p-2'>
      <p className='px-2 font-semibold'>{state}</p>
      {tasks.map((task) => (
        <Task title={task.title} key={task.title} />
      ))}
    </div>
  )
}
