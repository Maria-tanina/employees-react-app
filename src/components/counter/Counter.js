import {useState, useEffect, Component} from 'react';
import NBUServices from '../../services/NBUServices';
import './counter.css';
// class Counter extends Component {
//     state = {
//         data: [],
//         counter: this.props.count
//     }
//     services = new NBUServices();
//     componentDidMount() {
//        this.services.getValuteList()
//         .then(this.onListLoaded)
//         .catch(() => console.log('error'))
//     }
//     onListLoaded = (data) => {
//         this.setState({data})
//     }
//     componentDidUpdate() {

//     }
//     onValuteCalc = (cc) => {
//         const valute =  this.state.data.filter(item => item.cc.toLowerCase().indexOf(cc.toLowerCase()) > -1)[0];
//         const res = Math.floor(+valute.rate*this.props.count);
//         this.setState({counter: res});
//     }
//     //return res.filter(item => item.cc.toLowerCase().indexOf(currency.toLowerCase()) > -1)[0];
//     render() {
//         const {counter} = this.state;
//         return(
//             <div className="countInner">
//                 <div className="countWrapper">
//                     <div className="counter">{counter}</div>
//                     <div className="controls">
//                     <button onClick={() => this.setState({counter: this.props.count})}>UAH</button>
//                     <button onClick={() => this.onValuteCalc('usd')}>USD</button>
//                     <button onClick={() => this.onValuteCalc('eur')}>EUR</button>
//                     <button onClick={() => this.onValuteCalc('pln')}>PLN</button>
//                     <button onClick={() => this.onValuteCalc('gbp')}>GBP</button>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

function Counter({count}) {

    const services = new NBUServices();

    const [data, setData] = useState([]);
    const [counter, setCounter] = useState(count);
    useEffect(() => {
        services.getValuteList()
            .then(onListLoaded)
            .catch(() => console.log('error'))
    })
   const onListLoaded = (data) => {
        setData(data);
    }
    function onValuteCalc(cc)  {
                const valute = data.filter(item => item.cc.toLowerCase().indexOf(cc.toLowerCase()) > -1)[0];
                const res = Math.floor(+valute.rate*count);
                setCounter(res);
            }
    return(
        <div className="countInner">
                 <div className="countWrapper">
                     <div className="counter">{counter}</div>
                     <div className="controls">
                     <button  onClick={() => setCounter(count)}>UAH</button>
                     <button onClick={() => onValuteCalc('usd')}>USD</button>
                     <button onClick={() => onValuteCalc('eur')}>EUR</button>
                     <button onClick={() => onValuteCalc('pln')}>PLN</button>
                     <button onClick={() => onValuteCalc('gbp')}>GBP</button>
                     </div>
                </div>
             </div>
    )

}
export default Counter;