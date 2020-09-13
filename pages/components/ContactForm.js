export default class ContactForm extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            mobile: '',
            subject: '',
            comment: ''
        }
        this.handleFirstName = this.handleFirstName.bind(this)
        this.handleLastName = this.handleLastName.bind(this)
        this.handleEmail = this.handleEmail.bind(this)
        this.handleMobile = this.handleMobile.bind(this)
        this.handleSubject = this.handleSubject.bind(this)
        this.handleComment = this.handleComment.bind(this)
        this.submitContactForm = this.submitContactForm.bind(this)
    }

    handleFirstName(event) {
        this.setState({
            firstName: event.target.value
        })
    }

    handleLastName(event) {
        this.setState({
            lastName: event.target.value
        })
    }

    handleEmail(event) {
        this.setState({
            email: event.target.value
        })
    }

    handleMobile(event) {
        this.setState({
            mobile: event.target.value
        })
    }

    handleSubject(event) {
        this.setState({
            subject: event.target.value
        })
    }

    handleComment(event) {
        this.setState({
            comment: event.target.value
        })
    }

    submitContactForm(event) {
        event.preventDefault()
    }

    render() {
        return (
            <>
            <h1>We are happy to hear from you...</h1>
            <form onSubmit={this.submitContactForm}>
                <input type="text" style={{ width: '49.5%', marginRight: '1%' }} onChange={this.handleFirstName} placeholder="First Name" />
                <input type="text" style={{ width: '49.5%' }} onChange={this.handleLastName} placeholder="Last Name" />
                <input type="email" onChange={this.handleEmail} placeholder="Email" />
                <input type="number" onChange={this.handleMobile} placeholder="Mobile" />
                <input type="text" onChange={this.handleSubject} placeholder="Subject" />
                <textarea rows="6" onChange={this.handleComment} placeholder="Enter your comment here"></textarea>
                <button type="submit" className={`primary`}>Submit</button>
            </form>
            </>
        )
    }
}