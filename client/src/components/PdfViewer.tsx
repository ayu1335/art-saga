import { useLocation, useNavigate } from "react-router-dom";
import jsPDF from "jspdf";

type LocationState = {
  images: string[];
  title?: string;
};

export default function PdfViewer() {
  const location = useLocation();
  const navigate = useNavigate();

  const state = location.state as LocationState | null;

  if (!state || !Array.isArray(state.images)) {
    return (
      <div style={{ padding: 24 }}>
        <h2>No data found</h2>
        <p>Please generate a story first.</p>
        <button onClick={() => navigate("/")}>Go back</button>
      </div>
    );
  }

  const { images, title } = state;

  const downloadPdf = () => {
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "px",
      format: "a4",
    });

    images.forEach((img, index) => {
      if (index > 0) pdf.addPage();

      pdf.addImage(
        `data:image/webp;base64,${img}`,
        "WEBP",
        20,
        20,
        560,
        800
      );
    });

    pdf.save("story.pdf");
  };

  return (
    <div style={{ padding: 24 }}>
      <h1 style={{ marginBottom: 20 }}>
        {title || "Generated Story"}
      </h1>

      {/* PDF-like page rendering */}
      {images.map((img, i) => (
        <div
          key={i}
          style={{
            width: 595,
            height: 842,
            margin: "40px auto",
            border: "1px solid #ccc",
            background: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={`data:image/webp;base64,${img}`}
            alt={`page-${i}`}
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain",
            }}
          />
        </div>
      ))}

      <div style={{ marginTop: 24 }}>
        <button onClick={downloadPdf}>Download PDF</button>
        <button
          onClick={() => navigate("/")}
          style={{ marginLeft: 12 }}
        >
          Generate Again
        </button>
      </div>
    </div>
  );
}
