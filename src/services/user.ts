import { api } from "src/helpers/api";

export const getUserFavorite = async (limit: number, cursor: string) => {
    try {
        const res = await api.get(`/user/favorite?limit=${limit}&cursor=${cursor}`);
        return res.data;
    } catch (error) {
        return error;
    }
}

export const getUserFavoriteTags = async (limit: number, cursor: string) => {
    try {
        const res = await api.get(`/user/favorite/tag-users?limit=${limit}&cursor=${cursor}`);
        return res?.data;
    } catch (error) {
        return error;
    }
}

export const getUserProvince = async (limit: number, cursor: string) => {
    try {
        const res = await api.get(`/user/province-users?limit=${limit}&cursor=${cursor}`);
        return res?.data;
    } catch (error) {
        return error;
    }
}

export const getUserNewMembers = async (limit: number, cursor: string) => {
    try {
        const res = await api.get(`/user/members-new?limit=${limit}&cursor=${cursor}`);
        return res?.data;
    } catch (error) {
        return error;
    }
}

export const getUserRecentlyLogin = async (limit: number, cursor: string) => {
    try {
        const res = await api.get(`/user/logged-in?limit=${limit}&cursor=${cursor}`);
        return res?.data;
    } catch (error) {
        return error;
    }
}


export const postAnUserFavorite = async (userId: string) => {
    try {
        const res = await api.post(`/user/favorite/${userId}`);
        return res.data;
    } catch (error) {
        return error;
    }
}

export const deleteAnUserFavorite = async (userId: string) => {
    try {
        const res = await api.delete(`/user/favorite/${userId}`);
        return res.data;
    } catch (error) {
        return error;
    }
}