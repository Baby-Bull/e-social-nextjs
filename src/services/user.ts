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
        if (res.data) return res.data;
        else return [];
    } catch (error) {
        return error;
    }
}

export const getUserFavoriteTag = async (limit: number, cursor: string) => {
    try {
        const res = await api.get(`/user/favorite/tag-users?limit=${limit}&cursor=${cursor}`);
        return res.data;
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