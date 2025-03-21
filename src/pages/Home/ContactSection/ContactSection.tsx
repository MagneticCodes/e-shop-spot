import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection: React.FC = () => {
  const locations = [
    {
      country: "UNITED STATES",
      phone: "+ 123 456 7890",
      email: "admin@betashop",
      address: "201 Oak Street Building 27\nManchester, USA",
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47615.84665749706!2d-71.48488361918054!3d42.99557603760287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e24ed368cf6e2d%3A0x70876f797ccdf87b!2sManchester%2C%20NH!5e0!3m2!1sen!2sus!4v1707434895484!5m2!1sen!2sus",
    },
    {
      country: "AUSTRALIA",
      phone: "+ 123 456 7890",
      email: "super-admin@gmail.com",
      address: "201 Oak Street Building 27\nManchester, USA",
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47615.84665749706!2d-71.48488361918054!3d42.99557603760287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e24ed368cf6e2d%3A0x70876f797ccdf87b!2sManchester%2C%20NH!5e0!3m2!1sen!2sus!4v1707434895484!5m2!1sen!2sus",
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2">GET IN TOUCH</h2>
        <div className="w-24 h-1 bg-emerald-400 mx-auto mb-12"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className=" flex items-center gap-10 mb-8">
              {locations.map((location, index) => (
                <div key={index} className="space-y-4">
                  <h3 className="font-bold text-lg">{location.country}</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-gray-600">
                      <Phone className="w-5 h-5 text-emerald-400" />
                      <span>{location.phone}</span>
                    </div>
                    {location.email && (
                      <div className="flex items-center gap-3 text-gray-600">
                        <Mail className="w-5 h-5 text-emerald-400" />
                        <span>{location.email}</span>
                      </div>
                    )}
                    <div className="flex items-start gap-3 text-gray-600">
                      <MapPin className="w-5 h-5 text-emerald-400 mt-1" />
                      <span className="whitespace-pre-line">
                        {location.address}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="w-full h-64 rounded-lg overflow-hidden">
              <iframe
                src={locations[0].mapSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
              />
            </div>
          </div>

          <form className="space-y-6">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
            <input
              type="email"
              placeholder="E-mail"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
            <textarea
              placeholder="Message"
              rows={6}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
            <button className="w-32 px-6 py-3 bg-emerald-400 text-white rounded-lg hover:bg-emerald-500 transition-colors">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
