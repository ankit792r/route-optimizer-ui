export function ELDLogs({ logs }: any) {
  return (
    <div className="space-y-4">
      {logs.map((log: any) => (
        <div
          key={log.day}
          className="border rounded p-4"
        >
          <h3 className="font-bold">
            Day {log.day}
          </h3>

          <p>Driving: {log.driving_hours} hrs</p>

          <p>On Duty: {log.on_duty_hours} hrs</p>

          <p>Off Duty: {log.off_duty_hours} hrs</p>
        </div>
      ))}
    </div>
  );
}