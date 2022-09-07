const SAND_MASSAGE = 'SAND-MASSAGE'

let initialState = {
    dialogsData: [
        { id: 1, name: 'Vika', ava: './../images/ava-w1.jpeg' },
        { id: 2, name: 'Eugen', ava: './../images/ava-m2.png' },
        { id: 3, name: 'Liubov', ava: './../images/ava-w3.jpeg' },
        { id: 4, name: 'Max', ava: './../images/ava-m1.jpeg' },
        { id: 5, name: 'Nika', ava: './../images/ava-w2.webp' }
    ],
    massagesData: [
        { id: 1, massage: 'Hi' },
        { id: 2, massage: 'How are you?' },
        { id: 3, massage: 'I am okey!' }
    ]
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SAND_MASSAGE:
            let text = action.newMassageText
            return {
                ...state,
                massagesData: [...state.massagesData, {id: Date.now(),massage: text}]
            }

        default:
            return state
    }

}

export const sandMassage = (newMassageText) => ({ type: SAND_MASSAGE, newMassageText })

export default dialogsReducer;