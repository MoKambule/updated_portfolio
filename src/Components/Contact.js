
   import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
   import { faFacebook, faInstagram, faTwitter, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

   const Contact = () => {
     return (
       <footer className="bg-gray-100 p-4">
         <div className="max-w-7xl mx-auto">
           <h3 className="text-lg font-bold">Contact Us</h3>
           <p>Phone: +1 123-456-7890</p>
           <p>Email: sales@example.com</p>
           <div className="flex space-x-4 mt-4">
                <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
           </div>
         </div>
       </footer>
     );
   };

   export default Contact;