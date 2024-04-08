import React, { useEffect } from "react";
import { getWebInstrumentations, initializeFaro } from "@grafana/faro-web-sdk";
import { TracingInstrumentation } from "@grafana/faro-web-tracing";

function Grafana() {
  useEffect(() => {
    initializeFaro({
        url: 'https://faro-collector-prod-us-east-0.grafana.net/collect/f21adcbeefb23654628eb884a18efe39',
        app: {
          name: 'e-tutor',
          version: '1.0.0',
          environment: 'production'
        },
      instrumentations: [
        ...getWebInstrumentations(),
        new TracingInstrumentation(),
      ],
    });
  }, []);

  return null;
}

export default Grafana;
