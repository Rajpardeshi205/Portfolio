import React, { useState } from "react";
import Layout from "./Layout";
import { Button, Input } from "@material-tailwind/react";
import { db } from "../firebase/FirebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

const contact = {
  address: "T.P.S. Road, Shivaji Nagar, Parli Vaijnath 431515",
  phoneno: "+91 9834483892",
  Email: "Rajpardeshi205@gmail.com",
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "", // Changed from eventType to message
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "contacts"), {
        ...formData,
        createdAt: new Date(),
      });

      // Reset the form
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "", // Reset message field
      });

      toast.success("Your message has been submitted!");
    } catch (error) {
      console.error("Error adding document: ", error);
      toast.error("Error submitting your message. Please try again later.");
    }
  };

  return (
    <Layout>
      <section className="bg-cover h-screen bg-gradient-to-b from-black via-gray-900 to-purple-700 text-white w-full flex flex-col items-center justify-center text-center">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="text-4xl mb-8"
        >
          Connect With Us
        </motion.h1>
        <div className="flex flex-col items-center z-10 space-y-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="w-96">
              <Input
                type="text"
                color="purple"
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="bg-gradient-to-r from-pink-300 via-orange-300 to-purple-500 text-transparent bg-clip-text tracking-tight font-light button-hover-effect"
              />
            </div>
            <div className="w-96">
              <Input
                type="tel"
                color="purple"
                label="Phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="bg-gradient-to-r from-pink-300 via-orange-300 to-purple-500 text-transparent bg-clip-text tracking-tight font-light button-hover-effect"
              />
            </div>
            <div className="w-96">
              <Input
                type="email"
                color="purple"
                label="Email Address"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="tracking-tight text-light-blue-500 font-light"
              />
            </div>
            <div className="w-96">
              <Input
                type="text"
                color="purple"
                label="Your Message" // Updated label
                name="message" // Changed name attribute
                value={formData.message} // Updated to message
                onChange={handleChange}
                className="bg-gradient-to-r from-pink-300 via-orange-300 to-purple-500 text-transparent bg-clip-text tracking-tight font-light button-hover-effect"
              />
            </div>
            <div>
              <Button type="submit" className="bg-red-800 w-96">
                Submit
              </Button>
            </div>
          </form>
        </div>

        <div>
          <motion.h1
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
            className=" mt-20 text-4xl mb-8"
          >
            Get In Touch
          </motion.h1>
          <div className="text-center tracking-tighter">
            <motion.address
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1.5 }}
              className="my-4"
            >
              {contact.address}
            </motion.address>
            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 2 }}
              className="my-4"
            >
              {contact.phoneno}
            </motion.p>
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 100 }}
              transition={{ duration: 2 }}
            >
              {" "}
              <a href="#" className="my-4">
                {contact.Email}
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
