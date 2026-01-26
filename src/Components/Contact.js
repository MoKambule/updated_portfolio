
   import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
   import { faLinkedin,  faGithub } from '@fortawesome/free-brands-svg-icons';

   const Contact = () => {
     return (
       <footer className="bg-gray-100 p-4">
         <div className="max-w-7xl mx-auto">
           <h3 className="text-lg font-bold mb-4">Contact Me</h3>
           <p className='hover:text-green-600'><span className="font-semibold">Phone:</span>  +27 604-158-227</p>
           <p className='hover:text-green-600'><span className="font-semibold">Email:</span> kambulemokgethwa@gmail.com </p>
           <p className='hover:text-green-600'>       mokambujhb024@student.wethinkcode.co.za</p>
           <div className="flex space-x-6 mt-4">
                <a href="https://www.linkedin.com/in/kambule-mokgethwa/" className='text-3xl'><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href="https://github.com/MoKambule" className='text-3xl'><FontAwesomeIcon icon={faGithub} /></a>
           </div>
         </div>
       </footer>
     );
   };

   export default Contact;