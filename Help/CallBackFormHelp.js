import { Control, LocalForm, Errors } from 'react-redux-form';

/*Field to Add 
For more info refer to login form in frontend 

Dont show this form to Mentor
handleCallbackForm
 -----will send request to 
	get role from user object in local storage
	post request 
	send info --- category,description,user
	axios(http://${window.location.hostname}:5005/mentee/callback)
*/

 <LocalForm onSubmit={(values) => this.handleCallbackForm(values)}>
                                                <h3 className="text-warning mb-0">MentoMeet</h3>
                                                <p className="text-muted font-weight-bold">Login in your account</p>
                                                <InputGroup className="mb-3 d-block">                                            
                                                    <Control.text  model=".email"
                                                        type="email"
                                                        id="email"
                                                        name="email"
                                                        placeholder="Email"
                                                        className="form-control w-100"
                                                        validators={{
                                                            required
                                                        }}                                                  
                                                    />
                                                    <Errors
                                                        className="text-danger"
                                                        show="touched"
                                                        model=".email"
                                                        messages={{
                                                            required: 'This is a Required Field!'
                                                        }}
                                                    />
                                                </InputGroup>
                                                <InputGroup className="mb-3 d-block">                                            
                                                    <Control.password  model=".password"
                                                        id="password"
                                                        name="password"
                                                        placeholder="password"
                                                        className="form-control w-100" 
                                                        validators={{
                                                            required
                                                        }}                                                    
                                                    />
                                                    <Errors
                                                        className="text-danger"
                                                        show="touched"
                                                        model=".password"
                                                        messages={{
                                                            required: 'This is a Required Field!'
                                                        }}
                                                    />
                                                </InputGroup>
                                                <InputGroup className="mb-3">
                                                    <Button type="submit" block color="info">
                                                            Login
                                                    </Button>
                                                </InputGroup>
                                                
                                                <div className="">
                                                    <h6 className="text-muted mb-0">Don't have account??</h6>
                                                    <a className="text-info font-weight-bold cursor-pointer" onClick={this.onChangeHandler}>register.</a>
                                                </div>
                                                
                                            </LocalForm>
											
/* I think try formik */
import {Formik,Form,Field,ErrorMessage} from 'formik';

<Formik 
				initialValues={{
					username:'',
					email:'',
					password:'',
				}}
				
				onSubmit={(values,actions) => {
					fetch('/user/login',{
						method:"POST",
						headers:{"Content-Type":"application/json"},
						body:JSON.stringify({...values})
					})
					.then((res) => {
						if(res.ok){
							res.json().then(data => {
									console.log(' User Login  Form Succesfully Recieved Data')
									console.log(data)
									ctx.dispatch({type:'LOGIN',payload:{'username':data.username,'Iam':'USER','email':data.email}})
							})	
						}
						else{
							console.log('Login Form Recieved Error')
							res.json().then(err => alert(err.msg))
						}
					})
					.catch(() => {
						alert('Error');
					})
					.finally(() => {
						actions.setSubmitting(false)
					})
				}}
				
				validate={values => {
					const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
					const errors = {};
					if(!values.password){
						errors.password = 'Please Enter Password'
					}
					if(!values.email || !emailRegex.test(values.email)){
						errors.email = 'Please Enter a Valid Email'
					}
					if(!values.username){
						errors.email = 'Please Enter a Valid Username'
					}
					return errors;
				}}
			>
		{() => (
			<Form className='col s12'>
			  <div className='row'>
				<div className='input-field col s12'>
					 
					<Field name="email" placeholder="Email" className='validate' />
				</div>
				<div className='input-field col s12'>
					
					<Field name="username"  placeholder="Username" className='validate' />
					
				</div>
				<div className='input-field col s12'>
					
					<Field name="password" placeholder="Password" type="password"  className='validate'/>
					
				</div>
				<p style={{color: 'red'}} ><ErrorMessage   name="username" /></p>
				<p style={{color: 'red'}} ><ErrorMessage  name="password" /></p>
				<p style={{color: 'red'}} ><ErrorMessage   name="email" /></p>
			 </div>
			 <div  style={{textAlign:'center'}}>
				<button type='submit' className='btn btn-primary'>Submit</button>
			</div>
			</Form>
		)}
		</Formik>