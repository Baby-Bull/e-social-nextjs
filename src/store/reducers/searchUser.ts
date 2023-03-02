import { SearchUserFormStatus } from "src/constants/constants";
import { searchUserActions } from "../actionTypes";

const initState = {}
export default function (state: any=initState, action: any) {
    const { type } = action;
    switch (type) {
        case searchUserActions.UPDATE_SCROLL_POSITION: {
            return {
                ...state,
                search_users: {
                    ...state.search_users,
                    scrollPosition: action.payload.scrollPosition,
                },
            };
        }

        case searchUserActions.UPDATE_RESULT: {
            return {
                ...state,
                search_users: {
                    ...state.search_users,
                    formStatus: SearchUserFormStatus.Cached,
                    result: {
                        ...state.search_users.result,
                        ...action.payload,
                    },
                },
            };
        }

        case searchUserActions.UPDATE_FORM: {
            return {
                ...state,
                search_users: {
                    ...state.search_users,
                    form: {
                        ...state.search_users.form,
                        ...action.payload,
                    },
                },
            };
        }

        case searchUserActions.SEARCH_TAG_ONLY: {
            return {
                ...state,
                search_users: {
                    ...state.search_users,
                    formStatus: SearchUserFormStatus.Init,
                    form: {
                        job: 0,
                        employeeStatus: 0,
                        lastLogin: 0,
                        review: 0,
                        statusCanTalk: false,
                        statusLookingForFriend: false,
                        statusNeedConsult: false,
                        tags: [...(action.payload || [])],
                    },
                },
            };
        }

        case searchUserActions.APPEND_TAG: {
            return {
                ...state,
                search_users: {
                    ...state.search_users,
                    formStatus: SearchUserFormStatus.Init,
                    form: {
                        ...state.search_users.form,
                        tags: Array.from(new Set([...state.search_users.form.tags, ...action.payload])),
                    },
                },
            };
        }

        case searchUserActions.CLEAR_FORM: {
            return {
                ...state,
                search_users: {
                    ...state.search_users,
                    formStatus: SearchUserFormStatus.Init,
                    form: {
                        job: 0,
                        employeeStatus: 0,
                        lastLogin: 0,
                        review: 0,
                        statusCanTalk: false,
                        statusLookingForFriend: false,
                        statusNeedConsult: false,
                        tags: [],
                    },
                },
            };
        }
        default:
            return state;;
    }
}