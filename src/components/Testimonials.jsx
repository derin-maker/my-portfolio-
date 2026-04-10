

export default function Testimonials() {
     const testimonials = [{
          name: "John Doe",
          message: "Working with you was seamless. Delivery was fast, clean, and exceeded expectations.",
          company: "Fintech Corp",
          title: "Product Manager",
     },
     {
          name: "John Doe",
          message: "Working with you was seamless. Delivery was fast, clean, and exceeded expectations.",
          company: "Fintech Corp",
          title: "Product Manager",
     },
     {
          name: "John Doe",
          message: "Working with you was seamless. Delivery was fast, clean, and exceeded expectations.",
          company: "Fintech Corp",
          title: "Product Manager",
     }, {
          name: "John Doe",
          message: "Working with you was seamless. Delivery was fast, clean, and exceeded expectations.",
          company: "Fintech Corp",
          title: "Product Manager",
     }, {
          name: "John Doe",
          message: "Working with you was seamless. Delivery was fast, clean, and exceeded expectations.",
          company: "Fintech Corp",
          title: "Product Manager",
     }, {
          name: "John Doe",
          message: "Working with you was seamless. Delivery was fast, clean, and exceeded expectations.",
          company: "Fintech Corp",
          title: "Product Manager",
     }];

     return (
          <section className="testimonials">
               <h2>Testimonials</h2>
               <div className="testimonial-grid">
                    {testimonials.map((item, index) => (
                         <div className="testimonial-card" key={index}>
                              <p className="message">"{item.message}"</p>
                              <h4>{item.name}</h4>
                              <span>{item.title} - {item.company}</span>
                         </div>
                    ))}
               </div>
          </section>
     )

}