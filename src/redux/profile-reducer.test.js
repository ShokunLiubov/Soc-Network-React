import profileReducer, { addPost, deletePost } from "./profile-reducer";

let state = {
    postsData: [
        { id: 1, massage: 'Hi, how are you?', countLikes: '12', time: '29 minutes ago' },
        { id: 2, massage: 'It is my first post', countLikes: '99+', time: 'yesterday' },
        { id: 3, massage: 'My name Liubov, I am wife Eugen', countLikes: '32', time: 'week ago' }
    ]
}

test('add post should be added ', () => {
    // 1.test data
    let action = addPost("Cool test")

    // 2.action
    let newState = profileReducer(state, action)

    // 3. expectation
    expect(newState.postsData.length).toBe(4)
});

test('massage of new Post ', () => {
    // 1.test data
    let action = addPost("Cool test")

    // 2.action
    let newState = profileReducer(state, action)

    // 3. expectation

    expect(newState.postsData[3].massage).toBe('My name Liubov, I am wife Eugen')
});

// test('after deleting length of massages should be decrement ', () => {
//     // 1.test data
//     let action = deletePost(1)

//     // 2.action
//     let newState = profileReducer(state, action)

//     // 3. expectation

//     expect(newState.postsData.length).toBe(2)
// });