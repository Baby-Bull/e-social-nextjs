import { api } from "src/helpers/api";

export const sendMatchingRequest = async (userId: string, body: any) => {
    try {
        const res = await api.post(`/user/match/${userId}`, body);
        return res.data;
    } catch (error) {
        return error;
    }
};


export const getMatchingRequestSent = async (limit: number, cursor: string, status: string) => {
    try {
        const res = await api.get(`/user/me/match-requests/sent?limit=${limit}&cursor=${cursor}&status=${status}`);
        return res.data;
    } catch (error) {
        return error;
    }
}

export const getMatchingRequestReceived = async (limit: number, cursor: string, status: string) => {
    try {
        const res = await api.get(`/user/me/match-requests/received?limit=${limit}&cursor=${cursor}&status=${status}`);
        return res.data;
    } catch (error) {
        return error;
    }
}

export const rejectMatchingRequestReceived = async (matchRequestReceivedId: string)=>{
    try {
        const res = await api.post(`/user/match-requests/${matchRequestReceivedId}/reject`);
        return res.data;
    } catch (error) {
        return error;
    }
}