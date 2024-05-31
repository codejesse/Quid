import React from "react";

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="25"
      height="25"
      fill="none"
    >
      <path fill="url(#a)" d="M0 0h25v25H0z"></path>
      <defs>
        <pattern
          id="a"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use transform="scale(.01)" xlinkHref="#b"></use>
        </pattern>
        <image
          id="b"
          width="100"
          height="100"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD70lEQVR4nO2du4tUSRSHPxUd8QXuqCgo6NrqCIuorYO6zKIzBmKwOGy4iGsqGijqH+ADA8HUTMTAF6iIkSC6YiIGPrINNFODVWGHjWZGvVJLDTRDV93b03fbU7d/H5xkuMU9p35Tz1t1GoQQQgghhBBCCCGEEEIIIYQQotNMA5YAfUB9kg0BuztkQ03e3+d9qyzrgRPATeAV8B4YBzLjNu59dT7fAI4D60iYbcATAxWblWyPgX4S4wAwZqDysv/JRoH9JNQyqixG1iDKVhKgit1UFrBHGGedgUrKOmxuVmaWExHH/wFOAbuAlcA87DIPWAUMAqe976G4jmGYGxExXICp8iMwEojtGoZ5GXDatYzUORuI7TmGeR9wemeBsj3Gu7HBQGxvMcr0yAo81l39DPwJfPHPvgEO+e0VS6wOxDZm0Nf/WBwZ+EL/+b9G1iwXscWCSHy9GKQv4vCsJs/PBf7OmVLuxg49ET/XYpANEYdddzaZfQXm+Jeww4yInz9hkM0Rh5txuIAgD7BFyM+NGKS/RUGGCwhyGVuE/DS5p7W9RUHmAx9zBNmDLUJ+utjNMdCiII7fgM8JjB8ThOJzsZtj5xQEmSj3FPjasNA6FpgIfG+yNha+yQjS2IUtxTZdJUgKSBBjVF6Q/pxjOj1NygxEnneL00aWAyeBe/70yF/+i+Yt//daizFWXpBnOdPe5U3KvI08f9s/MxM4779756117gLLCsYoQWhdkIV+9zhrwT4AayRI+S3kju+OsimY687mqIWUK8i/UxRjwo5IkHIFydq01xLEliCZ/zKoQb1kQcaBC8AOYIX/XnEU+FSg7EEJUm4L+QLsDVTqlgIn789IkHIFuZ4zDlzLKX9FgpQryHCOIH8UWCiGCJXRSp1w5dTa+G7j7L4EKbeF9OYIsqmNE+1qIbQuiDsdknfFToJ0aOskIx93hkqCSJDu3H7PCvipFiJBvg9qIcaQIMaQIMaQIMb4pYtnWQMYZEcXC7KNClxHqJIgW6jAhZ0qCbKRClxpI5DArN5gswLviZXJY3ZO+bVVudLW6qXP1OhJ7dLnoojDlhMClHEt+gcMMi1y5zzlPCcT1AKxjVpNHBBLreEyAKXOUGqpNWLJZ1yKo9Q5l2LymVh6JpfiKFVWR9IzXcUwxyMD34hPcTTkA1xo9GLndO9bzft6LiJG5k9EmiVv0VVFq2GcxwYqKeuQPSQB+rsoTWydRNhf8H5fqjYK/E5ibPUbdVkFu6k6CbPGp8pwp85fAO8S6dLGvK/P/dT2aAoDeDv0+rXJ5km7rYMd/LmKwUnv3uR9MpmyTwghhBBCCCGEEEIIIYQQQghBxfkGp8/0SJIna6oAAAAASUVORK5CYII="
        ></image>
      </defs>
    </svg>
  );
}

export default Icon;