// quick hack for the fourth section :> not proud of it
import { create } from 'zustand'

const useOpacityStore = create((set) => ({
  opacity: 0,
  setOpacity: (opacity) => set({ opacity }),
}))

export default useOpacityStore;
