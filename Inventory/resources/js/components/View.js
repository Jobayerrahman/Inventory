import React from 'react';
import {Link} from 'react-router-dom';

class View extends React.Component {

    constructor(){
        super()
        this.state={
            products:[]
        }
    }
    fatchData= async ()=>{
        const respond = await axios.get("/Entry");
        if(respond.data.status === 200){
            this.setState({products: respond.data.product});
        }
        console.log(respond);
    }

    componentDidMount(){
        this.fatchData();
    }

    productDel= async (id,event)=>{
        const respond = await axios.delete(`/Entry/${id}`);
        if(respond.data.status === 200){
            this.fatchData();
        }
    }

    render() {

        var i =0;
        const productsList = this.state.products
        const ProductCol = productsList.map((productList)=>{
            return  <tr>
            <th scope="row">{i=i+1}</th>
            <td key={productList.toString()}>{productList.ProductName}</td>
            <td key={productList.toString()}>{productList.ProductPrice}</td>
            <td key={productList.toString()}>{productList.ExpiredDate}</td>
            <td>
                <Link className="btn btn-sm btn-warning" to={`/Update/${productList.id}`}>Update</Link>
                <button className="btn btn-sm btn-danger" onClick={(event) => this.productDel(productList.id,event)}>Delete</button>
            </td>
            </tr>
        })
      return(
          <div className="container md-6">
            <div>
            <br></br>
            <h3>Product List</h3>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Serial.</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Product Price</th>
                    <th scope="col">Expired Date</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {ProductCol}
                </tbody>
            </table>
            </div>
          </div>
      );
    }
  }

export default View