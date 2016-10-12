import React from 'react';

class EditForm extends React.Component {
  constructor(props){
   super(props);
   this.state = {
     title: this.props.post.title
    }
  }
  handleSubmit(e){
    e.preventDefault();
    console.log('submit');
      const title = this.refs.title.value;
      const content = this.refs.content.value;
      const category = this.refs.category.value;
      this.props.publishPost({title, content, category});
  }
  render () {
    return(
      <div>

       <form  onSubmit = {this.handleSubmit.bind(this)}>
         <div>
           <label>title</label>
           <input ref = 'title' defaultValue={this.state.title} />
         </div>

         <div>
           <label>content</label>
           <textarea ref = 'content' defaultValue={this.state.content} />
         </div>

         <div>
           <label>category</label>
           <input ref = 'category' defaultValue={this.props.post.category} />
         </div>

          <input type = 'submit'/>

       </form>
      </div>
    )

  }
}

export default EditForm;
