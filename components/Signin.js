import React,{useState} from 'react';
import axios from 'axios';
import {Button,Container,Step, Form, Grid, Header,Segment } from 'semantic-ui-react';
// import './bootstrap.min.css';

function Signin({setToken,setName, name ,setRoom, room}) {
//    const[token,setToken] =useState(); 
//   const [name,setName]= useState('');

//   const [room,setRoom]= useState('room');
   

    async function handleSubmit(event){
        event.preventDefault();
        const result = await axios.post(
            'https://video-call-3993-dev.twil.io/video-token',
            {
                identity:name,
                room
            }
        );
        setToken(result.data);
        console.log('got token',result.data);
    }

    return (
        
        <Grid textAlign='center' verticalAlign='middle'  style={{height:'100vh'}}>
            <Grid.Column style={{maxWidth: '250'}} >
        <Header as='h2'  color='purple'>Login to Case Meet </Header>
        <Form>
            <Segment stacked>
        <Form.Input fluid icon='user' 
                    iconPosition='left' 
                    placeholder='name'
                    value={name}
                     id='name'
                    name='name'     
                    onChange={(e) => setName(e.target.value)}
                    />
        <Form.Input fluid icon='user' 
                    iconPosition='left' 
                    placeholder='room'
                    value={room}
                     id='room'
                    name='room'     
                    onChange={(e) => setRoom(e.target.value)}
                    />
                    <Button color='blue' fluid size='large' onClick = {handleSubmit}>Join Video meet</Button>
        {/* <form onSubmit={handleSubmit}>
       
             <label htmlFor="name" >Name</label>
             <input type="text" 
              id="name" 
              placeholder="Name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              />
              <label htmlFor="name" >Room</label>
             <input type="text" 
              id="room" 
              placeholder="room" 
              value={room} 
              onChange={(e) => setName(e.target.value)} 
               />
                <br/><br/>
               <button  type="submit">Join chat</button> 
               
             
        </form> */}
        </Segment>
        </Form>
         </Grid.Column>
         
      </Grid>
      
    )
}

export default Signin;
