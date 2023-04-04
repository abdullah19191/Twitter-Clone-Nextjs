import {create} from 'zustand';

interface LoginModelStore {
    isOpen:boolean;
    onOpen:() => void;
    onClose: () => void;
}

const useLoganModal = create<LoginModelStore>((set) => ({
    isOpen:true,
    onOpen:() => set({isOpen:true}),
    onClose:() => set({isOpen:false})
}));

export default useLoganModal;