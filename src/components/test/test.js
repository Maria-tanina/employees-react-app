import {Component} from 'react';

class WhoAmI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            years: 20,
            position: ''
        }
    }
    nextYear = () => {
        this.setState(state => ({
            years: state.years + 1
        }))
    }
    commitInputChanges = (e, color) => {
        console.log(color);
        this.setState({
            position: e.target.value
        })
    }
    render() {
        const {name, link} = this.props;
        const {years, position} = this.state;
        return(
            <div>
                <button className='btn btn-dark' onClick={this.nextYear}>+++</button>
                <h3>My name is {name}, my age - {years}, position - {position} </h3>
                <a href={link}>My github</a>
                <form>
                    <span>Text your position</span>
                    <input type="text" onChange={ (e) => this.commitInputChanges(e, 'some Color')} />
                </form>
            </div>
        )
    }
}





export default WhoAmI;