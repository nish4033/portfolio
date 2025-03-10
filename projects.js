import React from "react";

export default function Projects() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-gray-900">Projects</h1>
      <ul className="mt-4 text-gray-700">
        <li>RBAC Authorization System - MongoDB & Redis</li>
        <li>API Rate Limiting System - Redis & Prometheus</li>
        <li>Automated PostgreSQL-MongoDB Migration - Apache Airflow</li>
      </ul>
    </div>
  );
}