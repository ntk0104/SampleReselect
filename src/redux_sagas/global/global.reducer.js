import types from './global.types'

const defaultState = {
	loading: false,
	counter: 0,
	listPosts: [
		{
			id: 1,
			authorID: '1',
			title: 'Em di tren co non',
			date: '10/07/2019'
		},
		{
			id: 6,
			authorID: '2',
			title: 'Em di tren co non',
			date: '10/07/2020'
		},
		{
			id: 2,
			authorID: '3',
			title: 'Em di tren co non',
			date: '10/08/2019'
		},
		{
			id: 3,
			authorID: '4',
			title: 'Em di tren co non',
			date: '10/09/2019'
		}
	],
	listAuthors: {
		'1': {
			lastName: 'Kiet',
			firstName: 'Nguyen'
		},
		'2': {
			lastName: 'Nam',
			firstName: 'Nguyen'
		},
		'3': {
			lastName: 'San',
			firstName: 'Nguyen'
		},
		'4': {
			lastName: 'Phat',
			firstName: 'Le'
		}
	}
}

const globalReducer = (state = defaultState, action) => {
	switch (action.type) {
		case types.LOADING_START:
			return {
				loading: true
			}
		case types.LOADING_STOP:
			return {
				loading: false
			}

		case types.INCREASE_COUNTER:
			return {
				...state,
				counter: state.counter + 1
		}

		default:
			return { ...state }
	}
}
export default globalReducer