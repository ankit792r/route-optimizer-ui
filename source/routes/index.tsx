import { ELDLogs } from '@/features/maps/components/eld-logs';
import { RouteMap } from '@/features/maps/components/route-map';
import { TripForm } from '@/features/maps/components/trip-form';
import { useRouteOptimization } from '@/features/maps/hooks/useRouteOptimizer';
import { createFileRoute } from '@tanstack/react-router'
import { Fragment } from 'react/jsx-runtime';

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  const mutation = useRouteOptimization();

    const handleSubmit = (values: any) => {
    mutation.mutate(values);
  };

  return (
    <div className="container mx-auto p-8 space-y-8">

      <h1 className="text-4xl font-bold">
        Route Optimization System
      </h1>

      <TripForm onSubmit={handleSubmit} />

      {mutation.data && (
        <Fragment>
          <RouteMap data={mutation.data} />
          <ELDLogs logs={mutation.data.eld_logs} />
        </Fragment>
      )}
    </div>
  );
}
