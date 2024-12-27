import usePokemonStore from "../store/usePokemonStore.ts";

interface ErrorMessageProps {
  type: string;
}

const ErrorMessage = ({ type }: ErrorMessageProps) => {
  const { clearFilters } = usePokemonStore();

  return (
    <div className="flex flex-col items-center justify-center gap-4 text-center lg:h-screen">
      <h2 className="text-3xl font-bold">No {type} Found</h2>

      <p className="mb-2 text-gray-700">
        Try other filtering options or another search query
      </p>

      <button
        onClick={clearFilters}
        className="w-full rounded-full border bg-black py-2 text-white shadow-md transition-shadow hover:shadow-lg"
      >
        Clear Filtering
      </button>
    </div>
  );
};
export default ErrorMessage;
