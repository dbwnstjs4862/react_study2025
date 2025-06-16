// create : store를 생성해주는 함수
import { create } from "zustand"

const useCountStore = create((set)=>({
    count:0,
    increase:()=>set((state)=>({
        count:state.count + 1,
    })),
    increaseBy:(number)=>set((state)=>({
        count:state.count + number,
    })),
    decrease:()=>set((state)=>({
        count: state.count > 0 ? state.count - 1 : 0,
    })),
    decreaseBy:(number)=>set((state)=>({
        count:state.count-number > 0 ? state.count - number : 0,
    })),

}))

export default useCountStore;