import UploadForm from "../components/dashboard/UploadForm";

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-gray-50 flex justify-center pt-20 px-4">
      <div className="w-full h-150 max-w-xl bg-white rounded-xl shadow-sm border border-gray-200 p-8">
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">
          Manga Story Generator
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          Upload a reference image and describe the story you want to generate.
        </p>

        <UploadForm />
      </div>
    </main>
  );
}
