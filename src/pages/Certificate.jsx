import { useParams, Link } from "react-router-dom";
import jsPDF from "jspdf";

const Certificate = () => {
  const { courseName } = useParams();

  const user = JSON.parse(localStorage.getItem("user"));

  const today = new Date().toLocaleDateString();

  const certificateId =
    "LS-" +
    Math.floor(Math.random() * 1000000);

  const downloadCertificate = () => {
    const doc = new jsPDF("landscape");

    // Border
    doc.setDrawColor(25, 118, 210);
    doc.setLineWidth(3);
    doc.rect(10, 10, 277, 190);

    // Title
    doc.setFont("helvetica", "bold");
    doc.setFontSize(28);
    doc.setTextColor(25, 118, 210);
    doc.text(
      "CERTIFICATE OF COMPLETION",
      148,
      35,
      { align: "center" }
    );

    // Subtitle
    doc.setFontSize(16);
    doc.setTextColor(0, 0, 0);
    doc.text(
      "This Certificate is Proudly Presented To",
      148,
      55,
      { align: "center" }
    );

    // Name
    doc.setFontSize(26);
    doc.setTextColor(0, 150, 90);
    doc.text(
      user?.name || "Student",
      148,
      75,
      { align: "center" }
    );

    // Course
    doc.setFontSize(16);
    doc.setTextColor(0, 0, 0);
    doc.text(
      "For Successfully Completing",
      148,
      95,
      { align: "center" }
    );

    doc.setFontSize(22);
    doc.setTextColor(25, 118, 210);
    doc.text(
      decodeURIComponent(courseName),
      148,
      115,
      { align: "center" }
    );

    // Footer
    doc.setFontSize(14);

    doc.text(
      `Date : ${today}`,
      25,
      165
    );

    doc.text(
      "Instructor : LearnSphere Team",
      180,
      165
    );

    doc.text(
      `Certificate ID : ${certificateId}`,
      25,
      178
    );

    doc.text(
      "Authorized Signature",
      210,
      178
    );

    doc.setFontSize(12);
    doc.setTextColor(100);

    doc.text(
      "Congratulations on your achievement!",
      148,
      190,
      {
        align: "center",
      }
    );

    doc.save(
      `${decodeURIComponent(
        courseName
      )}_Certificate.pdf`
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-6">

      <div className="bg-white dark:bg-gray-900 dark:text-white rounded-3xl shadow-2xl border-[12px] border-blue-600 max-w-5xl w-full p-10">

        <h1 className="text-5xl font-bold text-center text-blue-700">
          Certificate of Completion
        </h1>

        <p className="text-center mt-8 text-xl">
          This Certificate is Proudly Presented To
        </p>

        <h2 className="text-center text-5xl font-bold text-green-600 mt-6">
          {user?.name || "Student"}
        </h2>

        <p className="text-center mt-8 text-xl">
          For Successfully Completing
        </p>

        <h3 className="text-center text-4xl font-bold text-blue-700 mt-5">
          {decodeURIComponent(courseName)}
        </h3>

        <div className="grid md:grid-cols-3 gap-6 mt-14 text-center">

          <div>
            <h3 className="font-bold">
              Instructor
            </h3>

            <p>LearnSphere Team</p>
          </div>

          <div>
            <h3 className="font-bold">
              Completion Date
            </h3>

            <p>{today}</p>
          </div>

          <div>
            <h3 className="font-bold">
              Certificate ID
            </h3>

            <p>{certificateId}</p>
          </div>

        </div>

        <div className="mt-12 flex justify-center">

          <div className="border-2 border-dashed p-6 rounded-xl text-gray-500">
            QR Verification
          </div>

        </div>

        <div className="flex flex-wrap justify-center gap-5 mt-12">

          <button
            onClick={downloadCertificate}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl"
          >
            📄 Download PDF
          </button>

          <Link
            to="/dashboard"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl"
          >
            Dashboard
          </Link>

        </div>

      </div>

    </div>
  );
};

export default Certificate;