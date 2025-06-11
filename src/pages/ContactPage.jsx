const ContactPage = () => {
  return (
    <div className="page-container" style={{overflow:"auto"}}>
      <h1>Contact Us</h1>
      <p>We'd love to hear from you! Whether you have questions about admissions, programs, or campus life, our team is here to help.</p>
      <h2>General Enquiries</h2>
      <p>
        <strong>Vivekanand College Main Campus</strong><br />
        C.S No 2130, "E" ward, Tarabai Park, Kolhapur-416 003, Maharashtra, India.<br />
      </p>
      <p>
        Phone: <b>+91 12345 67890</b><br />
        Email: <b>info@vivekanandcollege.edu</b><br />
        Office Hours: Monday - Friday, 9:00 AM - 5:00 PM IST
      </p>
      <h2>Admissions Office</h2>
      <p>
        For all admission-related queries regarding undergraduate or postgraduate programs:<br />
        Phone: +91 98765 43210<br />
        Email: admissions@vivekanandcollege.edu
      </p>
      <h2>Student Support Services</h2>
      <p>
        For current student support, academic advising, or general assistance:<br />
        Phone: +91 87654 32109<br />
        Email: studentsupport@vivekanandcollege.edu
      </p>
     
      <h2>Find Us on the Map</h2>
      <p>
        
        <br />
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2910.748556587836!2d74.23603477367172!3d16.712355321903267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc100664ad0e191%3A0x4b2af9253659bbec!2sVivekanand%20College!5e1!3m2!1sen!2sin!4v1749385179398!5m2!1sen!2sin" ></iframe>
      </p>
      
      <h2>Send Us a Message</h2>
      
      <form id="contactForm">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <input type="text" name="subject" placeholder="Subject" required />
          <textarea className='formfield' name="message" rows="5" placeholder="Your Message" required></textarea>
          <button className='cta-button' type="submit">Submit</button>
      </form>
    </div>
  );
}
export default ContactPage;