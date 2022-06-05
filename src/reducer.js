export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //REMOVE AFTER DEVELOPING....
    //token: "BQCQs3Jyl7zjwkcm9OmzVuiiOFSSEfw3Pz6LbmpN3hcaeVHAWP2MfqyuonwFnGfn_F0-IatCo7sMHsJTLf0Hn0B5JMKUHbE9SIg5YrYZqj4n2j9YbN2s_AtzYHs4QUzSn2eOvhHn2Fw8bIEdI_ihVvarEcG6b6deduXtqbCvDW_kyW3_TBeW",
};

const reducer = (state, action) => {
console.log(action);

switch(action.type){
    case 'SET_USER':
        return{
            ...state,
            user: action.user,
        };

        case "SET_TOKEN":
            return{
                ...state,
                token: action.token,
            };

        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists: action.playlists,
            };

        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            }
        default:
            return state;
    }
}
export default reducer;