import Bg from "../assets/img/bg.jpg";

export default function Contact() {
  const styling = {
    backgroundImage: `linear-gradient(#252525ad, #252525ad), url("${Bg}")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "100%",
  };

  return (
    <div className="flex flex-col gap-14">
      <main
        className="min-h-[50vh] bg-cover bg-no-repeat bg-center relative pt-12"
        style={styling}
      >
        <div className="flex items-center justify-center h-[50vh] flex-col gap-2">
          <h2 className="lg:text-5xl text-3xl font-bold text-white">Contact</h2>
          <div>
            <p className="text-gray-300 lg:text-base text-sm">
              Contact | About MediSync
            </p>
          </div>
        </div>
      </main>

      <div className="flex w-full max-sm:flex-col flex-wrap justify-evenly max-sm:justify-between items-start">
        <div className="w-full md:w-[45%] mb-4 max-md:px-5">
          <div className="mb-7">
            <h2 className="text-6xl font-bold mb-2 max-md:text-5xl">
              CONTACT US
            </h2>
            <p className="text-base">
              Your health is our priority. Contact us today to schedule an
              appointment or get answers to your healthcare questions.
            </p>
          </div>

          <div className="mb-7">
            <h2 className="text-2xl font-semibold">Healthcenter Address</h2>
            <p className="text-base">Near San Isidro Elementary School</p>
          </div>

          <div className="mb-7">
            <h2 className="text-2xl font-semibold">Healthcenter Phone</h2>
            <p className="text-base">+63912345678</p>
          </div>

          <div className="mb-7">
            <h2 className="text-2xl font-semibold">Healthcenter Email</h2>
            <p className="text-base">sanisidro@example.com</p>
          </div>

          <div className="mb-7">
            <h2 className="text-2xl font-semibold">Medisync Email</h2>
            <p className="text-base">medisync@example.com</p>
          </div>
        </div>
        <div className="w-full md:w-[45%] mb-4">
          <div className="">
            <div className="w-full h-[80vh] flex items-start justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247457.8760460688!2d121.00002553350795!3d14.280650119916558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd635d5fb8e493%3A0x709265a893f1146!2sSan%20Isidro%20Health%20Center!5e0!3m2!1sen!2sph!4v1715849364366!5m2!1sen!2sph"
                width="80%"
                height="75%"
                allowfullscreen=""
                loading="lazy"
                className="border-none"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
