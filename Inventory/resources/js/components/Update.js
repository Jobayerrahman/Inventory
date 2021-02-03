import React from 'react';
import axios from 'axios';

class Update extends React.Component {
    state={
        productName: '',
        productPrice: '',
        expiredDate: '',
    }

    manageEntry=(even)=>{
        this.setState({[even.target.name] : even.target.value})
    }

    updateProduct= async (even)=>{
        even.preventDefault();
        const id= this.props.match.params.id;
        const respond = await axios.patch(`/Entry/${id}`, this.state);
        if(respond.data.status == 200){
            this.props.history.push("/");
        }
    }

    async componentDidMount(){
        const id= this.props.match.params.id;
        const respond = await axios.get(`/Entry/${id}/edit`);
        console.log(respond);
        this.setState({ productName: respond.data.product.ProductName})
        this.setState({ productPrice: respond.data.product.ProductPrice})
        this.setState({ expiredDate: respond.data.product.ExpiredDate})
    }
    render() {
      return(
          <div className="container md-6">
            <br></br>
            <h3>Edit Product</h3>
            <div className="col-6">
                <form onSubmit={this.updateProduct}>
                    <div className="form-group">
                        <label>Product Name</label>
                        <input type="text" name="productName" className="form-control" value={this.state.productName} onChange={this.manageEntry}  placeholder="Enter the product name" required/>
                    </div>
                    <div className="form-group">
                        <label>Product Price</label>
                        <input type="text" name="productPrice" className="form-control" value={this.state.productPrice} onChange={this.manageEntry} placeholder="Enter the product price" required/>
                    </div>
                    <div className="form-group">
                        <label>Product Expired Date</label>
                        <input type="text" name="expiredDate" className="form-control" value={this.state.expiredDate} onChange={this.manageEntry} placeholder="Enter the expire date" required/>
                    </div>
                    <br></br>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
          </div>
      );
    }
  }

export default Update