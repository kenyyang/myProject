import { v4 as uuidv4} from 'uuid'
export const getUUID = () => {
    //先从本地存储获取uuid （）
    let uuid_token = localStorage.getItem('UUIDTOKEN')
}