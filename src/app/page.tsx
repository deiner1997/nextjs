'use client';
'use client';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Home() {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}
