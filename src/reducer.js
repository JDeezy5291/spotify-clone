export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // token: 'BQB5Ptxf-RGVYc317ABEnDmDGUfp-3zUgMMBMFK9vtYG1axE4cUj3U-nCdbtLdv6BcQF7BgtNbS0AxIRqBqbrl2PwWXZvGXL3BmD7QwI5q8s8hpJZoFm_9eugTZiElibMCV7xzJ8MpLX3EzrfoRmp0xofmtdlQ'
}
// state is how it looks
// action is setting user, playlists, etc
const reducer = (state, action) => {
    console.log(action)

    switch(action.type) {
        case 'SET_USER':
            return {
                // keep whats in current state
                ...state,
                // update user
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            }
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly
            }
        default:
            return state
    }
}

export default reducer