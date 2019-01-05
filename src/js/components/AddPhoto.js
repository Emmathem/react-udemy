import React, {Component} from 'react';
import Title from './Title';

class AddPhoto extends Component {
    constructor() {
        super()
        this.submitHandler = this.submitHandler.bind(this)
    }
    submitHandler(e) {
        e.preventDefault()
        const link = e.target.elements.link.value
        const desc = e.target.elements.description.value
        const post = {
            id: Number(new Date()),
            description: desc,
            imageLink: link
        }
        if(link && desc) {
            this.props.onAddedPost(post)
        }
    }
    render() {
        const style = {
            textAlign: "center",
            marginTop: "10px"
        }
        return (
            <div>
                <Title title = "Photo Management"/>
                <h5 style = {style}>This is a page to add photo</h5>
                <div className = "form">
                    <form onSubmit = {this.submitHandler}>
                        <input type = "text" name = "link" placeholder = "Enter Link" className = "form-control"/>
                        <input type = "text" name = "description" placeholder = "Enter Description" className = "form-control"/>
                        <button>Add Post</button>
                    </form>
                </div>
                
            </div> 
        )
    }
}

export default AddPhoto