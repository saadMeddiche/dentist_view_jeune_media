import emailjs from "emailjs-com"
import axios from "axios";

// Function to send email using EmailJs
export async function send_message(email, message) {

    try {
      await emailjs.send("service_xhs4cs1", "template_ykeh6b9", {
        message: message,
        email: email,
      },'cfS-TyApcFJej2owT');
    } catch (error) {
      console.error('Error sending email:', error);
    }
}

// Function to verify email using ZeroBounce API
export async function verify_email(email) {
    
    const apiKey = '7beea32664734162add48bc48fcf668b';
    const url = `https://api.zerobounce.net/v2/validate?api_key=${apiKey}&email=${encodeURIComponent(email)}`;
    

    try {
        const response = await axios.get(url);
        const { status } = response.data;
        
        if (status === 'valid') {
            alert('The email do exist');
           return 'valid';
        }
      
        if (status === 'invalid') {
            alert('The email does not exist');
            return 'invalid';
        } else {
            alert('Unknown error');
            return 'unknown';
        }
        
        
    } catch (error) {
        alert('Error verifying email');
        console.error('Error verifying email:', error);
        return 'error';
    }
}

// Function to validate email format
export function validate_email(email){
    if(email == '' || email == null){
        alert('The email field is empty');
        return 'empty';
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        alert('The form of email is invalid');
        return 'invalid';
    }
    
    return 'verified';
}

// Function to clear email field
export function clear_email_field(that){
    that.email = ''
}
