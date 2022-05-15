import axios, { AxiosResponse } from "axios"

export interface ApiResponse{
    status: number,
    data: any | null
}

export const get = async <ResponseData>(url: string) => {
    try {
        const res = (await axios.get<AxiosResponse<ResponseData>>(url));
        return { status: res.status, data: res.data } as ApiResponse;
    } catch (error: any) {
        return { status: error?.response?.status ?? 500, data: error?.response?.data } as ApiResponse;
    }
}

export const post = async <ResponseData>(url: string, postData: any) => {
    try {
        const res = (await axios.post<AxiosResponse<ResponseData>>(url, postData));
        return { status: res.status, data: res.data } as ApiResponse;
    } catch (error: any) {
        return { status: error?.response?.status ?? 500, data: error?.response?.data } as ApiResponse;
    }
}