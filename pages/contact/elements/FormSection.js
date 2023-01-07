import react,{useState} from "react";
import { useRouter } from 'next/router';
import Link from "next/link";
import swal from "sweetalert";
import emailjs from '@emailjs/browser';

const FormSection = () => {
	const [value, setValue] = useState('');
    const router = useRouter()
    const [form, setForm] = useState({})
const [errors, setErrors] = useState({})
const setField = (field, value) =>{
  setForm({
    ...form,
    [field]:value
  })
  if(!!errors[field])
  setErrors({
    ...errors,
    [field]:null
  })
}
    const SubmitForm = (e) => {
      const { firstname, email, message} = form;
   if (firstname && email && message) {
     const res = fetch(
       "https://tecblic-website-form-default-rtdb.asia-southeast1.firebasedatabase.app/razacontactform.json",
       {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify({
           firstname,
           message,
           email,          
         }),
       }
     );
     if (res) {
       setForm({
         firstname: "",
         message: "",
         email: "",
       });
       swal.center;
       swal({
         title: "Thank you!",
         text: "Your message has been successfully sent. We will contact you very soon!",
         icon: "success",
         button: "okay",
       });
       emailjs
       .sendForm(
         "service_q878793",
         "template_bal5jwv",
         e.target,
         "tLuKrvbT6qzbOOmy3"
       )
       .then(
         (result) => {
           console.log(result.text);
         },
         (error) => {
           console.log(error.text);
         }
       );
     } else {
       swal({
         title: "Someting went worng",
         text: "",
         icon: "error",
         button: "Okay",
       });
     }
   } else {
     swal({
       title: "Please fill empty fields",
       text: "",
       icon: "warning",
       button: "Okay",
     });
   }
   
   }
    const handleChange = event => {
      const result = event.target.value.replace(/^[0-9\b]+$/);
  
      setValue(result);
    };
    const validdateForm = () =>{
      const { firstname, email,message } = form;
      const newErrors = {}
    
      if(!firstname || firstname === '') newErrors.firstname = 'Please enter your name'
   
       
      if (!email || email === "") newErrors.email = "Please enter a valid email";
      else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
        newErrors.email = "Invalid email address";
     
      }
	  if (!message || message === "") newErrors.message = "Please write something"
	  else if (message.length < 10) newErrors.message = 'message is too short'
    
      return newErrors
    }
    const submitData = async (event) => { 
      event.preventDefault();
  const formErrors = validdateForm()
  if(Object.keys(formErrors).length >0){
    setErrors(formErrors)
  }
  else{
    SubmitForm(form);
  }
    };
  return (
    <div>
    <div className="grid  grid-cols-1 gap-8 px-8 py-16 mx-auto  md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-gray-900 text-gray-100">
			
	<div className="flex flex-col justify-between">
		<div className="space-y-2">
			<h2 className="text-4xl font-bold leading-tight lg:text-5xl">Can&apos;t find what you want lets talk!</h2>
			<div className="dark:text-gray-400">Write something for us!</div>
      <Link href="mailto:contact@fineax.ai"><a> <p className="font-bold text-2xl mt-3">contact@fineax.ai</p></a></Link>
      {/* <Link href="tel:+919825308113"><a>     <p className="font-bold text-2xl mt-3">+91 9825308113</p></a></Link>  */}
		</div>
		
	</div>
	<div className='bg-gray-700 p-6 rounded-lg'>
	<form method="POST" className="space-y-5">
		<div>
			<label htmlFor="firstname" className="text-sm">Full name</label>
			<input  
			  className={`w-full p-3 rounded dark:bg-gray-800${
				errors.firstname ? "border border-red-500" : ""
			  }`}
			  id="grid-first-name"
			  type="text"
			  name="firstname"
			  placeholder="You Are"
			  value={form.firstname}
			  onChange={(e) => setField("firstname", e.target.value)}
			/>
			   <p className="text-red-500 px-1">{errors.firstname}</p>
		</div>
		<div>
			<label htmlFor="email" className="text-sm">Email</label>
			<input
			 className={`w-full p-3 rounded dark:bg-gray-800 ${
				errors.firstname ? "border border-red-500" : ""
			  }`}
			  id="grid-first-name"
			  type="text"
			  name="email"
			  placeholder="Email"
			  value={form.email}
			  onChange={(e) => setField("email", e.target.value)}
			
			
			/>
			     <p className="text-red-500 px-1">{errors.email}</p>
		</div>
		<div>
			<label htmlFor="message" className="text-sm">Message</label>
			<textarea
			 placeholder="Looking for..."
			 name="message"
			 rows="2"
			 className={`w-full p-3 rounded dark:bg-gray-800 ${
			   errors.firstname ? "border border-red-500" : ""
			 }`}
			 value={form.message}
			 onChange={(e) => setField("message", e.target.value)}
		></textarea>
		  <p className="text-red-500 px-1">{errors.message}</p>
		</div>
		<button type="submit" onClick={submitData} className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-violet-400 dark:text-gray-900">Send Message</button>
	</form>
	</div>
</div>
</div>
  
  )
}

export default FormSection
