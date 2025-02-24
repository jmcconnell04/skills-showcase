# Dockerfile
FROM denoland/deno:alpine-1.35.0

WORKDIR /app

COPY . .

RUN deno cache main.ts

EXPOSE 8000

# Default environment variable: set ENVIRONMENT=local for local container usage,
# or override (e.g. ENVIRONMENT=prod) when deploying.
ENV ENVIRONMENT=local

CMD ["run", "--allow-env", "--allow-net", "main.ts"]
