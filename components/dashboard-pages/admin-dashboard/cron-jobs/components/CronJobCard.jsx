export default function CronJobCard({ title, description, command }) {
  return (
    <div className="border-0 p-4 border mb-3">
      <div className="d-flex align-items-center mb-3">
        <h6 className="card-title mb-0 widget-title p-0 fw-bold">{title}</h6>
        <p className="ms-3">{description}</p>
      </div>
      <div className="bg-light rounded p-3">
        <code className="text-secondary">{command}</code>
      </div>
    </div>
  );
}
