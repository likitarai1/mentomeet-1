import React,{useReducer} from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/Nav';
import {Route,BrowserRouter as Router,Switch,Redirect} from 'react-router-dom'
import { UserContext } from './context/UserContext';
/* Importing Css Files */
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
/* Importing Display Components */
import LoginForm from './components/LoginForm' 
import SignupForm from './components/SignupForm' 
import MentorDashboard from './components/MentorDashboard' 
import MenteeDashboard from './components/MenteeDashboard' 
import AdminDashboard from './components/AdminDashboard' 
import NotFound from './components/NotFound' 

const initialState = {
	'Login':false,
	'role':'',
}


let mentorObj = {'firstName':'mentor1','lastName':'mentor','role':'mentor','id':'123'}
let menteeObj = {'firstName':'mentee1','lastName':'mentee','role':'mentee','id':'321'}
let adminObj = {'firstName':'admin1','lastName':'admin','role':'admin','id':'456'}

localStorage.setItem('user',JSON.stringify(mentorObj))

const reducer = (state,action) => {
	if(action.type === 'LOGIN'){
		let newState = {'Login':true}
		if(action.payload && action.payload.role) newState['role'] = action.payload.role;
		if(action.payload.role === 'MENTEE') localStorage.setItem('user',JSON.stringify(menteeObj))
		if(action.payload.role === 'MENTOR') localStorage.setItem('user',JSON.stringify(mentorObj))
		if(action.payload.role === 'ADMIN') localStorage.setItem('user',JSON.stringify(mentorObj))
		
		return {...state,...newState}
	}
	if(action.type === 'LOGOUT'){
		return {...state,'Login':false,'role':''}
	}
	return state;
}

export const App = () => {	

  const [state,dispatch] = useReducer(reducer,initialState)
    

  return(
     <UserContext.Provider  value={{state,dispatch}}>
		<div className="Testing">
			<span>For Testing Purpose Buttons</span>
			<div>
				<button className="btn btn-sm btn-success" onClick={() => dispatch({type:'LOGIN',payload:{'role':'MENTEE'}})} >Log In as Mentee</button>
				<button className="btn btn-sm btn-success" onClick={() => dispatch({type:'LOGIN',payload:{'role':'MENTOR'}})}  >Log In as Mentor</button>
				<button className="btn btn-sm btn-success" onClick={() => dispatch({type:'LOGIN',payload:{'role':'ADMIN'}})}  >Log In as Admin</button>
			</div>
		</div>
		<Router>
		   {(state.Login && state.role === 'MENTEE')?<Redirect from='/' to='/MenteeDashboard' />:<Redirect from='/' to='/MentorDashboard' />}
		   {(state.Login && state.role === 'ADMIN')?<Redirect from='/' to='/AdminDashboard' />:null}
				<Nav state={state} dispatch={dispatch} />
				<Switch>
					<Route exact path='/login' component={LoginForm} />
					<Route exact path='/MenteeDashboard' component={(state.role === 'MENTEE')?MenteeDashboard:LoginForm} />
					<Route exact path='/MentorDashboard' component={(state.role === 'MENTOR')?MentorDashboard:LoginForm} />
					<Route exact path='/AdminDashboard' component={(state.role === 'ADMIN')?AdminDashboard:LoginForm} />
					<Route exact path='/signup' component={SignupForm} />
					<Route  path='*' component={NotFound} />
				</Switch>
		</Router>
	 </UserContext.Provider >
	)
}


ReactDOM.render(<App />,document.getElementById('root')) 


