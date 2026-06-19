'use client';

import { Component, type ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="flex min-h-screen items-center justify-center bg-parlour-night px-4">
          <div className="max-w-md text-center">
            <h2 className="font-display text-3xl font-light text-parlour-pearl">
              Something went wrong
            </h2>
            <p className="mt-4 text-parlour-pearl/70">
              We&apos;re experiencing technical difficulties. Please refresh the page or try again later.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="mt-6 border border-parlour-champagne/70 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-parlour-champagne transition-colors hover:bg-parlour-champagne hover:text-parlour-night"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
