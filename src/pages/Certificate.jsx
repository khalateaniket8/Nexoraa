import { useParams, Link } from "react-router-dom";
import jsPDF from "jspdf";

const Certificate = () => {
  const { courseName } = useParams();

  const user = JSON.parse(localStorage.getItem("user"));

  const downloadCertificate = () => {
    const doc = new jsPDF("landscape");

    // Border
    doc.setDrawColor(0, 102, 204);
    doc.setLineWidth(3);
    doc.rect(10, 10, 277, 190);

    // Title
    doc.setFont("helvetica", "bold");
    doc.setFontSize(28);
    doc.setTextColor(0, 102, 204);
    doc.text("CERTIFICATE OF COMPLETION", 148, 35, {
      align: "center",
    });

    // Subtitle
    doc.setFontSize(16);
    doc.setTextColor(0, 0, 0);
    doc.text("This Certificate is Proudly Presented To", 148, 55, {
      align: "center",
    });

    // Student Name
    doc.setFontSize(24);
    doc.setTextColor(0, 153, 76);
    doc.text(user?.name || "Student", 148, 75, {
      align: "center",
    });

    // Course Text
    doc.setFontSize(16);
    doc.setTextColor(0, 0, 0);
    doc.text(
      "For Successfully Completing The Course",
      148,
      95,
      { align: "center" }
    );

    // Course Name
    doc.setFontSize(22);
    doc.setTextColor(0, 102, 204);
    doc.text(decodeURIComponent(courseName), 148, 115, {
      align: "center",
    });

    // Date
    doc.setFontSize(14);
    doc.setTextColor(0, 0, 0);
    doc.text(
      `Date : ${new Date().toLocaleDateString()}`,
      30,
      170
    );

    // Instructor
    doc.text("Instructor : LearnSphere Team", 190, 170);

    // Footer
    doc.setFontSize(12);
    doc.setTextColor(120);
    doc.text(
      "Congratulations on successfully completing the course!",
      148,
      188,
      { align: "center" }
    );

    doc.save(
      `${decodeURIComponent(courseName)}_Certificate.pdf`
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-indigo-100 flex justify-center items-center p-8">

      <div className="bg-white border-[10px] border-blue-600 rounded-2xl shadow-2xl p-10 w-full max-w-5xl">

        <h1 className="text-5xl font-bold text-center text-blue-700">
          Certificate of Completion
        </h1>

        <p className="text-center text-xl mt-8">
          This Certificate is Proudly Presented To
        </p>

        <h2 className="text-5xl font-bold text-center text-green-600 mt-6">
          {user?.name || "Student"}
        </h2>

        <p className="text-center text-xl mt-8">
          For Successfully Completing The Course
        </p>

        <h3 className="text-4xl font-bold text-center text-blue-700 mt-6">
          {decodeURIComponent(courseName)}
        </h3>

        <div className="flex justify-between mt-16 text-lg">

          <div>
            <p className="font-bold">
              Instructor
            </p>

            <p>LearnSphere Team</p>
          </div>

          <div>
            <p className="font-bold">
              Date
            </p>

            <p>{new Date().toLocaleDateString()}</p>
          </div>

        </div>

        <div className="flex justify-center gap-6 mt-14">

          <button
            onClick={downloadCertificate}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg"
          >
            📄 Download PDF
          </button>

          <Link
            to="/dashboard"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg"
          >
            Back to Dashboard
          </Link>

        </div>

      </div>

    </div>
  );
};

export default Certificate;