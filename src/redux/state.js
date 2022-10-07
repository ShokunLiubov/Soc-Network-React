import dialogsReducer from "./dialogs-reducer"
import profileReducer from "./profile-reducer"

let store = {

    _state: {
        profilePage: {
            postsData: [
                { id: 1, massage: 'Hi, how are you?', countLikes: '12', time: '29 minutes ago' },
                { id: 2, massage: 'It is my first post', countLikes: '99+', time: 'yesterday' },
                { id: 3, massage: 'My name Liubov, I am wife Eugen', countLikes: '32', time: 'week ago' }
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogsData: [
                { id: 1, name: 'Vika', ava: './../images/ava-w1.jpeg' },
                { id: 2, name: 'Eugen', ava: './../images/ava-m2.png' },
                { id: 3, name: 'Liubov', ava: './../images/ava-w3.jpeg' },
                { id: 4, name: 'Max', ava: './../images/ava-m1.jpeg' },
                { id: 5, name: 'Nika', ava: './../images/ava-w2.webp' }
            ],
            massagesData: [
                { id: 1, massage: 'Hi' },
                { id: 1, massage: 'How are you?' },
                { id: 1, massage: 'I am okey!' }
            ],
            newMassageText: ''
        },
        communityPage: {
            friendsData: [
                { id: 1, name: 'Vika', ava: './../images/ava-w1.jpeg', age: '29', gender: 'Female' },
                { id: 2, name: 'Eugen', ava: './../images/ava-m2.png', age: '29', gender: 'Male' },
                { id: 3, name: 'Liubov', ava: './../images/ava-w3.jpeg', age: '23', gender: 'Female' },
                { id: 4, name: 'Max', ava: './../images/ava-m1.jpeg', age: '51', gender: 'Male' },
                { id: 5, name: 'Nika', ava: './../images/ava-w2.webp', age: '18', gender: 'Female' },
                { id: 6, name: 'Vika', ava: './../images/ava-w1.jpeg', age: '12', gender: 'Female' },
                { id: 7, name: 'Eugen', ava: './../images/ava-m2.png', age: '19', gender: 'Male' },
                { id: 8, name: 'Liubov', ava: './../images/ava-w3.jpeg', age: '32', gender: 'Female' },
                { id: 9, name: 'Max', ava: './../images/ava-m1.jpeg', age: '26', gender: 'Male' },
                { id: 10, name: 'Nika', ava: './../images/ava-w2.webp', age: '21', gender: 'Female' }
            ]
        }
    },
    _callSubscriber() {
        console.log('State!');
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer( this._state.profilePage, action )

        this._state.dialogsPage = dialogsReducer( this._state.dialogsPage, action )

        this._callSubscriber(this._state)
        
    },

}









export default store;