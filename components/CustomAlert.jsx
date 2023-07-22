export const CustomAlert = ({ type, message }) => {
  let alertClass;
  type === "error"
    ? (alertClass = "bg-red-100 border-red-400 text-red-700")
    : (alertClass = "bg-green-100 border-green-400 text-green-700");

  return (
    alert && (
      <div
        className={`border px-4 py-3 rounded absolute top-0 right-0 mt-4 mr-4 ${alertClass}`}
        role="alert"
      >
        <strong class="font-bold">{message}</strong>
        {/* <span class="block sm:inline">Something seriously bad happened.</span> */}
      </div>
    )
  );
};
