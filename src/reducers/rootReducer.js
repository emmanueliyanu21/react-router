const initState = {
    posts: [
        { id: '1', title: 'Squitle laid an egg', body: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit' },
        { id: '2', title: 'Chamander Laid an egg', body: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit' },
        { id: '3', title: 'A Helix Fox was found', body: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit' }
    ]
}

const rootReducer = (state = initState, action) => {
    //console.log(action)
    if (action.type === 'DELETE_POST') {
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id
        });
        return {
            ...state,
            posts: newPosts
        }
    }
    return state;
}

export default rootReducer