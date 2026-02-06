import { Button } from '@/components';

/**
 * Home page - Landing page of the application
 */
export default function HomePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 text-center">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
        Welcome to Your App
      </h1>
      <p className="mt-6 text-lg leading-8 text-gray-600">
        A reusable React + Vite frontend template with scalable architecture.
        Start building your application with best practices baked in.
      </p>
      <div className="mt-10 flex items-center justify-center gap-4">
        <Button variant="primary">Get Started</Button>
        <Button variant="secondary">Learn More</Button>
      </div>
    </div>
  );
}
