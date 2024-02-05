import {create} from 'zustand'

const store = (
  set: (
    arg0: (store: never) => {
      tasks: {
        title: string
        state: string
      }[]
    },
  ) => unknown,
) => ({
  tasks: [{title: 'TestTask', state: 'DONE'}],
  addTask: (title: string, state: string) =>
    set(
      (store: {
        tasks: {
          title: string
          state: string
        }[]
      }) => ({tasks: [...store.tasks, {title, state}]}),
    ),
})

export const useStore = create(store)
