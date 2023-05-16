import emailjs from "emailjs-com"

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

export function clear_email_field(that){
    that.email = ''
}