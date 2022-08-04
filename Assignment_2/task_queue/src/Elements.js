import React from "react";
import { Table } from 'react-super-responsive-table'
import './elements.css'

class Elemnets extends React.Component 
{

    constructor(){
        super()
        this.state = {
            seconds:1,
            background:'#FFFF00'
        }
    }

    countDown = (seconds) => {
        return seconds;
    }

    TimerCount = () => {
        var secCount = this.countDown(this.state.seconds);
        if(secCount){
            this.state.seconds  ? this.setState({seconds:this.state.seconds - 1}):this.setState({seconds:this.state.seconds})
        }
    }

    butHandler_A = () => {
        this.countSeconds_A = setInterval(this.TimerCount,500);
        setTimeout(() => this.setState({disableElement_A:true}),500);
        this.setState ({
            disableElement_A:false
        });
    }

    butHandler_B = () => {
        this.countSeconds_B = setInterval(this.TimerCount,500);
        setTimeout(() => this.setState({disableElement_B:true}),500);
        this.setState ({
            disableElement_B:false
        });
    }

    butHandler_C = () => {
        this.countSeconds_C = setInterval(this.TimerCount,500);
        setTimeout(() => this.setState({disableElement_C:true}),500);
        this.setState ({
            disableElement_C:false
        });
    }

    butHandler_D = () => {
        this.countSeconds_D = setInterval(this.TimerCount,500);
        setTimeout(() => this.setState({disableElement_D:true}),500);
        this.setState ({
            disableElement_D:false
        });
    }
    
    butHandler_E = () => {
        this.countSeconds_E = setInterval(this.TimerCount,500);
        setTimeout(() => this.setState({disableElement_E:true}),500);
        this.setState ({
            disableElement_E:false
        });
    }

    butHandler_F = () => {
        this.countSeconds_F = setInterval(this.TimerCount,500);
        setTimeout(() => this.setState({disableElement_F:true}),500);
        this.setState ({
            disableElement_F:false
        });



    }

    render()
    {
        return(
            <>
                <div className="title">
                    <h1>Task Queue</h1>
                    <small>Elements become inactive when clicked on the button</small>
                </div>

                <Table className='center'>
				<thead>
					<tr>
						<th>Index</th>
						<th >Member</th>
                        <th>Remove</th>
					</tr>
				</thead>
				<tbody>
					<tr className='txt'  disabled={this.state.disableElement_A}>
						<td disabled={this.state.disableElement_A}>1</td>
						<td disabled={this.state.disableElement_A}>A</td>
                        <td><button className='btn' disabled={this.state.disableElement_A} onClick={this.butHandler_A}>Remove</button></td>
					</tr>
					<tr  className='txt'>
						<td disabled={this.state.disableElement_B}>2</td>
						<td disabled={this.state.disableElement_B}>B</td>	
                        <td><button  className='btn' disabled={this.state.disableElement_B} onClick={this.butHandler_B}>Remove</button></td>					
					</tr>
					<tr className='txt'>
						<td disabled={this.state.disableElement_C}>3</td>
						<td disabled={this.state.disableElement_C}>C</td>
                        <td><button  className='btn' disabled={this.state.disableElement_C} onClick={this.butHandler_C}>Remove</button></td>
					</tr>
                    <tr className='txt'>
						<td disabled={this.state.disableElement_D}>4</td>
						<td disabled={this.state.disableElement_D}>D</td>
                        <td><button  className='btn' disabled={this.state.disableElement_D} onClick={this.butHandler_D}>Remove</button></td>
					</tr>
                    <tr className='txt'>
						<td disabled={this.state.disableElement_E}>5</td>
						<td disabled={this.state.disableElement_E}>E</td>
                        <td><button  className='btn' disabled={this.state.disableElement_E} onClick={this.butHandler_E}>Remove</button></td>
					</tr>
                    <tr className='txt'> 
						<td disabled={this.state.disableElement_F}>6</td>
						<td disabled={this.state.disableElement_F}>F</td>
                        <td><button  className='btn' disabled={this.state.disableElement_F} onClick={this.butHandler_F}>Remove</button></td>
					</tr>
                    <tr className='txt'>
						<td disabled={this.state.disableElement_A}>7</td>
						<td  disabled={this.state.disableElement_A}>A</td>
                        <td><button  className='btn' onClick={this.butHandler_A}   disabled={this.state.disableElement_A}>Remove</button></td>
					</tr>
                    <tr className='txt'>
						<td disabled={this.state.disableElement_F}>8</td>
						<td disabled={this.state.disableElement_F}>F</td>
                        <td><button  className='btn' disabled={this.state.disableElement_F} onClick={this.butHandler_F}>Remove</button></td>
					</tr>
                    <tr className='txt'>
						<td disabled={this.state.disableElement_C}>9</td>
						<td disabled={this.state.disableElement_C}>C</td>
                        <td><button  className='btn' disabled={this.state.disableElement_C} onClick={this.butHandler_C}>Remove</button></td>
					</tr>
                    <tr className='txt'>
						<td disabled={this.state.disableElement_D}>10</td>
						<td disabled={this.state.disableElement_D}>D</td>
                        <td><button  className='btn' disabled={this.state.disableElement_D} onClick={this.butHandler_D}>Remove</button></td>
					</tr>
                    <tr className='txt'>
						<td disabled={this.state.disableElement_A}>11</td>
						<td disabled={this.state.disableElement_A}>A</td>
                        <td><button  className='btn' disabled={this.state.disableElement_A} onClick={this.butHandler_A}>Remove</button></td>
					</tr>
                    <tr className='txt'>
						<td disabled={this.state.disableElement_B}>12</td>
						<td disabled={this.state.disableElement_B}>B</td>
                        <td><button  className='btn' disabled={this.state.disableElement_B} onClick={this.butHandler_B}>Remove</button></td>
					</tr>
                    <tr className='txt'>
						<td disabled={this.state.disableElement_C}>13</td>
						<td disabled={this.state.disableElement_C}>C</td>
                        <td><button  className='btn' disabled={this.state.disableElement_C} onClick={this.butHandler_C}>Remove</button></td>
					</tr>
                    <tr className='txt'>
						<td disabled={this.state.disableElement_A}>14</td>
						<td disabled={this.state.disableElement_A}>A</td>
                        <td><button  className='btn' disabled={this.state.disableElement_A} onClick={this.butHandler_A}>Remove</button></td>
					</tr>
                    <tr className='txt'>
						<td disabled={this.state.disableElement_B}>15</td>
						<td disabled={this.state.disableElement_B}>B</td>
                        <td><button  className='btn' disabled={this.state.disableElement_B} onClick={this.butHandler_B}>Remove</button></td>
					</tr>
                    <tr className='txt'>
						<td disabled={this.state.disableElement_A}>16</td>
						<td disabled={this.state.disableElement_A}>A</td>
                        <td><button  className='btn' disabled={this.state.disableElement_A} onClick={this.butHandler_A}>Remove</button></td>
					</tr>
				</tbody>
	</Table>
            </>
        )
    }
}

export default Elemnets