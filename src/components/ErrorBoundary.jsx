import { Component } from 'react';

// If a page ever crashes, show a message instead of a blank screen. Re-mounted on every route change (see App.jsx).
export default class ErrorBoundary extends Component {
  state = { error: null };
  static getDerivedStateFromError(error) { return { error }; }
  componentDidCatch(error) { console.error(error); }
  render() {
    if (!this.state.error) return this.props.children;
    return (
      <div className="px-5 py-32 text-center">
        <h2 className="text-2xl font-semibold">Something went wrong</h2>
        <p className="mt-2 text-stone-600">Please try again.</p>
        <button className="mt-5 rounded-xl bg-ink px-6 py-3 font-semibold text-white" onClick={() => this.setState({ error: null })}>Reload this page</button>
      </div>
    );
  }
}
