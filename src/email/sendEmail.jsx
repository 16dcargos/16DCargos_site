import emailjs from '@emailjs/browser'
import toast from 'react-hot-toast';

const sendEmail = async (templateId, formData) => {
    const serviceId = import.meta.env.VITE_API_SERVICE_ID; // Get from EmailJS
    const userId = import.meta.env.VITE_API_PUBLIC_KEY; // Get from EmailJS

    return await emailjs.send(serviceId, templateId, formData, userId)
        .then(response => {
            console.log('SUCCESS!', response.status, response.text);
            if (response.status === 200) {
                toast.success('Thank yor for submission, We will reach you soon')
            }
            return true;
        })
        .catch(err => {
            if (err) {
                toast.error('Sothing went wroung! please try again later')
            }
            return false;
        });
}

export default sendEmail