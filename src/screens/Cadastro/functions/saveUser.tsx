import { api } from "../../../services/api";

export const saveUser = async (data: any, setLoading: any, setError: any, setSuccess: any) => {
    setLoading(true);

    try{
        await api.post("/cadastrar", data)
        setLoading(false)
        setSuccess(true)
    } catch(e){
        setLoading(false)
        setError(true)
    }
}