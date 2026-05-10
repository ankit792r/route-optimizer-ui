import { useForm } from "react-hook-form";

export function TripForm({ onSubmit }: any) {
  const { register, handleSubmit } = useForm();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4"
    >
      <input
        {...register("current_location")}
        placeholder="Current Location"
        className="border p-2 w-full"
      />

      <input
        {...register("pickup_location")}
        placeholder="Pickup Location"
        className="border p-2 w-full"
      />

      <input
        {...register("dropoff_location")}
        placeholder="Dropoff Location"
        className="border p-2 w-full"
      />

      <input
        type="number"
        {...register("current_cycle_used")}
        placeholder="Current Cycle Used"
        className="border p-2 w-full"
      />

      <button className="bg-black text-white px-4 py-2 rounded">
        Optimize Route
      </button>
    </form>
  );
}