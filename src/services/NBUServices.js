
class NBUServices  {
     getSources = async (url) => {
        const res = await fetch(url);
        if(!res.ok) {
          throw new Error('error');
        }
        return await res.json();
      }
      getValuteList = async () => {
        const res = await this.getSources('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json');
        return res.map(this._transformData);
      }
      getCurrency = async (currency) => {
        const res = await this.getSources('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json');
        //console.log(res.filter(item => item.cc.toLowerCase().indexOf(currency.toLowerCase()) > -1));
     
       return res.filter(item => item.cc.toLowerCase().indexOf(currency.toLowerCase()) > -1)[0];
      }
      _transformData = (item) => {
        return {
          rate: item.rate,
          cc: item.cc
        }
      }
    
}

  export default NBUServices;