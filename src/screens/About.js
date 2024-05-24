import Bg from "../assets/img/bg.jpg";
import Mission from "../assets/img/mission.jpg";

export default function About() {
  const styling = {
    backgroundImage: `linear-gradient(#252525ad, #252525ad), url("${Bg}")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "100%",
  };

  return (
    <div className="flex flex-col bg-white min-h-screen w-full overflow-x-hidden">
      <main
        className="min-h-[50vh] bg-cover bg-no-repeat bg-center relative pt-12"
        style={styling}
      >
        <div className="flex items-center justify-center h-[50vh] flex-col gap-2">
          <h2 className="lg:text-5xl text-3xl font-bold text-white">
            About MediSync
          </h2>
          <div>
            <p className="text-gray-300 lg:text-base text-sm">
              Home | About MediSync
            </p>
          </div>
        </div>
      </main>

      <div className="w-full pt-10 pb-6 text-black flex items-center justify-center mb-6 md:mb-16">
        <div className="container flex flex-col items-center px-2 gap-12">
          <div className="w-full flex flex-col items-center pb-6 pt-8">
            <h2 className="text-3xl font-bold mb-2 text-center">
              What is MediSync?
            </h2>
            <p className="text-base text-center w-[80%] max-w-full">
              MediSync, a student project, aims to improve healthcare in
              Barangay San Isidro by addressing inefficiencies in the local
              health center's record-keeping system through a centralized
              database and FAQ support.
            </p>
          </div>

          <div className="flex w-full max-sm:flex-col flex-wrap justify-evenly max-sm:justify-between items-center">
            <div className="w-full md:w-[45%] mb-4">
              <h2 className="text-4xl font-bold mb-5">Our Story</h2>
              <p>
                We noticed that barangay health centers were struggling to
                provide efficient and effective care. Lost or misplaced medical
                cards caused delays and frustration, sometimes even leading to
                misdiagnoses. Without a centralized record system, it was hard
                for healthcare providers to track patient histories and offer
                personalized treatment.
                <br />
                <br />
                We also recognized the strain placed on both patients and staff
                by the constant influx of questions about common health
                concerns. Long lines and wait times discouraged individuals from
                seeking care, further exacerbating existing health disparities.
                <br />
                <br />
                Determined to find a solution, we turned to technology. Digital
                record-keeping and accessible information platforms could
                streamline processes, empower patients, and improve health
                outcomes. That's how MediSync started. Our mission is to bridge
                the gap between technology and healthcare, revolutionizing the
                operation of barangay health centers. We aim to give communities
                the tools and information they need to manage their health, one
                digital record and one answered question at a time.
                <br />
                <br />
                Our journey continues, driven by the impact we're making in
                countless lives. We are dedicated to ongoing innovation and
                expanding our reach, ensuring every community has access to
                quality healthcare.
              </p>
            </div>
            <div className="w-full md:w-[45%] mb-4">
              <div className="mb-6">
                <img src={Mission} className="w-full max-w-full" />
              </div>
            </div>
          </div>

          <div className="flex w-full flex-wrap justify-evenly">
            <div className="w-full md:w-[45%] mb-4">
              {/* <div className="mb-6">
                <img src={Mission} className="w-full max-w-full" />
              </div> */}
              <p className="text-xl font-bold mb-2">Our Mission</p>
              <p>
                MediSync empowers communities to achieve optimal health and
                well-being through innovative technology and accessible
                information. We are dedicated to actively contributing to the
                United Nations' goal of good health and well-being by improving
                healthcare access and outcomes. MediSync is committed to
                streamlining healthcare services through efficient digital
                record-keeping, enhancing accuracy, and reducing wait times. We
                also empower individuals with easily accessible, up-to-date
                health information to foster informed decision-making.
              </p>
            </div>
            <div className="w-full md:w-[45%] mb-4">
              {/* <div className="mb-6">
                <img src={Bg} className="w-full max-w-full" />
              </div> */}
              <p className="text-xl font-bold mb-2">Our Vision</p>
              <p>
                MediSync envisions a future where every community has access to
                comprehensive, efficient, and patient-centered healthcare. We
                strive to be the leading provider of innovative health
                technology solutions that enable barangay health centers to
                provide seamless, personalized care through secure and
                user-friendly digital records. We foster a culture of health
                literacy and proactive well-being through accessible information
                and resources. MediSync is committed to partnering with
                healthcare providers, community organizations, and government
                agencies to create a sustainable and inclusive healthcare
                ecosystem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
