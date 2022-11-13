import create from 'zustand';
import { persist } from "zustand/middleware";

const useStore = create(persist((set, get) => ({

    user: "",
    timestamp: "",
    responses: [],
    setUser: (id) => set(() => ({ user: id })),
    setTimestamp: (time) => set(() => ({ timestamp: time })),
    setResponses: (response) => set((state) => ({
        responses: [
            {
                userid: response.userid,
                question_id: response.question_id,
                response_value: response.response_value,
                response_text: response.response_text,
                timestamp: response.timestamp
            }, ...state.responses,
        ]
    })
    ),
    updateResponse: response => set(state => ({
        responses: state.responses.map(item => {
            if (item.question_id === response.question_id) {
                return {
                    ...item,
                    response_value: response.response_value,
                    response_text: response.response_text
                };
            } else {
                return item;
            }
        })
    })),
    removeResponses: () => set(state => ({ responses: [] })),
    getStorage: () => sessionStorage,

})))

export default useStore;

