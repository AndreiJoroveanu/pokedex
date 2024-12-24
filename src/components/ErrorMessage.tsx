import usePokemonStore from "../store/usePokemonStore.ts";

interface ErrorMessageProps {
  type: string;
}

const ErrorMessage = ({ type }: ErrorMessageProps) => {
  const { clearFilters } = usePokemonStore();

  return (
    <div className="lg:h-screen lg:-m-28 flex flex-col gap-4 justify-center items-center text-center">
      <h2 className="text-3xl font-bold">No {type} Found</h2>

      <p className="text-gray-700 mb-2">
        Try other filtering options or another search query
      </p>

      <button
        onClick={clearFilters}
        className="border w-full py-2 rounded-full shadow-md hover:shadow-lg transition-shadow bg-black text-white"
      >
        Clear Filtering
      </button>
    </div>
  );
};
export default ErrorMessage;
