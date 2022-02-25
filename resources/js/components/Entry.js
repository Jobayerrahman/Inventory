import React from 'react';
import axios from 'axios';

class Entry extends React.Component {
    state={
        productName: '',
        productPrice: '',
        expiredDate: '',
    }

    manageEntry=(even)=>{
        this.setState({[even.target.name] : even.target.value})
    }

    saveProduct= async (even)=>{
        even.preventDefault();

        const respond = await axios.post("/Entry", this.state);
        this.setState({
        productName: '',
        productPrice: '',
        expiredDate: '',
        })
        if(respond.data.status === 200){
            this.props.history.push('/')
        }
        console.log(respond);
    }
    render() {
      return(
          <div className="container md-6">
            <br></br>
            <h3>Create New Product</h3>
            <div className="col-6">
                <form onSubmit={this.saveProduct}>
                    <div className="form-group">
                        <label>Product Name</label>
                        <input type="text" name="productName" className="form-control" value={this.state.productName} onChange={this.manageEntry}  placeholder="Enter the product name" required/>
                    </div>
                    <div className="form-group">
                        <label>Product Price</label>
                        <input type="text" name="productPrice" className="form-control" value={this.state.productPrice} onChange={this.manageEntry} placeholder="Enter the product price" required/>
                    </div>
                    <div className="form-group">
                        <label>Product Expiry Date (yyyy-mm-dd)</label>
                        <input type="text" name="expiredDate" className="form-control" value={this.state.expiredDate} onChange={this.manageEntry} placeholder="YYYY-MM-DD" required/>
                    </div>
                    <br></br>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
          </div>
      );
    }
  }

export default Entry